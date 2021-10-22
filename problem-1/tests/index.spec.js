const validateRecipe = require("../validateRecipe");

test("Example 1", () => {
  const ingredients = ["tomato", "onion", "lettuce"];
  const fridge = ["tomato", "banana", "apple", "onion", "cucumber"];
  expect(validateRecipe(fridge, ingredients)).toBe(false);
});

test("Example 2", () => {
  const ingredients = ["olives", "onion", "lettuce"];
  const fridge = ["onion", "banana", "lettuce", "olives"];
  expect(validateRecipe(fridge, ingredients)).toBe(true);
});
