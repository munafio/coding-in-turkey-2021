const validateRecipeWithQuantity = require("../validateRecipeWithQuantity");

test("Example 1", () => {
  const ingredients = { tomato: 1, onion: 2 };
  const fridge = { tomato: 1, onion: 1 };
  expect(validateRecipeWithQuantity(fridge, ingredients)).toBe(false);
});

test("Example 2", () => {
  const ingredients = { tomato: 2, onion: 3 };
  const fridge = { tomato: 2, onion: 3, olives: 1 };
  expect(validateRecipeWithQuantity(fridge, ingredients)).toBe(true);
});
