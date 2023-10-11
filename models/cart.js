const  { Schema } = require('mongoose')

const cartSchema = new Schema(    
    {
    user: { type: String, required: true },
    items: { type: Schema.Types.ObjectId, ref: 'DemoModel' },
    totalCostUSD: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = cartSchema
