const db = require('../db/index')

const { Brand,  } = require(`../models/index`)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    //ACTORS

    const actor1 = await new Actor({
        name: "Tom Hanks",
        age: 67,
        alive: true,
        picURL: `https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg`
    })
    actor1.save()