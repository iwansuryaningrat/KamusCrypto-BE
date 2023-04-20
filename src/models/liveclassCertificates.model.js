/* A function that is returning certificate model. */
export default (mongoose) => {
  const Schema = mongoose.Schema;
  /* Creating a schema for the certificate model. */
  const liveclassCertificatesSchema = new Schema(
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
      liveclassId: {
        type: Schema.Types.ObjectId,
        ref: "liveclass",
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
  liveclassCertificatesSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LiveclassCertificates = mongoose.model(
    "liveclassCertificates",
    liveclassCertificatesSchema
  );

  return LiveclassCertificates;
};
