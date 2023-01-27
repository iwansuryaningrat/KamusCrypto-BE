import db from "../models/index.js";
const News = db.news;
import { getPagination, getPagingData } from "../helpers/pagination.js";

// Create and Save a new News
const create = (req, res) => {
  const { title, author, category, tags, date, body, source, status } =
    req.body;

  // Validate request
  if (!title || !author || !date || !body || !source) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Validate image upload
  if (!req.file) {
    return res.status(400).send({
      message: "Image can not be empty!",
    });
  }

  // Handle thumbnail image upload
  const protocol = req.protocol === "https" ? req.protocol : "https";
  const photoName = req.file.filename;
  const photoLink = `${protocol}://${req.get(
    "host"
  )}/assets/images/${photoName}`;

  // Create a News
  const news = new News({
    title,
    author,
    category,
    tags,
    date,
    thumbnail: {
      photoName,
      photoLink,
    },
    body,
    source,
    status,
  });

  // Save News in the database
  news
    .save(news)
    .then((data) => {
      return res.status(201).send({
        message: "News created successfully!",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating the News.",
      });
    });
};

// Find All News with status = "published" and sort by date in descending order (newest first) and limit to 10 items per page and return the total number of items in the database
const findAllforUsers = (req, res) => {
  const { page, size, title } = req.query;
  const condition = title
    ? {
        title: { $regex: new RegExp(title), $options: "i" },
        status: "Published",
      }
    : { status: "Published" };

  const { limit, offset } = getPagination(page, size);

  News.paginate(condition, { offset, limit })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving news.",
      });
    });
};

// Find All News sort by date in descending order (newest first) and limit to 10 items per page and return the total number of items in the database
const findAll = (req, res) => {
  const { page, size, title } = req.query;
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  const { limit, offset } = getPagination(page, size);

  News.paginate(condition, { offset, limit })
    .then((data) => {
      const response = getPagingData(data, page, limit);
      return res.status(200).send(response);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving news.",
      });
    });
};

// Find a single News with an id
const findOne = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  News.findById(id)
    .then((data) => {
      if (!data)
        return res.status(404).send({
          message: `Not found News with id ${id}.`,
        });
      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error retrieving News with id=${id}`,
      });
    });
};

// Update a News by the id in the request
const update = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const { title, author, category, tags, date, body, source, status } =
    req.body;

  // Validate request
  if (!title || !author || !date || !body || !source) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Validate image upload
  if (!req.file) {
    return res.status(400).send({
      message: "Image can not be empty!",
    });
  }

  // Handle thumbnail image upload
  const protocol = req.protocol === "https" ? req.protocol : "https";
  const photoName = req.file.filename;
  const photoLink = `${protocol}://${req.get(
    "host"
  )}/assets/images/${photoName}`;

  News.findByIdAndUpdate(id, {
    title,
    author,
    category,
    tags,
    date,
    thumbnail: {
      photoName,
      photoLink,
    },
    body,
    source,
    status,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update News with id=${id}. Maybe News was not found!`,
        });
      }
      return res.status(200).send({
        message: "News was updated successfully.",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating News with id=${id}`,
      });
    });
};

// Update News status by the id in the request
const updateStatus = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const { status } = req.body;

  // Validate request
  if (!status) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  News.findByIdAndUpdate(id, {
    status,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update News with id=${id}. Maybe News was not found!`,
        });
      }
      return res.status(200).send({
        message: "News was updated successfully.",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating News with id=${id}`,
      });
    });
};

// Delete a News with the specified id in the request
const deleteOne = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  News.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot delete News with id=${id}. Maybe News was not found!`,
        });
      }
      return res.status(200).send({
        message: "News was deleted successfully!",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Could not delete News with id=${id}`,
      });
    });
};

export {
  create,
  findAllforUsers,
  findAll,
  findOne,
  update,
  updateStatus,
  deleteOne,
};
