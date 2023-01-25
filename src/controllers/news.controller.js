import db from "../models/index.js";
const News = db.news;

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
