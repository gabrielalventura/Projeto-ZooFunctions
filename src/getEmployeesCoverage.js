const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function validatePerson(choosedData) {
  const info = (Object.values(data))[0];
  return employees.filter((worker) =>
    worker.id === info || worker.firstName === info || worker.lastName === info);
}

function captureSpeciesName(worker) {
  const speciesId = employees.filter((person) => person.id === worker).responsibleFor;
  const speciesForPerson = [];
  speciesId.forEach((captureId) => {
    const listOfSpecies = species.find((animal) => animal.id === captureId).name;
    speciesForPerson.push(listOfSpecies);
  });
  return speciesForPerson;
}

function captureSpeciesLocation(worker) {
  const speciesId = employees.filter((person) => person.id === worker).responsibleFor;
  const locationsForSpecies = [];
  speciesId.forEach((captureId) => {
    const listOfSpecies = species.find((animal) => animal.id === captureId).location;
    locationsForSpecies.push(listOfSpecies);
  });
  return locationsForSpecies;
}

function createObject(param) {
  return {
    id: param.id,
    fullName: `${param.firstName} ${param.lastName}`,
    species: captureSpeciesName(param.id),
    locations: captureSpeciesLocation(param.id),
  };
}

const withoutParam = employees.map((person) => ({
  id: person.id,
  fullName: `${person.firstName} ${person.lastName}`,
  species: captureSpeciesName(person.id),
  locations: captureSpeciesLocation(person.id),
}));

function getEmployeesCoverage(param) {
  if (validatePerson(param) !== false) {
    return createObject(param);
  }
  if (param === undefined) {
    return withoutParam;
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
