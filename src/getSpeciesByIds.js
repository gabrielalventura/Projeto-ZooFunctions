const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...choosedIds) {
  return species.filter((animals) => choosedIds.includes(animals.id));
}

module.exports = getSpeciesByIds;

// Raciocinio desenvolvido com auxilio da mentoria da Nat Siqueira;
