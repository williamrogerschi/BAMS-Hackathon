const { Brand, FrameConfig, GroupsetConfig, WheelConfig, TireConfig, KitConfig} = require(`../models/configIndex.js`)


module.exports = {
    getAll,
}

async function getAll (req,res) {
    try {
        const frames = await FrameConfig.find()
        res.status(201).send(frames)
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}