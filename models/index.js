const mongoose = require("mongoose");
const { DemoSchema } = require("./demo_bike.js");

const DemoModel = mongoose.model("DemoModel", DemoSchema);

module.exports = {
  DemoModel,
};
