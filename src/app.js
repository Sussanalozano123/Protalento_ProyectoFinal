const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World! pROTALENTO')
  });
  
  module.exports = {app, port};