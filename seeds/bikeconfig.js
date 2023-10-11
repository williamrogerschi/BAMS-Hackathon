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
        picURL: "https://www.sram.com/globalassets/publicsites/brand-logos/sram-logo.png",
    })
    sramBrand.save()

    const shimanoBrand = await new Brand({
        name: `Shimano`,
        url: "https://www.shimano.com/en/",
        picURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Shimano_logo.svg/1200px-Shimano_logo.svg.png",
    })
    shimanoBrand.save()

    const wtbBrand = await new Brand({
        name: `WTB`,
        url: "https://www.wtb.com/",
        picURL: "https://upload.wikimedia.org/wikipedia/en/7/73/Wilderness_Trail_Bikes_Vertical_Logo.gif",
    })
    wtbBrand.save()

    const schwalbeBrand = await new Brand({
        name: `Schwalbe`,
        url: "https://www.schwalbetires.com/",
        picURL: "https://www.schwalbetires.com/media/96/f1/f7/1694419854/logo-desktop2.png",
    })
    schwalbeBrand.save()

    const zippBrand = await new Brand({
        name: `Zipp`,
        url: "https://www.sram.com/en/zipp",
        picURL: "PLACEHOLDER",
    })
    zippBrand.save()

    const eastonBrand = await new Brand({
        name: `Easton`,
        url: "https://eastoncycling.com/",
        picURL: "PLACEHOLDER",
    })
    eastonBrand.save()


const frames = [
    {
        brand: surlyBrand._id,
        componentType: "Frame",
        modelName: "Midnight Special",
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
        availColors: ['Pea Lime Soup', 'Hi-Viz Black'],
        availDisc: ["Disc"],
        availWheel: ["700C", "26in"],
        priceUSD: 1999,
        imgURL: "https://surlybikes.com/uploads/bikes/disc-trucker-700c-bike-black-BK1960-1200x800.jpg",
    },
    {
        brand: specializedBrand._id,
        componentType: "Frame",
        modelName: "Allez",
        availSizes: [`40cm`, `46cm`, `50cm`, `54cm`, `56cm`, `58cm`, `64cm`],
        availColors: [`Gloss Smoke/White/Silver Dust`, `Gloss Lagoon Blue/Cool Grey/Blaze`, `Satin Maroon/Silver Dust/Flo Red`],
        availDisc: ["Disc"],
        availWheel: ["700C"],
        priceUSD: 1200,
        imgURL: "https://assets.specialized.com/i/specialized/90022-70_ALLEZ-E5-DISC-SMK-WHT-SILDST_HERO?$scom-pdp-product-image-zoom$&?fmt=auto",
    },
    {
        brand: specializedBrand._id,
        componentType: "Frame",
        modelName: "Rock Hopper Comp 29",
        availSizes: [`S`, `M`, `L`, `XL`, `XXL`],
        availColors: [`GLOSS REDWOOD / SMOKE`, `SATIN BRASSY YELLOW / BLACK`],
        availDisc: ["Disc"],
        availWheel: ["29in"],
        priceUSD: 950,
        imgURL: "https://assets.specialized.com/i/specialized/91522-54_ROCKHOPPER-COMP-29-WHTSGE-FSTGRN_HERO?$scom-pdp-product-image-zoom$&?fmt=auto",
    }

]
await FrameConfig.insertMany(frames)
console.log("created some frames")


const groupset = [
    {
        brand: shimanoBrand._id,
        componentType: `Groupset`,
        modelName: `Tiagra 4700`,
        availGears: [`2x10`, `3x10`],
        priceUSD: 500,
        imgURL: `https://cdn.road.cc/sites/default/files/styles/main_width/public/images/Shimano%20Tiagra%204700%20first%20ride/Shimano%20Tiagra%204700%20-%204.jpg`,
    },
    {
        brand: shimanoBrand._id,
        componentType: `Groupset`,
        modelName: `GRX`,
        availGears: [`2x10`, `1x11`,`2x11`,`1x12`,`1x12`],
        priceUSD: 1800,
        imgURL: `https://www.jensonusa.com/globalassets/digizuite/37066-en-gp001047-grey.jpg`,
    },
    {
        brand: sramBrand._id,
        componentType: `Groupset`,
        modelName: `Apex`,
        availGears: [`1x12`],
        priceUSD: 1000,
        imgURL: `https://images.immediate.co.uk/production/volatile/sites/21/2023/06/SRAM-Apex-2023-4-f8f0733.jpg?webp=true&quality=45&resize=1240%2C826`,
    },
    {
        brand: sramBrand._id,
        componentType: `Groupset`,
        modelName: `Eagle`,
        availGears: [`1x12`],
        priceUSD: 1000,
        imgURL: `https://www.rei.com/media/5ed58d7f-ecbc-4af4-ae30-45515428d708.jpg?size=784x588`,
    },
]
await GroupsetConfig.insertMany(groupset)
console.log("created some groupsets")

