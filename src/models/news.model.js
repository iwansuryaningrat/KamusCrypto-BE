export default (mongoose) => {
  const Schema = mongoose.Schema;
  const newsSchema = new Schema(
    {
      title: {
        type: String,
        require: true,
      },
      author: {
        type: String,
        require: true,
      },
      category: {
        type: String,
        require: true,
      },
      tags: [{ type: String }],
      date: {
        type: Number,
        require: true,
      },
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
          default: "https://via.placeholder.com/150",
        },
      },
      body: [
        {
          paragraph: {
            type: String,
            require: true,
          },
        },
      ],
      source: {
        type: String,
        require: true,
        default: "-",
      },
      status: {
        type: String,
        require: true,
        enum: {
          values: ["Draft", "Published", "Archived"],
          message: "Status must be Draft, Published or Archived",
        },
        default: "Draft",
      },
    },
    { timestamps: true }
  );

  newsSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const News = mongoose.model("News", newsSchema);

  return News;
};
