const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const { worksPath } = require("./paths");
const getHeroImage = require("./getHeroImage");
const getImages = require("./getImages");

module.exports = (id) => {
  const workFilePath = path.join(worksPath, id, "index.md");
  const hero = getHeroImage(id);

  const workFile = fs.readFileSync(workFilePath, "utf8");
  const { data, content } = matter(workFile);

  return {
    id,
    data: { hero, ...data, description: content.trim() },
    content: getImages(id),
  };
};
