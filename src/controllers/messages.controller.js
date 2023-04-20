import jwt from "jsonwebtoken";
import db from "../models/index.js";
const Messages = db.messages;

/* Importing the replyMessage function from the reply.js file. */
import replyMessage from "../helpers/reply.js";

/* Importing the dataCounter function from the dataCounter.js file. */
import dataCounter from "../helpers/dataCounter.js";

/* Importing the paginationLinks function from the paginationLinks.js file. */
import paginationLinks from "../helpers/paginationLinks.js";

/* Importing the mongoose module and creating a new ObjectId. */
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

// Fetch All Messages from Database (Done)
/**
 * It fetches all messages from the database and paginates them.
 * </code>
 * @param req - The request object.
 * @param res - The response object.
 */
const findAll = async (req, res) => {
  let { status, page } = req.query;
  let query = {};

  if (status) {
    query.status = status;
  }

  if (page === undefined) page = 1;

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Messages, limit, query);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Messages.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((message) => {
      if (message.length < 1) {
        return res.status(204).send({
          message: "No Message was Found!",
        });
      }

      const data = message.map((item) => {
        const { _id, firstName, lastName, email, subject, message, status } =
          item;

        return {
          id: _id,
          firstName,
          lastName,
          email,
          subject,
          message,
          status,
        };
      });

      res.send({
        message: "All message were fetched successfully",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving message.",
      });
    });
};

// Create and Save a new Message to the database (Done)
/**
 * It takes the request body and creates a new message in the database.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The message is being returned.
 */
const create = (req, res) => {
  const { firstName, lastName, email, subject, body } = req.body;

  if (!firstName || !subject || !email || !body) {
    return res.status(400).send({
      message: "First name, subject, email and message are required.",
    });
  }

  const message = new Messages({
    firstName,
    lastName,
    email,
    subject,
    message: body,
  });

  message
    .save()
    .then((result) => {
      res.status(200).send({
        message: "Message sent successfully.",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while creating message.",
      });
    });
};

// Find Message By ID (Done)
/**
 * It finds a message by its ID and returns it
 * @param req - The request object.
 * @param res - The response object.
 * @returns The findOne function is returning the message with the id that was passed in the request.
 */
const findOne = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Message ID is required",
    });
  }

  Messages.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Message not found",
        });
      }

      const { firstName, lastName, email, subject, message, status } = result;

      const data = {
        firstName,
        lastName,
        email,
        subject,
        message,
        status,
      };

      res.send({
        message: "Message was successfully found",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing message.",
      });
    });
};

// Update Status into Read (Done)
/**
 * It takes the id of a message from the request parameters, checks if the id is valid, and if it is,
 * it updates the message's status to "Read" and returns the updated message.
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns The message is being returned with the status of "Readed"
 */
const read = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Message ID is required",
    });
  }

  Messages.findByIdAndUpdate(id, { status: "Read" }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Message not found",
        });
      }

      const { firstName, lastName, email, subject, message } = result;

      const data = {
        firstName,
        lastName,
        email,
        subject,
        message,
        status: "Readed",
      };

      res.send({
        message: "Message read successfully.",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update message.",
      });
    });
};

// Update Status into Replied (Done)
/**
 * It takes the message ID, the user ID, the email, the subject, and the message and sends it to the
 * replyMessage function.
 * @param req - {
 * @param res - The response object.
 * @returns The response from the replyMessage function.
 */
const reply = async (req, res) => {
  const { id } = req.params;

  const { message } = req.body;
  const token = req.header("x-auth-token");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!message) {
    return res.status(400).send({
      message: "Message is required",
    });
  }

  const userID = decoded.id;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Message ID is required",
    });
  }

  const result = await Messages.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Message not found",
        });
      }

      return result;
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update message.",
      });
    });

  const { email, subject } = result;

  const response = await replyMessage(userID, id, email, subject, message);

  if (response === "Message replied successfully.") {
    res.send({
      message: response,
    });
  } else {
    res.status(400).send({
      message: response,
    });
  }
};

// Delete Message By Id (Done)
/**
 * It takes the id of the message to be deleted from the request parameters, checks if the id is valid,
 * and if it is, it deletes the message from the database and returns a message to the user.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The message is being deleted from the database.
 */
const deleteMsg = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Message ID is required",
    });
  }

  Messages.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Message not found",
        });
      }

      res.send({
        message: "Message was deleted",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while delete message.",
      });
    });
};

export { findAll, create, findOne, read, reply, deleteMsg };
