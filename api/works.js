const getAllWorks = require("../utils/getAllWorks");

module.exports = (req, res) => {
  const allWorks = getAllWorks();
  res.send(allWorks);
};
