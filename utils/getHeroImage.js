const fs = require("fs");
const path = require("path");

const { isImage } = require("./checkers");
const { worksPath } = require("./paths");

// Hero image defaults to first image
module.exports = (projectTitle) => {
  const imageDir = path.join(worksPath, projectTitle);

  const files = fs.readdirSync(imageDir);
  const heroImg = files.find((file) => isImage(file));

  return heroImg ? `/data/works/${projectTitle}/${heroImg}` : null;
};
