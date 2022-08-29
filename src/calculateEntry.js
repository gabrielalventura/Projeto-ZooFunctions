const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((person) => {
    if (person.age < 18) {
      child += 1;
    }
    if (person.age >= 18 && person.age < 50) {
      adult += 1;
    }
    if (person.age >= 50) {
      senior += 1;
    }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants = {}) {
  if (Object.values(entrants).length === 0) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);
  const acessKeys = Object.keys(totalEntrants);
  return acessKeys.reduce((total, each) => total + (totalEntrants[each] * prices[each]), 0);
}

module.exports = { calculateEntry, countEntrants };
