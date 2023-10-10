const  { Schema } = require('mongoose')

const wheelsConfigSchema = new Schema(    
    {
    brand: { type: Schema.Types.ObjectId, ref: 'Brand'  },
    componentType: { type: String, required: true },
    modelName: { type: String, required: true },
    diameterAvail: [{ type: String, required: true }],
    isTubelessReady: { type: Boolean, required: true },
    priceUSD: { type: Number, required: true },
    imgURL: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = wheelsConfigSchema
