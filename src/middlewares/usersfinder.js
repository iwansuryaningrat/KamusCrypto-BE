import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import db from "../models/index.js";
const Users = db.users;

// User Finder Middleware
/**
 * If the user is logged in, and the user is trying to access their own data, then allow them to access
 * their data
 * @param req - The request object
 * @param res - the response object
 * @param next - is a function that you call to pass control to the next middleware function.
 * @returns The user object
 */
const userFinder = (req, res, next) => {
  const token = req.header("x-auth-token");
  const id = req.params.id;

  if (!token) {
    return res.status(401).send({
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id === id) {
      req.user = decoded.user;
      next();
    } else {
      return res.status(403).send({
        message: "You are not authorized to do this action!",
      });
    }
  } catch (err) {
    return res.status(401).send({
      message: "Token is not valid",
    });
  }
};

// Verify User that available in database
/**
 * It takes the refresh token from the request body, verifies it, and then checks if the user exists in
 * the database. If the user exists, it adds the user to the request object and calls the next
 * function. If the user doesn't exist, it returns a 404 error. If the token is invalid, it returns a
 * 401 error.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the application’s request-response cycle.
 * @returns The user object.
 */
const verifyUser = (req, res, next) => {
  const refreshToken = req.body.refreshToken;

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_SECRET);
    const id = decoded.id;
    Users.findById(id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: "User not found!",
          });
        } else {
          req.user = decoded.user;
          next();
        }
      })
      .catch((err) => {
        return res.status(500).send({
          message: "Error retrieving User with id=" + id,
        });
      });
  } catch (err) {
    return res.status(401).send({
      message: err.message || "Token is not valid",
    });
  }
};

export { userFinder, verifyUser };
