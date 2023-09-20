// forEach
const socials = ['Twitter', 'Youtube', 'Facebook', 'Instagram'];

socials.forEach(social => {
  console.log(social);
});

socials.forEach(function (social) {
  console.log(social);
});

socials.forEach((item, index, arr) => {
  console.log(`${index} - ${item}`, arr);
});

function logSocial(social) {
  console.log(social);
}

socials.forEach(logSocial);

const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'facebook', url: 'https://facebook.com' },
];

socialObjs.forEach(item => {
  console.log(item.url);
});

// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);

function evenNumbers1(numbers) {
  const evenNumbers = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });

  return evenNumbers;
}

console.log(evenNumbers1(numbers));

const companies = [
  { name: 'Company One', category: 'Finance', start: 1995, end: 2000 },
  { name: 'Company Two', category: 'IT', start: 1995, end: 2020 },
  { name: 'Company Three', category: 'Hospital', start: 1990, end: 2000 },
  { name: 'Company Four', category: 'Resturant', start: 1909, end: 2019 },
  { name: 'Company Five', category: 'Hospital', start: 2005, end: 2015 },
  { name: 'Company Six', category: 'Bar', start: 2001, end: 2023 },
  { name: 'Company Seven', category: 'Finance', start: 1992, end: 2010 },
];

const filterCompanies = companies.filter(
  // companie => companie.category === 'Hospital'
  // companie => companie.name === 'Company Seven'
  companie => companie.start > 2000 && companie.end <= 2023
);

console.log(filterCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  // company => company.end - company.start >= 10
  company => company.end - company.start >= 20
);

console.log(longCompanies);

// Map method
const numbers2 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers2.map(number => `Number: ${number * 2}`);

console.log(doubledNumbers);

function doubleNumber() {
  const doubledNumbers2 = [];

  numbers2.forEach(number => {
    console.log(number * 2);
    doubledNumbers2.push(number * 2);
  });

  return doubledNumbers2;
}

console.log(doubleNumber(numbers2));

const companies2 = [
  { name: 'Company One', category: 'Finance', start: 1995, end: 2000 },
  { name: 'Company Two', category: 'IT', start: 1995, end: 2020 },
  { name: 'Company Three', category: 'Hospital', start: 1990, end: 2000 },
  { name: 'Company Four', category: 'Resturant', start: 1909, end: 2019 },
  { name: 'Company Five', category: 'Hospital', start: 2005, end: 2015 },
  { name: 'Company Six', category: 'Bar', start: 2001, end: 2023 },
  { name: 'Company Seven', category: 'Finance', start: 1992, end: 2010 },
];

// Create an array of company names
const companiyNames2 = companies2.map(company => company.name);
console.log(companiyNames2);

// Create an array with just company and  category
const companyInfo = companies2.map(company => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyInfo);

// Create an array of object with the name and  the length of each company in years
const companyYears = companies2.map(company => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squareAndDouble = numbers4
  .map(number => Math.sqrt(number))
  .map(sqrt => Math.floor(sqrt * 2));

console.log(squareAndDouble);

// Another version
const squareAndDouble2 = numbers4
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble2);

// Chaining different methods
const numbers5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenDouble = numbers5
  .filter(number => number % 2 === 0)
  .map(number => number * 2);

console.log(evenDouble);

// reduce method
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers6.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

const sum2 = numbers6.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

// Using a for loop
const sum3 = arr => {
  let acc = 0;
  for (const cur of arr) {
    acc += cur;
  }

  return acc;
};

console.log(sum3(numbers6));

// supping cart
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 220 },
  { id: 3, name: 'Product 3', price: 450 },
  { id: 4, name: 'Product 4', price: 175 },
];

const sumTotalPrice = cart.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price;
}, 0);

console.log(sumTotalPrice);
