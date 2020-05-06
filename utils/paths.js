const path = require("path");

const dataPath = path.join(process.cwd(), "data");
const worksPath = path.join(dataPath, "works");

module.exports = { dataPath, worksPath };
