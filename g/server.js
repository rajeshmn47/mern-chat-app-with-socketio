const mongoose = require('mongoose')
const express = require('express')
const multer = require('multer')
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express()
app.listen(8000, () => {
  console.log('Backend server is running!')
})
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploded successfully')
  } catch (error) {
    console.error(error)
  }
})

app.use('/', (req, res) => {
  const a = 'jjj'
  res.send(a)
})
mongoose.connect(
  'mongodb://127.0.0.1:27017',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB')
  }
)
