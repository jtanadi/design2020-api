const fs = require("fs");
const path = require("path");

const isHoverFile = (filename) => {
  return /_over\.(jpg|jpeg|png|gif|tif|tiff)$/.test(filename);
};

module.exports = (projectTitle) => {
  const imageDir = path.join(process.cwd(), "works", projectTitle);

  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|tif|tiff)$/.test(file)
  );

  return imageFiles.reduce((acc, imageFile, i) => {
    if (!isHoverFile(imageFile)) {
      const retObj = {
        url: path.join("/works", projectTitle, imageFile),
      };

      const nextImage = imageFiles[i + 1];
      if (nextImage && isHoverFile(nextImage)) {
        retObj.hoverUrl = path.join("/works", projectTitle, nextImage);
      }

      acc.push(retObj);
    }

    return acc;
  }, []);
};
