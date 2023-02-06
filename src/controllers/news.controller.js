import db from "../models/index.js";
const News = db.news;

import dataCounter from "../helpers/dataCounter.js";
import timeConvert from "../helpers/timeConverter.js";

// Create and Save a new News (Done)
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
const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).send({
      message: "Image can not be empty!",
    });
  }

  const { id } = req.params;

  // Handle thumbnail image upload
  const photoName = req.file.filename;
  const photoLink = `https://api.kamuscrypto.id/assets/images/${photoName}`;

  News.findByIdAndUpdate(id, {
    thumbnail: {
      photoName,
      photoLink,
    },
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
const findAllforUsers = async (req, res) => {
  var { page, pageLimit } = req.query;
  const condition = { status: "Published" };

  page ? (page = parseInt(page)) : (page = 1);

  pageLimit ? (pageLimit = parseInt(pageLimit)) : (pageLimit = 9);
  const skip = pageLimit * (page - 1);
  const dataCount = await dataCounter(News, pageLimit, condition);

  const nextPage = parseInt(page) + 1;
  const prevPage = parseInt(page) - 1;

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;
  var nextLink =
    nextPage > dataCount.pageCount
      ? `${link}?page=${dataCount.pageCount}`
      : `${link}?page=${nextPage}`;
  var prevLink = page > 1 ? `${link}?page=${prevPage}` : null;
  var lastLink = `${link}?page=${dataCount.pageCount}`;
  var firstLink = `${link}?page=1`;

  const pageData = {
    currentPage: parseInt(page),
    pageCount: dataCount.pageCount,
    dataPerPage: parseInt(pageLimit),
    dataCount: dataCount.dataCount,
    links: {
      next: nextLink,
      prev: prevLink,
      last: lastLink,
      first: firstLink,
    },
  };

  await News.find(condition)
    .populate({
      path: "author",
      select: "name",
    })
    .skip(skip)
    .limit(pageLimit)
    .sort({ date: -1 })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
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

  const nextPage = parseInt(page) + 1;
  const prevPage = parseInt(page) - 1;

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;
  var nextLink =
    nextPage > dataCount.pageCount
      ? `${link}?page=${dataCount.pageCount}`
      : `${link}?page=${nextPage}`;
  var prevLink = page > 1 ? `${link}?page=${prevPage}` : null;
  var lastLink = `${link}?page=${dataCount.pageCount}`;
  var firstLink = `${link}?page=1`;

  const pageData = {
    currentPage: parseInt(page),
    pageCount: dataCount.pageCount,
    dataPerPage: parseInt(pageLimit),
    dataCount: dataCount.dataCount,
    links: {
      next: nextLink,
      prev: prevLink,
      last: lastLink,
      first: firstLink,
    },
  };

  await News.find()
    .populate({
      path: "author",
      select: "name",
    })
    .skip(skip)
    .limit(pageLimit)
    .sort({ date: -1 })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
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
const findOne = (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  News.findById(id)
    .populate({
      path: "author",
      select: "name",
    })
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

  // Handle thumbnail image upload
  // const protocol = req.protocol === "https" ? req.protocol : "https";
  // const photoName = req.file.filename;
  // const photoLink = `${protocol}://${req.get(
  //   "host"
  // )}/assets/images/${photoName}`;
  const photoName = req.file.filename;
  const photoLink = `https://api.kamuscrypto.id/assets/images/${photoName}`;

  News.findByIdAndUpdate(id, {
    title,
    author,
    category,
    tags,
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
  uploadImage,
  findAllforUsers,
  findAll,
  findOne,
  update,
  updateStatus,
  deleteOne,
};
