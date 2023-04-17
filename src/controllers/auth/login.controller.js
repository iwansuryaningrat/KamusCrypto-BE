/* Importing the necessary packages for the function to work. */
import db from "../../models/index.js";
const Users = db.users;
import jwt from "jsonwebtoken";
import "dotenv/config";
import bcrypt from "bcrypt";

// Login Controller Function (DONE)
/**
 * It checks if the user exists, if it does, it compares the password, if it matches, it creates a
 * token and a refresh token, and sends it back to the client
 * @param req - The request object.
 * @param res - the response object
 * @returns The token and refreshToken are being returned.
 */
const loggingin = async (req, res) => {
  const { email, password, rememberMe } = req.body;

  // Validate request
  if (!email && !password) {
    return res.status(400).send({
      message: "Invalid Email or Password!",
    });
  }

  if (rememberMe) {
    var timeExpire1 = "3h";
    var timeExpire2 = "6h";
  } else {
    var timeExpire1 = "6h";
    var timeExpire2 = "12h";
  }

  await Users.findOne({
    email,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found!",
        });
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign(
              {
                id: user.id,
                email: user.email,
                name: user.name,
                username: user.username,
                admin: user.type.isAdmin,
                role: user.type.accountType.member,
                memberType: user.type.accountType.subscription.subscriptionType,
                isActivated: user.type.isActivated,
                image: user.image.imageLink,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: timeExpire1,
              }
            );

            const refreshToken = jwt.sign(
              {
                id: user.id,
                email: user.email,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: timeExpire2,
              }
            );

            res.setHeader("Content-Type", "Application/json");

            return res.status(200).send({
              message: "Login Success!",
              token,
              refreshToken,
            });
          } else {
            return res.status(401).send({
              message: "Password incorrect!",
            });
          }
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while loging in the User.",
      });
    });
};

export default loggingin;
