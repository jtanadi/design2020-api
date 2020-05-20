const fs = require("fs");
const matter = require("gray-matter");
const path = require("path");

const fetch = require("isomorphic-unfetch")

const authHeader = require("./authHeader")
const { worksPath } = require("./paths");
const getHeroImage = require("./getHeroImage");
const { apiWorks } = require("./endpoints")


module.exports = () => {
  const response = await fetch(`${apiWorks}/contents`, headers: authHeader)

  const works = fs.readdirSync(worksPath);
  return works
    .filter((work) => !work.startsWith("z-"))
    .map((work) => {
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
        tags,
      };
    });
};
