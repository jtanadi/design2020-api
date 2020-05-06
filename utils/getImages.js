const fs = require("fs");
const path = require("path");

const { isDetailFile, isImage } = require("./checkers");

module.exports = (projectTitle) => {
  const imageDir = path.join(process.cwd(), "works", projectTitle);

  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter((file) => isImage(file));

  return imageFiles.reduce((acc, imageFile, i) => {
    if (!isDetailFile(imageFile)) {
      const retObj = {
        url: path.join("/works", projectTitle, imageFile),
      };

      const nextImage = imageFiles[i + 1];
      if (nextImage && isDetailFile(nextImage)) {
        retObj.hoverUrl = path.join("/works", projectTitle, nextImage);
      }

      acc.push(retObj);
    }

    return acc;
  }, []);
};
