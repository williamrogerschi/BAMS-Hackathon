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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
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
      imageUrl: "X",
      price: "2,108 USD",
      savings: "200 USD",
      ships: true,
    },
  ];

  await DemoModel.insertMany(bikes);

  console.log("Created bikes!");
};

const run = async () => {
  await main();
  db.close();
};

run();
