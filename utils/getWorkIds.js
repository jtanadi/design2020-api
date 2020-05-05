const fs = require("fs");
const worksPath = require("./worksPath");

module.exports = () => {
  const works = fs.readdirSync(worksPath);
  return works.map((work) => {
    return {
      params: {
        id: work,
      },
    };
  });
};
