const fs = require("fs");
const path = require("path");

const { worksPath } = require("../utils/paths");
const { isDetailFile, isImage } = require("./checkers");

module.exports = (projectTitle) => {
  const imageDir = path.join(worksPath, projectTitle);

  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter((file) => isImage(file));

  return imageFiles.reduce((acc, imageFile, i) => {
    if (!isDetailFile(imageFile)) {
      const retObj = {
        url: `/data/works/${projectTitle}/${imageFile}`,
      };

      const nextImage = imageFiles[i + 1];
      if (nextImage && isDetailFile(nextImage)) {
        retObj.detailUrl = `/data/works/${projectTitle}/${nextImage}`;
      }

      acc.push(retObj);
    }

    return acc;
  }, []);
};
