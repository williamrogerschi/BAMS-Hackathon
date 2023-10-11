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
      imageUrl: "../images/transition.png",
      price: "2,599",
      savings: "2,400 USD",
      ships: true,
    },
    {
      brand: "Elkat",
      model: "Esker",
      year: 2022,
      size: "XL",
      url: "https://www.pinkbike.com/buysell/3636745/",
      imageUrl: "./images/esker.png",
      price: "2,299 USD",
      savings: "2,201 USD",
      ships: true,
    },
    {
      brand: "Intense Cycles",
      model: "Tazer Fox Pro",
      year: 2022,
      size: "XL",
      url: "https://www.pinkbike.com/buysell/3729192/",
      imageUrl: "./images/intense_chili.png",
      price: "5,000 USD",
      savings: "1,000 USD",
      ships: true,
    },
    {
      brand: "Intense Cycles",
      model: "Tazer Fox Pro",
      year: 2022,
      size: "L",
      url: "https://www.pinkbike.com/buysell/3729192/",
      imageUrl: "./images/intense_chili.png",
      price: "5,000 USD",
      savings: "1,000 USD",
      ships: true,
    },
    {
      brand: "Intense Cycles",
      model: "Tazer Fox Pro",
      year: 2022,
      size: "M",
      url: "https://www.pinkbike.com/buysell/3729192/",
      imageUrl: "./images/intense_chili.png",
      price: "5,000 USD",
      savings: "1,000 USD",
      ships: true,
    },
    {
      brand: "Giant",
      tireSize: "27.5 inches",
      model: "Trance",
      year: 2023,
      size: "S",
      url: "https://www.newmoonski.com/product/giant-trance-29-2-demo-used-15534.htm?variations=552096,552097?utm_source=google%20shopping&utm_medium=organic&gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfZGv-trV58910vXeVvCY6n7uFWzuj6Zn-Wof5IFggloI_Z_LE3TMgaAuaYEALw_wcB",
      imageUrl: "./images/trance.png",
      price: "1,775 USD",
      savings: "825 USD",
      ships: true,
    },
    {
      brand: "Giant",
      model: "Trance",
      tireSize: "27.5 inches",
      year: 2023,
      size: "M",
      url: "https://www.newmoonski.com/product/giant-trance-29-2-demo-used-15534.htm?variations=552096,552097?utm_source=google%20shopping&utm_medium=organic&gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfZGv-trV58910vXeVvCY6n7uFWzuj6Zn-Wof5IFggloI_Z_LE3TMgaAuaYEALw_wcB",
      imageUrl: "./images/trance.png",
      price: "1,775 USD",
      savings: "825 USD",
      ships: true,
    },
    {
      brand: "Giant",
      tireSize: "27.5 inches",
      model: "Trance",
      year: 2023,
      size: "L",
      url: "https://www.newmoonski.com/product/giant-trance-29-2-demo-used-15534.htm?variations=552096,552097?utm_source=google%20shopping&utm_medium=organic&gad=1&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfZGv-trV58910vXeVvCY6n7uFWzuj6Zn-Wof5IFggloI_Z_LE3TMgaAuaYEALw_wcB",
      imageUrl: "./images/trance.png",
      price: "1,775 USD",
      savings: "825 USD",
      ships: true,
    },

    {
      brand: "Giant",
      tireSize: "29 inches",
      model: "Trance",
      year: 2022,
      size: "L",
      url: "https://bicyclewarehouse.com/products/giant-trance-275-mountain-bike-2021?variant=32121625903206&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&campaignid=19938245012&adgroupid=&keyword=&device=c&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfTvRtisRA0QJew_7MV1fH5nIGRuEOIvk-_8TJn05kz8Z_PHl0d3mIaAngqEALw_wcB",
      imageUrl: "./images/trance.png",
      price: "2,108 USD",
      savings: "200 USD",
      ships: true,
    },

    {
      brand: "Giant",
      tireSize: "29 inches",
      model: "Trance",
      year: 2022,
      size: "M",
      url: "https://bicyclewarehouse.com/products/giant-trance-275-mountain-bike-2021?variant=32121625903206&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google&utm_medium=cpc&campaignid=19938245012&adgroupid=&keyword=&device=c&gclid=Cj0KCQjw7JOpBhCfARIsAL3bobfTvRtisRA0QJew_7MV1fH5nIGRuEOIvk-_8TJn05kz8Z_PHl0d3mIaAngqEALw_wcB",
      imageUrl: "./images/trance.png",
      price: "2,108 USD",
      savings: "200 USD",
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "L",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-large-demo-sale-181148.htm",
      imageUrl: "X",
      price: "8,400 USD",
      savings: "5,600 USD",
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "M",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-medium-demo-sale-181147.htm",
      imageUrl: "X",
      price: "8,400 USD",
      savings: "5,600 USD",
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "S",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-small-demo-sale-172711.htm",
      imageUrl: "X",
      price: "8,400 USD",
      savings: "5,600 USD",
      ships: true,
    },

    {
      brand: "Yeti",
      model: "160E TE3 XO T-TYPE",
      year: 2023,
      size: "XL",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-160e-te3-xo-t-type-exc-x-large-demo-sale-181149.htm",
      imageUrl: "X",
      price: "8,400 USD",
      savings: "5,600 USD",
      ships: true,
    },
    {
      brand: "Trek",
      model: "SLASH 9.8 GX",
      year: 2022,
      size: "L",
      url: "https://www.wheatridgecyclery.com/product/trek-slash-9.8-gx-402186-1.htm",
      imageUrl: "X",
      price: "5,999.99 USD",
      savings: "2,400 USD",
      ships: true,
    },
    {
      brand: "Trek",
      model: "SLASH 9.8 GX",
      year: 2022,
      size: "S",
      url: "https://www.wheatridgecyclery.com/product/trek-slash-9.8-gx-402186-1.htm",
      imageUrl: "X",
      price: "5,999.99 USD",
      savings: "2,400 USD",
      ships: true,
    },

    {
      brand: "Trek",
      model: "SLASH 9.8 GX",
      year: 2022,
      size: "M",
      url: "https://www.wheatridgecyclery.com/product/trek-slash-9.8-gx-402186-1.htm",
      imageUrl: "X",
      price: "5,999.99 USD",
      savings: "2,400 USD",
      ships: true,
    },

    {
      brand: "Trek",
      model: "E-CALIBER",
      year: 2022,
      size: "XL",
      url: "https://www.wheatridgecyclery.com/product/trek-e-caliber-9.6-402158-1.htm",
      imageUrl: "X",
      price: "3,325 USD",
      savings: "3,325 USD",
      ships: true,
    },
    {
      brand: "Specialized",
      model: "KENEVO",
      year: 2022,
      size: "S3",
      url: "https://www.wheatridgecyclery.com/product/specialized-turbo-kenevo-sl-comp-carbon-397768-1.htm",
      imageUrl: "X",
      price: "4,999.99 USD",
      savings: "4,000 USD",
      ships: true,
    },
    {
      brand: "Yeti",
      model: "SB120",
      year: 2023,
      size: "S",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-sb120-c2-418152-1.htm",
      imageUrl: "X",
      price: "4,949.99 USD",
      savings: "1,650 USD",
      ships: true,
    },
    {
      brand: "Yeti",
      model: "SB120",
      year: 2023,
      size: "M",
      url: "https://www.wheatridgecyclery.com/product/yeti-cycles-sb120-c2-418152-1.htm",
      imageUrl: "X",
      price: "4,949.99 USD",
      savings: "1,650 USD",
      ships: true,
    },
  ];

  await DemoModel.insertMany(bikes);

  const documents = await DemoModel.find({});
  console.log(documents);

  console.log("Created bikes!");
};

const run = async () => {
  db.dropDatabase();
  await main();
  db.close();
};

run();
