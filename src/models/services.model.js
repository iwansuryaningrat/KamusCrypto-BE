export default (mongoose) => {
  const Schema = mongoose.Schema;
  const servicesSchema = new Schema(
    {
      serviceName: {
        type: String,
        require: true,
      },
      description: String,
      image: {
        alt: {
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
      benefits: [
        {
          benefitName: String,
        },
      ],
      status: {
        type: String,
        require: true,
        default: "Active",
        enum: {
          values: ["Active", "Inactive"],
          message: "Status must be Active or Inactive",
        },
      },
    },
    { timestamps: true }
  );

  servicesSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Services = mongoose.model("Services", servicesSchema);

  return Services;
};
