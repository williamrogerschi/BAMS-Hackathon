const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

//IMPORTS - DemoBikes
const demoController = require("./controllers/demoController.js");

//IMPORTS - Bike Config
const { Brand, FrameConfig, GroupsetConfig, WheelConfig, TireConfig, KitConfig } = require(`./models/configIndex.js`)

const brandConfigController = require(`./controllers/brandsConfigController.js`)
const frameConfigController = require(`./controllers/frameConfigController.js`)

//IMPORTS - Cart
const cartController = require(`./controllers/cartController.js`)


const PORT = process.env.PORT || 3001;

const app = express();
//middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

//CRUD - Homepage
app.get("/", (req, res) => res.send("INSERT HOME PAGE HERE"));

//CRUD - Demos
app.get("/demos", demoController.getAllDemos);
app.get("/demos/:brand", demoController.getOneDemo);

//CRUD - Brands
app.get(`/brands`, brandConfigController.getAll);
app.get(`/brands/:id`, brandConfigController.getByID);

//CRUD - Bike Config
//Frames
app.get(`/bike-builder/frames`, frameConfigController.getAll);

//CRUD - Shopping Cart
app.get('/cart', cartController.getCart)

//shopping cart array:
const shoppingCart = [];

// Add an item to the shopping cart
app.post("/cart/:name", (req, res) => {
  const { name } = req.params
  const item = shoppingCart.find((item) => item.name === name)

  if (item) {
    res.status(400).send("Item already in the shopping cart")
  } else {
    shoppingCart.push({ name });
    res.status(200).send("Item added to the shopping cart")
  }

})


// Get the contents of the shopping cart
app.get("/cart", (req, res) => {
  res.json(shoppingCart);
});

//listening
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
