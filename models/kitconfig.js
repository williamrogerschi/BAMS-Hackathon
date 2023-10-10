const  { Schema } = require('mongoose')

const kitConfigSchema = new Schema(    
    {
    brand: { type: Schema.Types.ObjectId, ref: 'Brand'  },
    componentType: { type: String, required: true },
    modelName: { type: String, required: true },
    handlebarWidth: [{ type: String, required: true }],
    stemLength: [{ type: String, required: true }],
    priceUSD: { type: Number, required: true },
    imgURL: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = kitConfigSchema