const wheel = [
    {
        brand: wtbBrand._id,
        componentType: `Wheel`,
        modelName: `HTZ I30`,
        diameterAvail: [`29in`, `27.5in`],
        isTubelessReady: true,
        priceUSD: 329,
        imgURL: `https://www.wtb.com/cdn/shop/products/W045-0263_HTZi30x29wheel_110x15mm_6-bolt_DB_frontfullside_large.jpg?v=1664299847`,
    }, 
    {
        brand: wtbBrand._id,
        componentType: `Wheel`,
        modelName: `CXR I23`,
        diameterAvail: [`700C`],
        isTubelessReady: true,
        priceUSD: 749,
        imgURL: `https://www.wtb.com/cdn/shop/products/W045-0248__CZRi23x700wheel_142x12mm_24h_6-bolt_ShimanoHG_fullside_1024x1024.jpg?v=1628107556`,
    },
    {
        brand: shimanoBrand._id,
        componentType: `Wheel`,
        modelName: `GRX Thru Axle`,
        diameterAvail: [`700C`, `650B`],
        isTubelessReady: true,
        priceUSD: 500,
        imgURL: `https://dassets.shimano.com/content/dam/global/cg1SHICCycling/final/products/cg2SHICComponent/cg3SHICWheel/cg4SHICWheel/WH-RX570-TL-F12-700C_C6_1.jpg/jcr:content/renditions/WH-RX570-TL-F12-700C_C6_1_750_750.jpeg`,
    },
    {
        brand: shimanoBrand._id,
        componentType: `Wheel`,
        modelName: `DURA-ACE C60`,
        diameterAvail: [`700C`],
        isTubelessReady: false,
        priceUSD: 2000,
        imgURL: `https://dassets.shimano.com/content/dam/global/cg1SHICCycling/final/products/cg2SHICComponent/cg3SHICWheel/cg4SHICWheel/WH-R9270-C60-HR-TU-F-shic219-primary_1.jpg/jcr:content/renditions/WH-R9270-C60-HR-TU-F-shic219-primary_1_750_750.jpeg`,
    }
]
await WheelConfig.insertMany(wheel)
console.log("created some wheels")

const tire = [
    {
        brand: wtbBrand._id,
        componentType: `Tire`,
        modelName: `Horizon`,
        diameterAvail: [`650B`],
        sizeAvail: [`47mm`],
        isTubelessReady: true,
        priceUSD: 66,
        imgURL: `https://www.wtb.com/cdn/shop/products/20200423_Horizon47_tanwall_ISO_large.png?v=1588094659`,
    },
    {
        brand: wtbBrand._id,
        componentType: `Tire`,
        modelName: `Judge`,
        diameterAvail: [`29in`, `27.5in`],
        sizeAvail: [`2.4in`],
        isTubelessReady: true,
        priceUSD: 88,
        imgURL: `https://www.wtb.com/cdn/shop/products/W010-0855_20201028_Judge2.4x29_THG_ISO-01_large.png?v=1633592641`,
    },
    {
        brand: schwalbeBrand._id,
        componentType: `Tire`,
        modelName: `Schwalbe One`,
        diameterAvail: [`700C`],
        sizeAvail: [`23mm`, `25mm`, `28mm`, `30mm`],
        isTubelessReady: false,
        priceUSD: 56,
        imgURL: `https://static.biketiresdirect.com/productimages/images650/SCNNG3-3.jpg`,
    },
    {
        brand: wtbBrand._id,
        componentType: `Tire`,
        modelName: `Marathon Plus`,
        diameterAvail: [`700C`],
        sizeAvail: [`25mm`, `28mm`, `32mm`, `35mm`, `38mm`],
        isTubelessReady: true,
        priceUSD: 60,
        imgURL: `https://www.rei.com/media/19a9e075-0c7e-4908-969d-96b9332fecca.jpg?size=784x588`,
    },

]
await TireConfig.insertMany(tire)
console.log("created some tires")

}

const seedConfig = async () => {
    db.dropDatabase()
    await main()
    db.close()
}

seedConfig()