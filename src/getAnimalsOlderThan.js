const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  Object.values(animal).every((age) => age >= 5);
};


module.exports = getAnimalsOlderThan;
