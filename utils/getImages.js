const fs = require("fs")
const path = require("path")

module.exports = (projectTitle) => {
  const imageDir = path.join(process.cwd(), "works", projectTitle);

  const files = fs.readdirSync(imageDir);
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|gif|tif|tiff)$/.test(file)
  );

  return imageFiles.map((imgFile) =>
    path.join("/works", projectTitle, imgFile)
  );
};
