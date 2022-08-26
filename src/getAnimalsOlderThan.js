const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const choosedSpecie = species;
  const animalAge = species.resident;
  Object.values(species).every((Specie, Age) => choosedSpecie.name === animal && animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
