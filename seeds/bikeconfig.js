const db = require('../db/index')

const { Brand,
    FrameConfig,
    GroupsetConfig,
    WheelConfig,
    TireConfig,
    KitConfig } = require(`../models/configIndex.js`)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    //BRANDS



    const surlyBrand = await new Brand({
        name: `Surly`,
        url: "https://surlybikes.com/",
        picURL: "https://surlybikes.com/images/template_images/logo_surly.jpg",
    })
    surlyBrand.save()

    const specializedBrand = await new Brand({
        name: `Specialized`,
        url: "https://www.specialized.com/us/en/",
        picURL: "https://logovtor.com/wp-content/uploads/2020/05/specialized-bicycle-components-logo-vector.png",
    })
    specializedBrand.save()

    const sramBrand = await new Brand({
        name: `SRAM`,
        url: "https://www.sram.com/en/sram",
        picURL: "PLACEHOLDER",
    })
    sramBrand.save()

    const shimanoBrand = await new Brand({
        name: `Shimano`,
        url: "PLACEHOLDER",
        picURL: "PLACEHOLDER",
    })
    shimanoBrand.save()

    const wtbBrand = await new Brand({
        name: `WTB`,
        url: "PLACEHOLDER",
        picURL: "PLACEHOLDER",
    })
    wtbBrand.save()

    const schwalbeBrand = await new Brand({
        name: `Schwalbe`,
        url: "PLACEHOLDER",
        picURL: "PLACEHOLDER",
    })
    schwalbeBrand.save()

    const zippBrand = await new Brand({
        name: `Zipp`,
        url: "PLACEHOLDER",
        picURL: "PLACEHOLDER",
    })
    zippBrand.save()

    const surlyBrand = await new Brand({
        name: `Zipp`,
        url: "https://www.sram.com/en/zipp",
        picURL: "PLACEHOLDER",
    })
    surlyBrand.save()

    const eastonBrand = await new Brand({
        name: `Easton`,
        url: "https://eastoncycling.com/",
        picURL: "PLACEHOLDER",
    })
    eastonBrand.save()
}

const frames = [
    {
        brand: surlyBrand._id,
        componentType: "Frame",
        modelName: "Disc Trucker",
        availSizes: [`40cm`, `46cm`, `50cm`, `54cm`, `56cm`, `58cm`, `64cm`],
        availColors: ['Metallic Lilac', 'Black'],
        availDisc: ["Disc"],
        availWheel: ["650B"],
        priceUSD: 2350,
        imgURL: "https://surlybikes.com/uploads/bikes/surly-midnight-special-road-bike-metallic-lilac-BK2306-1200x800.jpg",
    },
    {
        brand: surlyBrand._id,
        componentType: "Frame",
        modelName: "Disc Trucker",
        availSizes: [`40cm`, `46cm`, `50cm`, `54cm`, `56cm`, `58cm`, `64cm`],
        availColors: ['Metallic Lilac', 'Black'],
        availDisc: ["Disc"],
        availWheel: ["650B"],
        priceUSD: 2350,
        imgURL: "https://surlybikes.com/uploads/bikes/surly-midnight-special-road-bike-metallic-lilac-BK2306-1200x800.jpg",
    },
        
]
await FrameConfig.insertMany(frames)
    console.log("created some frames")

const seedConfig = async () => {
    // db.dropDatabase()
    await main()
    db.close()
}

seedConfig()