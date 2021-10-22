const validateRecipeWithQuantity = require("./validateRecipeWithQuantity");
const args = require("minimist")(process.argv.slice(2));

const arrayToObj = (array) =>
  array.reduce(
    (prev, curr) => ({
      ...prev,
      [curr.split(":")[0]]: parseInt(curr.split(":")[1]),
    }),
    {}
  );

const ingredients = arrayToObj(args["ingredients"].split(","));
const fridge = arrayToObj(args["fridge"].split(","));

console.log(validateRecipeWithQuantity(fridge, ingredients));
