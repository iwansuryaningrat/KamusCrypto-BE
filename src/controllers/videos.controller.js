import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

import db from "../models/index.js";
const Videos = db.videos;

import dataCounter from "../helpers/dataCounter.js";
import paginationLinks from "../helpers/paginationLinks.js";
import Images from "../helpers/imageProcessor.js";
import {
  incrementPlaylistVideoCount,
  decrementPlaylistVideoCount,
} from "../helpers/playlist.js";
import {
  updateVideoUrl,
  updateVideoViews,
  updateVideoLikes,
  updateVideoDislikes,
  updatePlaylistVideo,
} from "../helpers/videos.js";

// Find all videos for admin (DONE)
const findAll = async (req, res) => {
  let { status, page } = req.query;

  var condition = {};

  if (status) {
    condition = { status };
  }

  if (page === undefined) page = 1;

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Videos, limit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Videos.find(condition)
    .populate({
      path: "playlist",
      select: "_id name videoLevel videoCount status",
    })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Videos not found",
        });
      }

      const data = result.map((video) => {
        const {
          _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date,
          status,
        } = video;

        return {
          id: _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date: new Date(date).toString(),
          status,
        };
      });

      res.send({
        message: "Videos was successfully retrieved",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while retrieving videos.",
      });
    });
};

// Find all videos for Pro Member (DONE)
const findAllPro = async (req, res) => {
  let { page, limit } = req.query;

  const condition = { status: "Published" };

  if (page === null) page = 1;
  if (limit === null) limit = 10;

  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Videos, limit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Videos.find(condition)
    .populate({
      path: "playlist",
      select: "_id name videoLevel videoCount",
    })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Videos not found",
        });
      }

      const data = result.map((video) => {
        const {
          _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date,
        } = video;

        return {
          id: _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date: new Date(date).toString(),
        };
      });

      res.send({
        message: "Videos was successfully retrieved",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while retrieving videos.",
      });
    });
};

// Find all videos by playlist ID for Admin (DONE)
const findByPlaylist = async (req, res) => {
  const { playlistId } = req.params;
  let { page } = req.query;

  if (!playlistId) {
    return res.status(400).send({
      message: "Playlist ID is required",
    });
  }

  const condition = { playlist: playlistId };

  if (page === undefined) page = 1;

  const limit = 10;
  const skip = limit * (page - 1);
  const dataCount = await dataCounter(Videos, limit, condition);

  const protocol = req.protocol === "https" ? req.protocol : "https";
  const link = `${protocol}://${req.get("host")}${req.baseUrl}`;

  const pageData = paginationLinks(page, limit, link, dataCount);

  await Videos.find(condition)
    .populate({
      path: "playlist",
      select: "_id name videoLevel videoCount status",
    })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: 1 })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Video not found",
        });
      }

      const data = result.map((video) => {
        const {
          _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date,
          status,
        } = video;

        return {
          id: _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date: new Date(date).toString(),
          status,
        };
      });

      res.send({
        message: "Videos was successfully retrieved",
        data,
        page: pageData,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing videos.",
      });
    });
};

// Find all videos by playlist ID for Pro Member (DONE)
const findByPlaylistPro = (req, res) => {
  const { playlistId } = req.params;

  if (!playlistId) {
    return res.status(400).send({
      message: "Playlist ID is required",
    });
  }

  Videos.find({ playlist: playlistId, status: "Published" })
    .populate({
      path: "playlist",
      select: "_id name videoLevel videoCount",
    })
    .sort({ createdAt: -1 })
    .then((result) => {
      if (!result) {
        return res.status(204).send({
          message: "Video not found",
        });
      }

      const data = result.map((video) => {
        const {
          _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date,
        } = video;
        return {
          id: _id,
          title,
          description,
          instructor,
          videoNumber,
          url,
          thumbnail,
          playlist,
          tags,
          views,
          likes,
          dislikes,
          duration,
          date: new Date(date).toString(),
        };
      });

      res.send({
        message: "Videos was successfully retrieved",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing videos.",
      });
    });
};

