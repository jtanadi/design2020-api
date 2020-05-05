const fs = require("fs")
const path = require("path")

// Hero image defaults to first image
module.exports = (projectTitle) => {
  const imageDir = path.join(process.cwd(), "_works", projectTitle);

  const files = fs.readdirSync(imageDir);
  const heroImg = files.find((file) =>
    /\.(jpg$)|(jpeg$)|(png$)|(gif$)/.test(file)
  );

  return path.join("/_works", projectTitle, heroImg);
};
