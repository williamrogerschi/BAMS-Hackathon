const express = require("express");
const db = require("./db");
const logger = require("morgan");
const bodyParser = require("body-parser");
//const controllers
const demoController = require("./controllers/demoController.js");

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(logger("dev"));
app.use(bodyParser.json());

//show routes
app.get("/demos", demoController.getAllDemos);

app.get("/demos/:name", demoController.getOneDemo);

//CRUD

//shopping cart array:
const shoppingCart = [];

// Add an item to the shopping cart
app.post("/cart/:name", (req, res) => {
  const { name } = req.params;
  const item = shoppingCart.find((item) => item.name === name);

  if (item) {
    res.status(400).send("Item already in the shopping cart");
  } else {
    shoppingCart.push({ name });
    res.status(200).send("Item added to the shopping cart");
  }
});

// Get the contents of the shopping cart
app.get("/cart", (req, res) => {
  res.json(shoppingCart);
});

//listening
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
