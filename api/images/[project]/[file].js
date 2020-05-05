const fs = require("fs")
const path = require("path")

module.exports = (req, res) => {
  if (req.query.file.endsWith(".md")) {
    res.sendStatus(403)
  }

  try {
    const filePath = path.join(__dirname, "works", req.query.project, req.query.file)
    console.log(filePath)
    fs.accessSync(filePath)
    res.sendFile(filePath)
  } catch (e) {
    res.sendStatus(404)
  }
}
