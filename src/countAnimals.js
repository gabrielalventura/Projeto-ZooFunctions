const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const totalAnimals = {};
  if (animal === undefined) {
    species.forEach((choosedAnimal) => {
      totalAnimals[choosedAnimal.name] = choosedAnimal.residents.length;
    });
    return totalAnimals;
  }
  if (animal.sex === undefined) {
    const seekedAnimal = species.find((oneAnimal) => oneAnimal.name === animal.specie).residents;
    return seekedAnimal.length;
  }
  const searchingWSex = species.find((theAnimal) => theAnimal.name === animal.specie).residents;
  const bySex = searchingWSex.filter((pet) => pet.sex === animal.sex);
  return bySex.length;
}

module.exports = countAnimals;
