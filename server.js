const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

//IMPORTS - DemoBikes
const demoController = require("./controllers/demoController.js");

//IMPORTS - Bike Config

const {
  Brand,
  FrameConfig,
  GroupsetConfig,
  WheelConfig,
  TireConfig,
  KitConfig,
} = require(`./models/configIndex.js`);

const brandConfigController = require(`./controllers/brandsConfigController.js`);
const frameConfigController = require(`./controllers/frameConfigController.js`);

//IMPORTS - Cart
const cartController = require(`./controllers/cartController.js`);

const PORT = process.env.PORT || 3001;

const app = express();
//middleware
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());

//CRUD - Homepage
app.get("/", (req, res) => res.send("INSERT HOME PAGE HERE"));

//CRUD - Demos
//get all:
app.get("/demos", demoController.getAllDemos);
//get one demo by ID:
app.get("/demos/:id", demoController.getOneDemo);

//CRUD - Brands
app.get(`/brands`, brandConfigController.getAll);
app.get(`/brands/:id`, brandConfigController.getByID);

//CRUD - Bike Config
//Frames
app.get(`/bike-builder/frames`, frameConfigController.getAll);

//CRUD - Shopping Cart
//app.get('/cart', cartController.getCart)

// Get the contents of the shopping cart
app.get("/cart", (req, res) => {
  res.json(shoppingCart);
});

// Add an item to the shopping cart array
app.post("/cart/:id", async (req, res) => {
  const { id } = req.params;
  const item = await DemoModel.findOne(id); // Retrieve item details from the database

  if (item) {
    shoppingCart.push(item);
    res.status(200).send("Item added to the shopping cart");
  } else {
    res.status(404).send("Item not found");
  }
});

//listening
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
