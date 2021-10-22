const whereIsMyFood = require("./whereIsMyFood");
const args = require("minimist")(process.argv.slice(2));

const fridge = args["fridge"].split(",");
const item = args["item"];

console.log(whereIsMyFood(fridge, item));
