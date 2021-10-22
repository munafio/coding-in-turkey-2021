function validateRecipe(fridge, ingredients) {
  if (fridge.length < ingredients.length) return false;
  for (let index = 0; index < ingredients.length; index++) {
    if (!fridge.includes(ingredients[index])) return false;
  }
  return true;
}

module.exports = validateRecipe;
