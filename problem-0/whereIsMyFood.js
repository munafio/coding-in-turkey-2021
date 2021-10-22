function whereIsMyFood(fridge, item) {
  for (let index = 0; index < fridge.length; index++) {
    if (fridge[index] == item) return index;
  }
  return -1;
}

module.exports = whereIsMyFood;
