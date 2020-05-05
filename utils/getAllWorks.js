const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const worksPath = require("./worksPath");
const getHeroImage = require("./getHeroImage");

module.exports = () => {
  const works = fs.readdirSync(worksPath);
  return works.map((work) => {
    const workFilePath = path.join(worksPath, work, "index.md");

    const hero = getHeroImage(work);

    const workFile = fs.readFileSync(workFilePath, "utf8");
    const { data } = matter(workFile);
    const { title, tags, short } = data;

    return {
      id: work,
      title,
      description: short || null,
      hero,
      tags: tags.split(/,\s*/),
    };
  });
};
