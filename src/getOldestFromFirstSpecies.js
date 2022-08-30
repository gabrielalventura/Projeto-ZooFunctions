const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(employeeId) {
  const responsible = employees.find((person) => person.id === employeeId);
  const firstSpecies = responsible.responsibleFor[0];
  const specie = species.find((pet) => pet.id === firstSpecies).residents;
  const oldestFromSpecie = specie.sort((young, old) => old.age - young.age)[0];
  return Object.values(oldestFromSpecie);
}

module.exports = getOldestFromFirstSpecies;
