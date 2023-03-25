export default class Images {
  constructor(imageName, imageAlt, imageSrc) {
    this.imageName = imageName;
    this.imageAlt = imageAlt;
    this.imageSrc = imageSrc;
  }

  setImageName() {
    this.imageName = this.imageName.substring(14, this.imageName.length);

    return this.imageName;
  }

  setImageAlt() {
    this.imageAlt = this.imageName
      .substring(0, this.imageName.length - 4)
      .toLowerCase();

    return this.imageAlt;
  }

  setImageSrc() {
    this.imageSrc =
      process.env.NODE_ENV === "production"
        ? `https://api.kamuscrypto.id/assets/images/${this.imageName}`
        : `https://dev.kamuscrypto.id/assets/images/${this.imageName}`;

    return this.imageSrc;
  }

  getImageProperties() {
    return {
      imageAlt: this.imageAlt,
      imageName: this.imageName,
      imageLink: this.imageSrc,
    };
  }
}
