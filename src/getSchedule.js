const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

function getSpecieSchedule(specie) {
  return species.find((animal) => animal.name === specie).availability;
}

function catchSpecies(day) {
  const inExhibition = species.filter((animal) => animal.availability.includes(day));
  const specieOfTheDay = inExhibition.map((pet) => pet.name);
  return specieOfTheDay;
}

function catchOfficeHour(day) {
  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
}

const weekSchedule = {
  Tuesday: {
    officeHour: catchOfficeHour('Tuesday'),
    exhibition: catchSpecies('Tuesday'),
  },
  Wednesday: {
    officeHour: catchOfficeHour('Wednesday'),
    exhibition: catchSpecies('Wednesday'),
  },
  Thursday: {
    officeHour: catchOfficeHour('Thursday'),
    exhibition: catchSpecies('Thursday'),
  },
  Friday: {
    officeHour: catchOfficeHour('Friday'),
    exhibition: catchSpecies('Friday'),
  },
  Saturday: {
    officeHour: catchOfficeHour('Saturday'),
    exhibition: catchSpecies('Saturday'),
  },
  Sunday: {
    officeHour: catchOfficeHour('Sunday'),
    exhibition: catchSpecies('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function weekDay(day) {
  if (day === 'Monday') {
    return {
      Monday: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [day]: {
      officeHour: catchOfficeHour(day),
      exhibition: catchSpecies(day),
    },
  };
}

function getSchedule(scheduleTarget) {
  if (species.map((pet) => pet.name)
    .includes(scheduleTarget)) {
    return getSpecieSchedule(scheduleTarget);
  }
  if (scheduleTarget === undefined) {
    return weekSchedule;
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return weekDay(scheduleTarget);
  }
  if (scheduleTarget !== species.name) {
    return weekSchedule;
  }
}

module.exports = getSchedule;
