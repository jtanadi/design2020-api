const getWorkData = require("../../utils/getWorkData");

module.exports = (req, res) => {
  const work = getWorkData(req.query.id);
  res.send(work);
};
