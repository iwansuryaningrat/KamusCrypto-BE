/* Importing the database connection and the news model. */
import db from "../models/index.js";
const News = db.news;

/* Importing the dataCounter and timeConverter helper functions. */
import dataCounter from "../helpers/dataCounter.js";
import { timeConvert } from "../helpers/timeConverter.js";
import Images from "../helpers/imageProcessor.js";
import paginationLinks from "../helpers/paginationLinks.js";

// Create and Save a new News (Done)
/**
 * It creates a new news article and saves it to the database
 * @param req - The request object. This object represents the HTTP request and has properties for the
 * request query string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns The response is being returned.
 */
const create = (req, res) => {
  const { title, author, category, tags, body, source, status } = req.body;

  // Validate request
  if (!title || !author || !body || !source) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const date = new Date().getTime();

  // Create a News
  const news = new News({
    title,
    author,
    category,
    tags,
    date,
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

// Upload image
/**
 * If there is no file, return an error message, otherwise, find the news by id and update the
 * thumbnail with the photo name and photo link.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The image is being uploaded to the server and the image name and link are being saved to
 * the database.
 */
const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).send({
      message: "Image can not be empty!",
    });
  }

  const { id } = req.params;

  // Handle thumbnail image upload
  const photoName = req.file.originalname.replace(/\s/g, "-");
  const image = new Images(photoName);

  image.setImageSrc();
  image.setImageAlt();
  image.setImageName();
  const imageProp = image.getImageProperties();

  News.findByIdAndUpdate(id, {
    thumbnail: imageProp,
  })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Cannot update News with id=${id}. Maybe News was not found!`,
        });
      } else {
        return res.status(200).send({
          message: "News was updated successfully.",
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: `Error updating News with id=${id}`,
      });
    });
};

// Find All News with status = "published" and sort by date in descending order (newest first) and limit to 10 items per page and return the total number of items in the database
/**
 * It returns a list of news with pagination.
 * @param req - The request object.
 * @param res - the response object
 */
const findAllforUsers = async (req, res) => {
  var { page, pageLimit } = req.query;
  const condition = { status: "Published" };

  page ? (page = parseInt(page)) : (page = 1);

  pageLimit ? (pageLimit = parseInt(pageLimit)) : (pageLimit = 9);
  const skip = pageLimit * (page - 1);
  const dataCount = await dataCounter(News, pageLimit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, pageLimit, link, dataCount);

  await News.find(condition)
    .skip(skip)
    .limit(pageLimit)
    .sort({ date: -1 })
    .then((data) => {
      if (!data) {
        return res.status(204).send({
          message: `Not found News with status ${condition.status}`,
        });
      }

      const result = data.map((item) => {
        return {
          id: item._id,
          title: item.title,
          author: item.author,
          category: item.category,
          tags: item.tags,
          date: timeConvert(item.date),
          source: item.source,
          thumbnail: item.thumbnail,
        };
      });

      return res.status(200).send({
        message: "News retrieved successfully",
        data: result,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving news.",
      });
    });
};

// Find All News sort by date in descending order (newest first) and limit to 10 items per page and return the total number of items in the database (Done)
/**
 * It returns a list of news with pagination
 * @param req - The request object.
 * @param res - the response object
 */
const findAll = async (req, res) => {
  var { page, pageLimit } = req.query;

  if (!page) {
    page = 1;
  } else {
    page = parseInt(page);
  }

  if (!pageLimit) {
    pageLimit = 9;
  } else {
    pageLimit = parseInt(pageLimit);
  }
  const skip = pageLimit * (page - 1);
  const dataCount = await dataCounter(News, pageLimit);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, pageLimit, link, dataCount);

  await News.find()
    .skip(skip)
    .limit(pageLimit)
    .sort({ date: -1 })
    .then((data) => {
      if (!data) {
        return res.status(204).send({
          message: `News not found`,
        });
      }

      const result = data.map((item) => {
        return {
          id: item._id,
          title: item.title,
          author: item.author,
          category: item.category,
          tags: item.tags,
          date: timeConvert(item.date),
          source: item.source,
          thumbnail: item.thumbnail,
        };
      });

      return res.status(200).send({
        message: "News retrieved successfully",
        data: result,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while retrieving news.",
      });
    });
};

// Find a single News with an id
/**
 * It finds a news article by its id and returns the article with the author's name
 * @param req - The request object.
 * @param res - The response object.
 * @returns The result is an object with the following properties:
 * id: data._id,
 * title: data.title,
 * author: data.author,
 * category: data.category,
 * tags: data.tags,
 * date: timeConvert(data.date),
 * body: data.body,
 * source: data.source,
 * thumbnail: data.thumbnail,
 */
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

      const result = {
        id: data._id,
        title: data.title,
        author: data.author,
        category: data.category,
        tags: data.tags,
        date: timeConvert(data.date),
        body: data.body,
        source: data.source,
        thumbnail: data.thumbnail,
      };

      return res.status(200).send({
        message: "News retrieved successfully",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || `Error retrieving News with id=${id}`,
      });
    });
};

// Update a News by the id in the request
/**
 * The function is used to update the news data in the database.
 * @param req - The request object.
 * @param res - the response object
 * @returns The response is a JSON object with the following properties:
 */
const update = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const { title, author, category, tags, body, source, status } = req.body;

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

  const photoName = req.file.originalname.replace(/\s/g, "-");
  const image = new Images(photoName);

  image.setImageSrc();
  image.setImageAlt();
  image.setImageName();
  const imageProp = image.getImageProperties();

  News.findByIdAndUpdate(id, {
    title,
    author,
    category,
    tags,
    thumbnail: imageProp,
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
/**
 * It updates the status of a news article
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns The updated News object.
 */
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
/**
 * It deletes a news item from the database based on the id of the news item.
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - The response object.
 * @returns the response object.
 */
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
  uploadImage,
  findAllforUsers,
  findAll,
  findOne,
  update,
  updateStatus,
  deleteOne,
};
