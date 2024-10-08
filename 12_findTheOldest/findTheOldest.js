function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, current) => {
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        return currentAge > oldestAge ? current : oldest;
    })
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  findTheOldest(people);



// Do not edit below this line
module.exports = findTheOldest;
