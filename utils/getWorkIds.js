const fetch = require("isomorphic-unfetch");

const authHeader = require("./authHeader");
const { apiWorks } = require("./endpoints");

module.exports = async () => {
  const works = await (
    await fetch(`${apiWorks}`, { headers: authHeader })
  ).json();

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
