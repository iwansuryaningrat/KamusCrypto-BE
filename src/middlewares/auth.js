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

  if (!token) {
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
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send({
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.admin) {
      req.user = decoded;
      next();
    } else {
      return res.status(403).send({
        message: "Require Admin Role!",
      });
    }
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
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send({
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === "Pro Member" || decoded.admin) {
      req.user = decoded;
      next();
    } else {
      return res.status(403).send({
        message:
          "You are not a pro member. Please upgrade member type to pro member",
      });
    }
  } catch (err) {
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
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).send({
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role === "Super Admin" && decoded.admin) {
      req.user = decoded;
      next();
    } else {
      return res.status(403).send({
        message: "Require Super Admin Role!",
      });
    }
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

export { login, admin, proMember, superAdmin };
