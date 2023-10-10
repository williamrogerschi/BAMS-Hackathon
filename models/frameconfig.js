const  { Schema } = require('mongoose')

const frameConfigSchema = new Schema(    
    {
    brand: { type: Schema.Types.ObjectId, ref: 'Brand'  },
    componentType: { type: String, required: true },
    modelName: { type: String, required: true },
    availSizes: [{ type: String, required: true }],
    availColors: [{ type: String, required: true }],
    availDisc: [{ type: String, required: true }],
    priceUSD: { type: Number, required: true },
    imgURL: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = frameConfigSchema
