export default (mongoose) => {
  const Schema = mongoose.Schema;
  const playlistTrackingSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        require: true,
      },
      playlistId: {
        type: Schema.Types.ObjectId,
        ref: "Playlists",
        require: true,
      },
      video: [
        {
          videoId: {
            type: Schema.Types.ObjectId,
            ref: "Videos",
            require: true,
          },
          status: {
            type: String,
            require: true,
            enum: {
              values: ["Watched", "Unwatched"],
              message: "Status must be Watched or Unwatched",
            },
            default: "Unwatched",
          },
        },
      ],
      status: {
        type: String,
        require: true,
        enum: {
          values: ["Watched", "Unwatched"],
          message: "Status must be Watched or Unwatched",
          default: "Unwatched",
        },
      },
    },
    { timestamps: true }
  );

  playlistTrackingSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const PlaylistsTracking = mongoose.model(
    "PlaylistsTracking",
    playlistTrackingSchema
  );

  return PlaylistsTracking;
};