// Get Details of a video by ID for Admin (DONE)
const findOne = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  Videos.findById(id)
    .populate({
      path: "playlist",
      select: "_id name videoLevel videoCount status",
    })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Video not found",
        });
      }

      const {
        _id,
        title,
        description,
        instructor,
        videoNumber,
        url,
        thumbnail,
        playlist,
        tags,
        views,
        likes,
        dislikes,
        duration,
        date,
      } = result;

      const data = {
        id: _id,
        title,
        description,
        instructor,
        videoNumber,
        url,
        thumbnail,
        playlist,
        tags,
        views,
        likes,
        dislikes,
        duration,
        date: new Date(date).toString(),
      };

      res.send({
        message: "Video was successfully retrieved",
        data,
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while showing videos.",
      });
    });
};

// Update a video
const update = async (req, res) => {
  const { id } = req.params;

  const {
    title,
    description,
    instructor,
    videoNumber,
    url,
    tags,
    duration,
    status,
  } = req.body;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  if (url) {
    const response = await updateVideoUrl(id, url);
    if (response !== true) {
      return res.status(409).send({
        message: response,
      });
    }
  }

  Videos.findByIdAndUpdate(
    id,
    {
      title,
      description,
      instructor,
      videoNumber,
      tags,
      duration,
      status,
    },
    { new: true }
  )
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Video not found",
        });
      }

      res.send({
        message: "Video was updated",
      });
    })
    .catch((err) => {
      return res.status(409).send({
        message: err.message || "Some error while update video.",
      });
    });
};

// Delete a video
const deleteVideo = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  Videos.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Video not found",
        });
      }

      res.send({
        message: "Video was deleted",
      });
    })
    .catch((err) => {
      return res.status(409).send({
        message: err.message || "Some error while delete video.",
      });
    });
};

// Create a video and update playlist video count (DONE)
const create = async (req, res) => {
  let {
    playlistId,
    title,
    description,
    instructor,
    videoNumber,
    url1080,
    url720,
    url480,
    url360,
    tags,
    duration,
    status,
  } = req.body;

  if (!req.file) {
    return res.status(400).send({
      message: "Thumbnail is required",
    });
  }

  const thumbnailName = req.file.originalname.replace(/\s/g, "-");
  const image = new Images(thumbnailName);

  image.setImageSrc();
  image.setImageAlt();
  image.setImageName();
  const imageProp = image.getImageProperties();

  if (
    !title ||
    !description ||
    !instructor ||
    !videoNumber ||
    !playlistId ||
    !url1080 ||
    !url720 ||
    !url480 ||
    !duration
  ) {
    return res.status(400).send({
      message:
        "Title, description, playlistId, videoURL, and status is required",
    });
  }

  if (!url360) url360 = null;

  const video = new Videos({
    title,
    description,
    instructor,
    videoNumber,
    url: [
      { quality: "1080p", url: url1080 },
      { quality: "720p", url: url720 },
      { quality: "480p", url: url480 },
      { quality: "360p", url: url360 },
    ],
    thumbnail: imageProp,
    playlist: playlistId,
    tags,
    date: new Date().getTime(),
    duration,
    status,
  });

  const result = await video
    .save()
    .then((result) => {
      return true;
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while creating video.",
      });
    });

  if (result) {
    const updatePlaylist = await incrementPlaylistVideoCount(playlistId);

    if (updatePlaylist === true) {
      res.status(201).send({
        message: "Video was created",
      });
    } else {
      return res.status(500).send({
        message: "Some error while creating video.",
      });
    }
  }
};

// Update thumbnail
const updateThumbnail = (req, res) => {
  if (!req.file) {
    return res.status(400).send({
      message: "Thumbnail file is required",
    });
  }

  const thumbnailName = req.file.originalname.replace(/\s/g, "-");
  const image = new Images(thumbnailName);

  image.setImageSrc();
  image.setImageAlt();
  image.setImageName();
  const imageProp = image.getImageProperties();

  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  Videos.findByIdAndUpdate(id, { thumbnail: imageProp }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Video not found",
        });
      }

      res.send({
        message: "Video was updated",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update video.",
      });
    });
};

// Update Video Status
const updateStatus = (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  const { status } = req.body;

  Videos.findByIdAndUpdate(id, { status }, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Video not found",
        });
      }

      res.send({
        message: "Video status was updated",
      });
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update video.",
      });
    });
};

