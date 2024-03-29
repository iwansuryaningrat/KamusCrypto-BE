import db from "../models/index.js";
const Services = db.services;
import dataCounter from "../helpers/dataCounter.js";
import paginationLinks from "../helpers/paginationLinks.js";
import Images from "../helpers/imageProcessor.js";

import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

// Find all services in database (Done)
const findAll = async (req, res) => {
  // Active filter by query params
  let { active, page } = req.query;

  active = active ? active : true;

  // Filter by active
  let condition = {};

  if (active) {
    condition = { status: "Active" };
  } else {
    condition = {};
  }

  if (page === undefined) page = 1;

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Services, limit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Services.find(condition)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((result) => {
      if (result.length === 0) {
        return res.status(204).send({
          message: "Services not found",
        });
      }

      const data = result.map((item) => {
        return {
          id: item._id,
          serviceName: item.serviceName,
          description: item.description,
          image: item.image,
          benefits: item.benefits,
          status: item.status,
        };
      });

      res.send({
        message: "Services was found",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while retrieving services.",
      });
    });
};

// Create service (Done)
const create = (req, res) => {
  const { serviceName, description, benefits } = req.body;

  const services = new Services({
    serviceName,
    description,
    benefits,
  });

  services
    .save()
    .then((result) => {
      res.status(201).send({
        message: "Service successfully added.",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while creating service.",
      });
    });
};

// Update image service by id (Done)
const uploadImage = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Id is required",
    });
  }

  if (!req.file) {
    return res.status(400).send({
      message: "No files were uploaded.",
    });
  }

  const photoName = req.file.originalname.replace(/\s/g, "-");
  const image = new Images(photoName);

  image.setImageSrc();
  image.setImageAlt();
  image.setImageName();
  const imageProp = image.getImageProperties();

  Services.findByIdAndUpdate(id, { image: imageProp }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Service not found",
        });
      }

      res.status(201).send({
        message: "Image successfully uploaded.",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while uploading image.",
      });
    });
};

// Find service by id (Done)
const findOne = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Id is required",
    });
  }

  Services.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Service not found",
        });
      }

      const data = {
        id: result._id,
        serviceName: result.serviceName,
        description: result.description,
        image: result.image,
        benefits: result.benefits,
      };

      res.send({
        message: "Service was found",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing service.",
      });
    });
};

// Delete service by id (Done)
const deleteService = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Id is required",
    });
  }

  Services.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Service not found",
        });
      }

      res.send({
        message: "Service was successfully deleted",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while delete service.",
      });
    });
};

// Update service by id (Done)
const update = (req, res) => {
  const { id } = req.params;
  const { serviceName, description, benefits } = req.body;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Id is required",
    });
  }

  Services.findByIdAndUpdate(
    id,
    { serviceName, description, benefits },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Service not found",
        });
      }

      res.send({
        message: "Service was updated",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update service.",
      });
    });
};

// Add benefit to service by id (Done)
const addBenefit = (req, res) => {
  const { id } = req.params;
  const { benefit } = req.body;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Id is required",
    });
  }

  Services.findByIdAndUpdate(
    id,
    { $push: { benefits: benefit } },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Service not found",
        });
      }

      res.status(201).send({
        message: "Benefit was added",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while add benefit.",
      });
    });
};

// Deactivate service by id (Done)
const deactivate = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Id is required",
    });
  }

  Services.findByIdAndUpdate(id, { status: "Inactive" }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Service not found",
        });
      }

      res.send({
        message: "Service was deactivated",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while deactivate service.",
      });
    });
};

// Find all services for users (Done)
const findAllForUsers = (req, res) => {
  Services.find({ status: "Active" })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Service not found",
        });
      }

      const data = result.map((item) => {
        return {
          id: item._id,
          serviceName: item.serviceName,
          description: item.description,
          image: item.image,
          benefits: item.benefits,
        };
      });

      res.send({
        message: "Services were found",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing services.",
      });
    });
};

export {
  findAll,
  findAllForUsers,
  create,
  uploadImage,
  findOne,
  deleteService,
  update,
  addBenefit,
  deactivate,
};
