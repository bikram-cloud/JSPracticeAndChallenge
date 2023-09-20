// challenge 1
const people = [
  {
    firstNme: 'Bikram',
    lastName: 'Neupane',
    email: 'bikram@gmail.com',
    phone: '090-9100-4344',
    age: 29,
  },
  {
    firstNme: 'Rojina',
    lastName: 'Spakota',
    email: 'rojina@gmail.com',
    phone: '080-9100-4344',
    age: 26,
  },
  {
    firstNme: 'Hari',
    lastName: 'Neupane',
    email: 'hari@gmail.com',
    phone: '070-9100-4344',
    age: 48,
  },
  {
    firstNme: 'Sabrita',
    lastName: 'Neupane',
    email: 'sabrita@gmail.com',
    phone: '050-9100-4344',
    age: 46,
  },
  {
    firstNme: 'Laxman',
    lastName: 'Neupane',
    email: 'laxman@gmail.com',
    phone: '020-9100-4344',
    age: 26,
  },
  {
    firstNme: 'Ram',
    lastName: 'Neupane',
    email: 'laxman@gmail.com',
    phone: '080-9100-4300',
    age: 31,
  },
];

const youngPeople = people
  .filter(person => person.age <= 30)
  .map(person => ({
    name: `${person.firstNme} ${person.lastName}`,
    email: person.email,
  }));
console.log(youngPeople);

const checkPhoneNumber = people
  .filter(value => value.phone === '090-9100-4344')
  .map(p => ({
    name: `${p.lastName} ${p.firstNme}`,
    phone: p.phone,
  }));
console.log(checkPhoneNumber);

// challenge 2
const numbers = [2, -30, 50, 20, -12, -0, 7];

const positiveNumSum = numbers
  .filter(number => number > 0)
  .reduce((acc, curr) => acc + curr, 0);

console.log(positiveNumSum);

// challenge 3
const words = ['coder', 'programmer', 'developer'];
const caplitizeFirstLetter = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
});

console.log(caplitizeFirstLetter);
