export default (mongoose) => {
  const Schema = mongoose.Schema;
  const membershipSchema = new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      planId: {
        type: Schema.Types.ObjectId,
        ref: "Plan",
        required: true,
      },
      expiresAt: {
        type: Date,
        required: true,
      },
      liveClassData: {
        freeLiveClasses: {
          type: Number,
          default: 0,
        },
        paidLiveClasseswithDiscount: {
          type: Number,
          default: 0,
        },
        liveClassDiscount: {
          type: Number,
          default: 0,
        },
      },
    },
    { timestamps: true }
  );

  membershipSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Membership = mongoose.model("Membership", membershipSchema);

  return Membership;
};
