import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

// Basic Membership Middleware (Done)
/**
 * If the token is not present, return a 401 error. If the token is present, verify the token and if
 * it's valid, return the user. If the token is expired, return a 401 error. If the token is not valid,
 * return a 401 error.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that is called when the middleware is complete.
 * @returns a function.
 */
const login = (req, res, next) => {
  const token = req.header("x-auth-token");

  // Get Cookies data
  // const token = req.cookies["x-auth-token"];
  const isLoggedin = req.cookies["isLoggedin"];

  if (!token || !isLoggedin) {
    return res.status(401).send({
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).send({
        message: "Token is expired",
      });
    } else {
      if (err.name === "TokenExpiredError") {
        return res.status(401).send({
          message: "Token is expired",
        });
      } else {
        return res.status(401).send({
          message: "Token is not valid",
        });
      }
    }
  }
};

// Admin Middleware (Done)
/**
 * If the user is an admin, then the user can access the route
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns a function.
 */
const admin = (req, res, next) => {
  const { admin, role } = req.user;

  if (!admin || role != "Admin") {
    return res.status(403).send({
      message: "You don't have access this resource! Please login as Admin",
    });
  }

  next();
};

// Pro Membership Middleware (Done)
/**
 * If the user is a pro member or admin, then they can access the route
 * @param req - The request object.
 * @param res - The response object.
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * function in the stack.
 * @returns a function.
 */
const proMember = (req, res, next) => {
  const { role } = req.user;

  if (!role || role != "Pro Member") {
    return res.status(403).send({
      message: "Access Denied! You don't have a membership",
    });
  }

  next();
};

// Super Admin Middleware (Done)
/**
 * If the user is a Super Admin and the token is valid, then the user is allowed to access the route.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function in the stack.
 * @returns a function.
 */
const superAdmin = (req, res, next) => {
  const { admin, role } = req.user;

  if (!admin || role != "Super Admin") {
    return res.status(403).send({
      message:
        "You don't have access this resource! Please login as Super Admin",
    });
  }

  next();
};

export { login, admin, proMember, superAdmin };
