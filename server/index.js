const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
  .use(bodyParser.json())
  .post('/', (req, res) => {
    console.log(req.body)
  })
  .get('/', (req, res) => res.send("Empty page"))

app.listen(3010, () => console.log("Hello server production"))

//https://devcenter.heroku.com/articles/container-registry-and-runtime