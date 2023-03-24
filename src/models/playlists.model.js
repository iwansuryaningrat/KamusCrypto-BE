export default (mongoose) => {
  const Schema = mongoose.Schema;
  const playlistSchema = new Schema(
    {
      name: {
        type: String,
        require: true,
      },
      description: String,
      image: {
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
      videoCount: {
        type: Number,
        require: true,
        default: 0,
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

  playlistSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Playlists = mongoose.model("Playlists", playlistSchema);

  return Playlists;
};
