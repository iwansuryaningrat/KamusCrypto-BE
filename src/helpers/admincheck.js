/* Importing the database and the users table. */
import db from "../models/index.js";
const Users = db.users;

/**
 * It checks if the user is an admin or not.
 * @param id - The id of the user you want to check
 * @returns A promise.
 */
const adminCheck = async (id) => {
  const response = await Users.findById(id)
    .then((data) => {
      if (data.type.isAdmin) {
        return true;
      } else {
        return false;
      }
    })
    .catch((error) => {
      return error.message;
    });

  return response;
};

export default adminCheck;
