module.exports = {
  Authorization: `token ${process.env.GH_TOKEN}`,
  "User-Agent": process.env.GH_USER,
};
