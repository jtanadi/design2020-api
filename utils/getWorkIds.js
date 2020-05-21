const axios = require("axios");

const authHeader = require("./authHeader");
const { apiWorks } = require("./endpoints");

module.exports = async () => {
  const works = (await axios.get(`${apiWorks}`, { headers: authHeader })).data;

  return works
    .filter((work) => !work.name.startsWith("z-") && work.type === "dir")
    .map((dir) => {
      return {
        params: {
          id: dir.name,
        },
      };
    });
};
