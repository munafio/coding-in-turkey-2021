function validateRecipeWithQuantity(fridge, ingredients) {
  const ingredientsKeys = Object.keys(ingredients);
  for (let index = 0; index < ingredientsKeys.length; index++) {
    const key = ingredientsKeys[index];
    if (!(key in fridge)) return false;
    if (ingredients[key] > fridge[key]) return false;
  }
  return true;
}

module.exports = validateRecipeWithQuantity;
