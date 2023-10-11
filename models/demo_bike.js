const { Schema } = require("mongoose");
//this connects to mongoose for this file

const DemoSchema = new Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    tireSize: { type: String, required: false },
    year: { type: Number, required: true },
    size: { type: String, required: true },
    url: { type: String, required: true },
    imageUrl: { type: String, required: true },
    priceUSD: { type: Number, required: true },
    savingsUSD: { type: Number, required: true },
    ships: { type: Boolean, required: true },
  },
  { timestamps: true }
);

//const DemoModel = mongoose.model("DemoModel", DemoSchema);

module.exports = {
  DemoSchema,
  // DemoModel,
};
