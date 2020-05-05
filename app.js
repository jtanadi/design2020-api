const express = require("express")
const fs = require("fs")
const path = require("path")

const getAllWorks = require("./utils/getAllWorks")
const getWorkData = require("./utils/getWorkData")
const getWorkIds = require("./utils/getWorkIds")

const app = express()

// Replacement for express.static() so we can
// be selective about which files to send
app.get("/images/:project/:file", (req, res) => {
  if (req.params.file.endsWith(".md")) {
    res.sendStatus(403)
  }

  try {
    const filePath = path.join(__dirname, "works", req.params.project, req.params.file)
    console.log(filePath)
    fs.accessSync(filePath)
    res.sendFile(filePath)
  } catch (e) {
    res.sendStatus(404)
  }
})

app.get("/api/works", (req, res) => {
  const allWorks = getAllWorks()
  res.send(allWorks)
})

app.get("/api/work/:id", (req, res) => {
  const work = getWorkData(req.params.id)
  res.send(work)
})

app.get("/api/ids", (req, res) => {
  const workIds = getWorkIds()
  res.send(workIds)
})

module.exports = app
