const findTheOldest = function(people) {
  const currentYear = new Date().getFullYear();
  return people.reduce((oldest, currentItem) => {
    let ageOfTheOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    if (isNaN(ageOfTheOldest)) {
      ageOfTheOldest = currentYear - oldest.yearOfBirth;
    }

    let ageOfCurrentPerson = currentItem.yearOfDeath - currentItem.yearOfBirth;
    if (isNaN(ageOfCurrentPerson)) {
        ageOfCurrentPerson = currentYear - currentItem.yearOfBirth;
    }

    if (ageOfCurrentPerson > ageOfTheOldest) {
        return currentItem;
    }
    return oldest;
  })
};

// Do not edit below this line
module.exports = findTheOldest;
