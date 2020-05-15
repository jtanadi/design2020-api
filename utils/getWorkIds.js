const fs = require("fs");
const { worksPath } = require("./paths");

module.exports = () => {
  const works = fs.readdirSync(worksPath);
  return works
    .filter((work) => !work.startsWith("z-"))
    .map((work) => {
      return {
        params: {
          id: work,
        },
      };
    });
};
