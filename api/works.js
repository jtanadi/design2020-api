const getAllWorks = require("../utils/getAllWorks");

module.exports = async (req, res) => {
  const allWorks = await getAllWorks();
  res.send(allWorks);
};
