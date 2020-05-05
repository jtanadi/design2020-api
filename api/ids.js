const getWorkIds = require("../utils/getWorkIds");

module.exports = (req, res) => {
  const workIds = getWorkIds();
  res.send(workIds);
};
