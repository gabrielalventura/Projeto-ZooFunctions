const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const filteredNames = species.find((names) => names.name === animal);
  return filteredNames.residents.every((selected) => selected.age >= age);
}

module.exports = getAnimalsOlderThan;
