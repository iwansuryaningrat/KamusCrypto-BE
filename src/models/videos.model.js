export default (mongoose) => {
  const Schema = mongoose.Schema;
  const videosSchema = new Schema(
    {
      title: {
        type: String,
        require: true,
      },
      description: String,
      instructor: {
        type: String,
        require: true,
      },
      videoNumber: {
        type: Number,
        require: true,
      },
      url: [
        {
          quality: {
            type: String,
            require: true,
          },
          url: {
            type: String,
            require: true,
          },
        },
      ],
      thumbnail: {
        imageAlt: {
          type: String,
          require: true,
        },
        imageName: {
          type: String,
          require: true,
        },
        imageLink: {
          type: String,
          require: true,
        },
      },
      playlist: {
        type: Schema.Types.ObjectId,
        ref: "Playlists",
        require: true,
      },
      tags: [String],
      views: {
        type: Number,
        default: 0,
      },
      likes: {
        type: Number,
        default: 0,
      },
      dislikes: {
        type: Number,
        default: 0,
      },
      duration: {
        type: String,
        default: 0,
      },
      date: {
        type: Number,
      },
      status: {
        type: String,
        require: true,
        enum: {
          values: ["Draft", "Published", "Archived"],
          message: "Status must be Draft, Published or Archived",
        },
        default: "Published",
      },
    },
    { timestamps: true }
  );

  videosSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Videos = mongoose.model("Videos", videosSchema);
  return Videos;
};
