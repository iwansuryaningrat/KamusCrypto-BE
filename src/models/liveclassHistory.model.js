export default (mongoose) => {
  const Schema = mongoose.Schema;
  const liveclassHistorySchema = new Schema(
    {
      liveclassId: {
        type: Schema.Types.ObjectId,
        ref: "Liveclasses",
        require: true,
      },
      userId: {
        type: Schema.Types.ObjectId,
        ref: "users",
        require: true,
      },
      certificate: {
        type: Schema.Types.ObjectId,
        ref: "liveclassCertificates",
        require: true,
      },
    },
    { timestamps: true }
  );

  liveclassHistorySchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const LiveclassHistory = mongoose.model(
    "LiveclassHistories",
    liveclassHistorySchema
  );

  return LiveclassHistory;
};
