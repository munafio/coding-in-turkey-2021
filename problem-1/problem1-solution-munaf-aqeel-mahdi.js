const validateRecipe = require("./validateRecipe");
const args = require("minimist")(process.argv.slice(2));

const ingredients = args["ingredients"].split(",");
const fridge = args["fridge"].split(",");

console.log(validateRecipe(fridge, ingredients));
