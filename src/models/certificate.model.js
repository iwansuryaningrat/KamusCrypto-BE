export default (mongoose) => {
  const Schema = mongoose.Schema;
  const certificateSchema = new Schema(
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

  certificateSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Certificate = mongoose.model("certificate", certificateSchema);

  return Certificate;
};
