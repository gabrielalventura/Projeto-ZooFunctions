const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function captureSpeciesName(worker) {
  const speciesId = employees.filter((person) => person.id === worker).responsibleFor;
  let speciesForPerson = [];
  speciesId.forEach((captureId) => {
    const listOfSpecies = species.find((animal) => animal.id === captureId).name;
    speciesForPerson.push(listOfSpecies);
  });
  return speciesForPerson;
}
function getEmployeesCoverage() {
  // seu código aqui
}

module.exports = getEmployeesCoverage;
