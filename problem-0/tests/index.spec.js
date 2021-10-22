const whereIsMyFood = require("../whereIsMyFood");

test("Looking for a banana", () => {
  const fridge = ["tomato", "banana", "apple", "onion", "cucumber"];
  expect(whereIsMyFood(fridge, "banana")).toBe(1);
});
