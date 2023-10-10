const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')
//const controllers

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use(logger ('dev'))
app.use(bodyParser.json())

//show routes


//CRUD



//listening
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))