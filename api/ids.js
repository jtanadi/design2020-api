const getWorkIds = require("../utils/getWorkIds");

module.exports = async (req, res) => {
  const workIds = await getWorkIds();
  res.send(workIds);
};
