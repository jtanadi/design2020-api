const getWorkById = require("../../utils/getWorkById");

module.exports = async (req, res) => {
  const work = await getWorkById(req.query.id);
  res.send(work);
};
