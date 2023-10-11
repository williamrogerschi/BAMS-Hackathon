const express = require('express')
const db = require('./db')
const logger = require('morgan')
const bodyParser = require('body-parser')

//IMPORTS - Bike Config
const { Brand, FrameConfig, GroupsetConfig, WheelConfig, TireConfig, KitConfig } = require(`./models/configIndex.js`)

const brandConfigController = require(`./controllers/brandsConfigController.js`)
const frameConfigController = require(`./controllers/frameConfigController.js`)



const PORT = process.env.PORT || 3001


const app = express()
//middleware
app.use(logger ('dev'))
app.use(bodyParser.json())

//show routes

app.get('/', (req, res) => res.send('INSERT HOME PAGE HERE'))
//CRUD - Brands
app.get(`/brands`, brandConfigController.getAll)


//CRUD - Bike Config

//Frames
app.get(`/bike-builder/frames`, frameConfigController.getAll)




//listening
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))