// Change Video URL (Need to be tested)
const changeVideoUrl = async (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  let { url1080, url720, url480, url360 } = req.body;

  const defaultData = await Videos.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          message: "Video not found",
        });
      }

      return result;
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message || "Some error while update video.",
      });
    });

  if (!url1080) url1080 = defaultData.url[0].url;
  if (!url720) url720 = defaultData.url[1].url;
  if (!url480) url480 = defaultData.url[2].url;
  if (!url360) url360 = defaultData.url[3].url;

  const result = await updateVideoUrl(id, url1080, url720, url480, url360);

  if (result === true) {
    res.send({
      message: "Video URL was updated",
    });
  } else {
    return res.status(500).send({
      message: "Some error while update video.",
    });
  }
};

// Change Playlist Video (Need to be tested)
const changePlaylistVideo = async (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  const { playlistId } = req.body;

  const video = await Videos.findById(id);

  if (!video) {
    return res.status(404).send({
      message: "Video not found",
    });
  }

  const updatePlaylist = await {
    incrementPlaylistVideoCount,
    decrementPlaylistVideoCount,
  }(playlistId, video.playlist);

  if (updatePlaylist === true) {
    const result = await updatePlaylistVideo(id, playlistId);

    if (result === true) {
      res.send({
        message: "Video playlist was updated",
      });
    } else {
      return res.status(500).send({
        message: "Some error while update video.",
      });
    }
  } else {
    return res.status(500).send({
      message: "Some error while update video.",
    });
  }
};

// Watch video only for pro users if video is published (Need to be tested)
const watchVideo = async (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  const video = await Videos.findById(id).populate({
    path: "playlist",
    select: "_id name videoLevel videoCount",
  });

  if (!video) {
    return res.status(404).send({
      message: "Video not found",
    });
  }

  if (video.status !== "Published") {
    return res.status(400).send({
      message: "Video is not published",
    });
  }

  const updateViews = await updateVideoViews(id);

  if (updateViews === true) {
    const data = {
      title: video.title,
      description: video.description,
      url: video.url,
      thumbnail: video.thumbnail,
      playlist: video.playlist,
      tags: video.tags,
      views: video.views,
      likes: video.likes,
      dislikes: video.dislikes,
      duration: video.duration,
      date: new Date(video.date).toString(),
    };

    res.send({
      message: "Video successfully watched",
      data,
    });
  } else {
    return res.status(500).send({
      message: "Some error while watching video.",
    });
  }
};

// Like video only for pro users if video is published (Need to be tested)
const likeVideo = async (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  const video = await Videos.findById(id);

  if (!video) {
    return res.status(404).send({
      message: "Video not found",
    });
  }

  if (video.status !== "Published") {
    return res.status(400).send({
      message: "Video is not published",
    });
  }

  const updateLikes = await updateVideoLikes(id);

  if (updateLikes === true) {
    res.send({
      message: "Video was liked",
    });
  } else {
    return res.status(500).send({
      message: "Some error while update video likes.",
    });
  }
};

// Dislike video only for pro users if video is published (Need to be tested)
const dislikeVideo = async (req, res) => {
  const { id } = req.params;

  if (!id || !ObjectId.isValid(id)) {
    return res.status(400).send({
      message: "Video ID is required",
    });
  }

  const video = await Videos.findById(id);

  if (!video) {
    return res.status(404).send({
      message: "Video not found",
    });
  }

  if (video.status !== "Published") {
    return res.status(400).send({
      message: "Video is not published",
    });
  }

  const updateDislikes = await updateVideoDislikes(id);

  if (updateDislikes === true) {
    res.send({
      message: "Video was disliked",
    });
  } else {
    return res.status(500).send({
      message: "Some error while update video dislikes.",
    });
  }
};

export {
  findAll,
  findAllPro,
  findOne,
  findByPlaylist,
  findByPlaylistPro,
  update,
  deleteVideo,
  create,
  updateThumbnail,
  updateStatus,
  changeVideoUrl,
  changePlaylistVideo,
  watchVideo,
  likeVideo,
  dislikeVideo,
};
