const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
  const bioFile = path.join(process.cwd(), "data", "bio.md");

  fs.readFile(bioFile, "utf8", (err, data) => {
    if (err) throw err;
    res.json(data);
  });
};
