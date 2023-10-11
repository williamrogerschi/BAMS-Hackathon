const { Brand, FrameConfig, GroupsetConfig, WheelConfig, TireConfig, KitConfig} = require(`../models/configIndex.js`)


module.exports = {
    getAll,
    getByID
}

async function getAll (req,res) {
    try {
        const brands = await Brand.find()
        res.status(201).send(brands)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

async function getByID (req,res) {
    try {
        const brand = await Brand.findById(req.params.id)
        res.status(201).send(brand)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}