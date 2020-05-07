const getWorkById = require("../../utils/getWorkById");

module.exports = (req, res) => {
  const work = getWorkById(req.query.id);
  res.send(work);
};
