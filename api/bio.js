const fs = require("fs");
const path = require("path");

const { dataPath } = require("../utils/paths");

module.exports = (req, res) => {
  const bioFile = path.join(dataPath, "bio.md");

  fs.readFile(bioFile, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
};
