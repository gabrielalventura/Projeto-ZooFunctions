const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(selectedEmployee) {
  const notAEmployee = {};

  if (selectedEmployee === undefined) {
    return notAEmployee;
  }
  return employees.find((seekedName) =>
    selectedEmployee === seekedName.firstName || selectedEmployee === seekedName.lastName);
}

module.exports = getEmployeeByName;
