const cartSchema = require("../models/")

module.exports = {
    getCart,
}

async function getCart(req, res) {
    try {
        res.json(await cartSchema.find())
    } catch(e) {
        return res.status(500).send(e.message)
    }
}