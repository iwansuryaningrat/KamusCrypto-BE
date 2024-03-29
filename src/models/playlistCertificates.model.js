/* A function that is returning certificate model. */
export default (mongoose) => {
  const Schema = mongoose.Schema;
  /* Creating a schema for the certificate model. */
  const playlistCertificatesSchema = new Schema(
    {
      certificateNumber: {
        type: String,
        require: true,
      },
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
      date: {
        type: Number,
        require: true,
      },
      status: {
        type: String,
        require: true,
        enum: {
          values: ["Active", "Inactive"],
          message: "Status must be Active or Inactive",
        },
      },
    },
    { timestamps: true }
  );

  /* This is a method that is used to remove the version key from the response. */
  playlistCertificatesSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const PlaylistCertificates = mongoose.model(
    "playlistCertificates",
    playlistCertificatesSchema
  );

  return PlaylistCertificates;
};
