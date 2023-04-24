import db from "../models/index.js";
const Watchlist = db.watchlist;
import dataCounter from "../helpers/dataCounter.js";
import paginationLinks from "../helpers/paginationLinks.js";

// Find All data for admin
const findAll = async (req, res) => {
  const { category, tags, page, date } = req.query;
  let query = {};

  if (category) {
    query.category = category;
  }

  if (tags) {
    query.tags = { $in: tags.split(",") };
  }

  if (date) {
    query.date = date;
  }

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Watchlist, limit, query);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Watchlist.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Watchlist not found",
        });
      }

      const data = result.map((item) => {
        const {
          _id,
          name,
          code,
          category,
          tags,
          date,
          buyArea,
          stopLoss,
          takeProfit,
          techAnalysis,
          status,
        } = item;

        return {
          id: _id,
          name,
          code,
          category,
          tags,
          date,
          buyArea,
          stopLoss,
          takeProfit,
          techAnalysis,
          status,
        };
      });

      res.send({
        message: "Watchlist fetched successfully",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving watchlist.",
      });
    });
};

// Find All data for pro member
const findAllPro = async (req, res) => {
  const { category, tags, date } = req.query;
  let query = {};
  query.status = "Active";

  if (category) {
    query.category = category;
  }

  if (tags) {
    query.tags = { $in: tags.split(",") };
  }

  if (date) {
    query.date = date;
  }

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Watchlist, limit, query);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Watchlist.find(query)
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Watchlist not found",
        });
      }

      const data = result.map((item) => {
        const {
          _id,
          name,
          code,
          category,
          tags,
          date,
          buyArea,
          stopLoss,
          takeProfit,
          techAnalysis,
          status,
        } = item;

        return {
          id: _id,
          name,
          code,
          category,
          tags,
          date,
          buyArea,
          stopLoss,
          takeProfit,
          techAnalysis,
          status,
        };
      });

      res.send({
        message: "Watchlist fetched successfully",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message:
          err.message || "Some error occurred while retrieving watchlist.",
      });
    });
};

// Find one data by id
const findOne = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Watchlist ID is required",
    });
  }

  Watchlist.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Watchlist not found",
        });
      }

      res.send({
        message: "Watchlist successfully fetched",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing watchlist.",
      });
    });
};

// Delete one data by id
const deleteWl = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Watchlist ID is required",
    });
  }

  Watchlist.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Watchlist not found",
        });
      }

      res.send({
        message: "Watchlist was deleted",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while delete watchlist.",
      });
    });
};

// Non Activate one data by id
const nonActivate = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Watchlist ID is required",
    });
  }

  Watchlist.findByIdAndUpdate(id, { isActive: false }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Watchlist not found",
        });
      }

      res.send({
        message: "Watchlist was non-activated",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while delete watchlist.",
      });
    });
};

// Create a data
const create = (req, res) => {
  const {
    name,
    code,
    category,
    tags,
    sector,
    buyArea,
    stopLoss,
    TP1,
    TP2,
    TP3,
    techAnalysis,
  } = req.body;

  if (
    !name ||
    !code ||
    !category ||
    !sector ||
    !techAnalysis ||
    !buyArea ||
    !stopLoss ||
    !TP1
  ) {
    return res.status(400).send({
      message:
        "Name, code, category, sector, techAnalysis, buyArea, stopLoss, and TP1 are required",
    });
  }

  Watchlist.findOne({ code: code, isActive: true })
    .then((result) => {
      if (result) {
        return res.status(400).send({
          message: "Watchlist already exists",
        });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while creating watchlist.",
      });
    });

  const watchlist = new Watchlist({
    name: name,
    code: code,
    category: category,
    tags: tags,
    sector: sector,
    buyArea: buyArea,
    stopLoss: stopLoss,
    takeProfit: {
      TP1: TP1,
      TP2: TP2,
      TP3: TP3,
    },
    techAnalysis: techAnalysis,
    isActive: true,
  });

  watchlist
    .save()
    .then((result) => {
      res.status(201).send({
        message: "Watchlist was created successfully",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while creating watchlist.",
      });
    });
};

// Update a data
const update = (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "Watchlist ID is required",
    });
  }

  const {
    name,
    code,
    category,
    tags,
    sector,
    lastPrice,
    buyArea,
    stopLoss,
    TP1,
    TP2,
    TP3,
  } = req.body;

  if (
    !name ||
    !code ||
    !category ||
    !sector ||
    !lastPrice ||
    !buyArea ||
    !stopLoss ||
    !TP1
  ) {
    return res.status(400).send({
      message:
        "Name, code, category, sector, lastPrice, buyArea, stopLoss, and TP1 are required",
    });
  }

  Watchlist.findByIdAndUpdate(
    id,
    {
      name: name,
      code: code,
      category: category,
      tags: tags,
      sector: sector,
      lastPrice: lastPrice,
      buyArea: buyArea,
      stopLoss: stopLoss,
      takeProfit: {
        TP1: TP1,
        TP2: TP2,
        TP3: TP3,
      },
    },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Watchlist not found",
        });
      }

      res.send({
        message: "Watchlist was updated successfully",
        data: result,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error occurred while updating watchlist.",
      });
    });
};

export { findAll, findAllPro, findOne, deleteWl, nonActivate, create, update };
