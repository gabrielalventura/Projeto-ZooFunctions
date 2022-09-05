const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function captureEmployeeInformations(dado) {
  const information = (Object.values(dado))[0];
  return employees.filter((info) =>
    info.id === information || info.firstName === information || info.lastName === information);
}

function isAEmployee(info) {
  const theInfo = (Object.values(info))[0];
  return employees.some((employee) =>
    employee.firstName === theInfo || employee.lastName === theInfo || employee.id === theInfo);
}

function captureSpecies(param) {
  const responsiblePerson = employees.find((person) => person.id === param).responsibleFor;
  const listOfSpecies = [];
  responsiblePerson.forEach((specie) => {
    listOfSpecies.push(species.find((pet) => pet.id === specie).name);
  });
  return listOfSpecies;
}

function captureLocations(worker) {
  const responsibleLocation = employees.find((person) => person.id === worker).responsibleFor;
  const listOfLocations = [];
  responsibleLocation.forEach((local) => {
    listOfLocations.push(species.find((pet) => pet.id === local).location);
  });
  return listOfLocations;
}

function allEmployees() {
  return employees.map((worker) => ({
    id: worker.id,
    fullName: `${worker.firstName} ${worker.lastName}`,
    species: captureSpecies(worker.id),
    locations: captureLocations(worker.id),
  }));
}

function selectedEmployee(person) {
  const employee = captureEmployeeInformations(person);
  return {
    id: employee[0].id,
    fullName: `${employee[0].firstName} ${employee[0].lastName}`,
    species: captureSpecies(employee[0].id),
    locations: captureLocations(employee[0].id),
  };
}

function getEmployeesCoverage(worker) {
  if (worker === undefined) {
    return allEmployees();
  }
  if (isAEmployee(worker) !== false) {
    return selectedEmployee(worker);
  }
  throw new Error('Informações inválidas');
}
module.exports = getEmployeesCoverage;
