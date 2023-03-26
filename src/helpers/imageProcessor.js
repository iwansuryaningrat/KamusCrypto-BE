export default class Images {
  constructor(imageName, imageAlt, imageSrc) {
    this.imageName = imageName;
    this.imageAlt = imageAlt;
    this.imageSrc = imageSrc;
  }

  setImageName() {
    this.imageName = this.imageName;

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
      "https://kamuscrypto.sgp1.cdn.digitaloceanspaces.com/images%2F" +
      this.imageName;

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
