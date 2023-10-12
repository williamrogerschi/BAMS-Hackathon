const db = require("../db");
const { DemoModel } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const bikes = [
    {
      brand: "Transition",
      model: "Scout",
      year: 2022,
      size: "L",
      url: "https://www.pinkbike.com/buysell/3636725/",
      imageUrl: "../client/assets/images/transition.png",
      priceUSD: 2599,
      savingsUSD: 2400,
      ships: true,
    },
    {
      brand: "Elkat",
      model: "Esker",
      year: 2022,
      size: "XL",
      url: "https://www.pinkbike.com/buysell/3636745/",
      imageUrl: "../client/assets/images/esker.png",
      priceUSD: 2299,
      savingsUSD: 2201,
      ships: true,
    },
    {
      brand: "Intense Cycles",
      model: "Tazer Fox Pro",
      year: 2022,
      size: "XL",
      url: "https://www.pinkbike.com/buysell/3729192/",
      imageUrl: "../client/assets/images/intense_chili.png",
      priceUSD: 5000,
      savingsUSD: 1000,
      ships: true,
    },
    {
      brand: "Intense Cycles",
      model: "Tazer Fox Pro",
      year: 2022,
      size: "L",
      url: "https://www.pinkbike.com/buysell/3729192/",
      imageUrl: "../client/assets/images/intense_chili.png",
      priceUSD: 5000,
      savingsUSD: 1000,
      ships: true,
    },
    {
      brand: "Intense Cycles",
      model: "Tazer Fox Pro",
      year: 2022,
      size: "M",
      url: "https://www.pinkbike.com/buysell/3729192/",
      imageUrl: "../client/assets/images/intense_chili.png",
      priceUSD: 5000,
      savingsUSD: 1000,
      ships: true,
    },
    {
      brand: "Giant",
      tireSize: "27.5 inches",
      model: "Trance",
      year: 2023,
      size: "S",
      url: "https://www.newmoonski.com/product/giant-trance-29-2-demo-used-15534.htm?variations=552096,552097?utm_source=google%20shopping&utm_medium=organic&gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfZGv-trV58910vXeVvCY6n7uFWzuj6Zn-Wof5IFggloI_Z_LE3TMgaAuaYEALw_wcB",
      imageUrl: "../client/assets/images/trance.png",
      priceUSD: 1775,
      savingsUSD: 825,
      ships: true,
    },
    {
      brand: "Giant",
      model: "Trance",
      tireSize: "27.5 inches",
      year: 2023,
      size: "M",
      url: "https://www.newmoonski.com/product/giant-trance-29-2-demo-used-15534.htm?variations=552096,552097?utm_source=google%20shopping&utm_medium=organic&gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfZGv-trV58910vXeVvCY6n7uFWzuj6Zn-Wof5IFggloI_Z_LE3TMgaAuaYEALw_wcB",
      imageUrl: "../client/assets/images/trance.png",
      priceUSD: 1775,
      savingsUSD: 825,
      ships: true,
    },
    {
      brand: "Giant",
      tireSize: "27.5 inches",
      model: "Trance",
      year: 2023,
      size: "L",
      url: "https://www.newmoonski.com/product/giant-trance-29-2-demo-used-15534.htm?variations=552096,552097?utm_source=google%20shopping&utm_medium=organic&gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfZGv-trV58910vXeVvCY6n7uFWzuj6Zn-Wof5IFggloI_Z_LE3TMgaAuaYEALw_wcB",
      imageUrl: "../client/assets/images/trance.png",
      priceUSD: 1775,
      savingsUSD: 825,
      ships: true,
    },

    {
      brand: "Giant",
      tireSize: "29 inches",
      model: "Trance",
      year: 2022,
      size: "L",
      url: "https://bicyclewarehouse.com/products/giant-trance-275-mountain-bike-2021?variant=32121625903206&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&campaignid=19938245012&adgroupid=&keyword=&device=c&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfTvRtisRA0QJew_7MV1fH5nIGRuEOIvk-_8TJn05kz8Z_PHl0d3mIaAngqEALw_wcB",
      imageUrl: "../client/assets/images/trance.png",
      priceUSD: 2108,
      savingsUSD: 200,
      ships: true,
    },

    {
      brand: "Giant",
      tireSize: "29 inches",
      model: "Trance",
      year: 2022,
      size: "M",
      url: "https://bicyclewarehouse.com/products/giant-trance-275-mountain-bike-2021?variant=32121625903206&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&campaignid=19938245012&adgroupid=&keyword=&device=c&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfTvRtisRA0QJew_7MV1fH5nIGRuEOIvk-_8TJn05kz8Z_PHl0d3mIaAngqEALw_wcB",
      imageUrl: "../client/assets/images/trance.png",
      priceUSD: 2108,
      savingsUSD: 200,
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "L",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-large-demo-sale-181148.htm",
      imageUrl: "../client/assets/images/Yeti_te3.png",
      priceUSD: 8400,
      savingsUSD: 5600,
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "M",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-medium-demo-sale-181147.htm",
      imageUrl: "../client/assets/images/Yeti_te3.png",
      priceUSD: 8400,
      savingsUSD: 5600,
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "S",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-small-demo-sale-172711.htm",
      imageUrl: "../client/assets/images/Yeti_te3.png",
      priceUSD: 8400,
      savingsUSD: 5600,
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "XL",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-x-large-demo-sale-181149.htm",
      imageUrl: "../client/assets/images/Yeti_te3.png",
      priceUSD: 8400,
      savingsUSD: 5600,
      ships: true,
    },
    {
      brand: "Trek",
      model: "SLASH 9.8 GX",
      year: 2022,
      size: "L",
      url: "https://www.wheatridgecyclery.com/product/trek-slash-9.8-gx-402186-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 5999.99,
      savingsUSD: 2400,
      ships: true,
    },
    {
      brand: "Trek",
      model: "SLASH 9.8 GX",
      year: 2022,
      size: "S",
      url: "https://www.wheatridgecyclery.com/product/trek-slash-9.8-gx-402186-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 5999.99,
      savingsUSD: 2400,
      ships: true,
    },

    {
      brand: "Trek",
      model: "SLASH 9.8 GX",
      year: 2022,
      size: "M",
      url: "https://www.wheatridgecyclery.com/product/trek-slash-9.8-gx-402186-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 5999.99,
      savingsUSD: 2400,
      ships: true,
    },

    {
      brand: "Trek",
      model: "E-CALIBER",
      year: 2022,
      size: "XL",
      url: "https://www.wheatridgecyclery.com/product/trek-e-caliber-9.6-402158-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 3325,
      savingsUSD: 3325,
      ships: true,
    },
    {
      brand: "Specialized",
      model: "KENEVO",
      year: 2022,
      size: "S3",
      url: "https://www.wheatridgecyclery.com/product/specialized-turbo-kenevo-sl-comp-carbon-397768-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 4999.99,
      savingsUSD: 4000,
      ships: true,
    },
    {
      brand: "Yeti",
      model: "SB120",
      year: 2023,
      size: "S",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-sb120-c2-418152-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 4949.99,
      savingsUSD: 1650,
      ships: true,
    },
    {
      brand: "Yeti",
      model: "SB120",
      year: 2023,
      size: "M",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-sb120-c2-418152-1.htm",
      imageUrl: "../client/assets/images/trek.png",
      priceUSD: 4949.99,
      savingsUSD: 1650,
      ships: true,
    },
  ];

  await DemoModel.insertMany(bikes);

  const documents = await DemoModel.find({});
  console.log(documents);

  console.log("Created bikes!");
};

const run = async () => {
  // db.dropDatabase();
  await main();
  db.close();
};

run();
