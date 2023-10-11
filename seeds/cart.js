const db = require('../db/index')

const cartSchema = require('../models/cart')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


//shopping cart array:

const main = async () => {
const shoppingCart = []

await cartSchema.insertMany(shoppingCart)
console.log(`Created a shopping cart!`)
}


const run = async () => {
    await main()
    db.close()
}

run()