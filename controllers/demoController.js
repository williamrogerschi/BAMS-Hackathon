const { DemoModel } = require("../models");

module.exports = {
  getAllDemos,
  getOneDemo,
};

async function getAllDemos(req, res) {
  try {
    res.json(await DemoModel.find());
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneDemo(req, res) {
  const { brand } = req.params; // Assuming you're passing the name as a parameter
  const demo = await DemoModel.findOne({ brand: brand });

  if (demo) {
    return res.json(demo);
  } else {
    res
      .status(404)
      .send("Discounted demo-bike with the specified brand does not exist");
  }
}
