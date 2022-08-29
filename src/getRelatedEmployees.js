const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(employeeId) {
  return employees.some((employee) => employee.id === employeeId && employee.managers.length <= 1);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((element) => element.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
