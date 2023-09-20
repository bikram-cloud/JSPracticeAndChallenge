// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.
function objectsHaveEquivalentValues(obj1, obj2) {
  const key1 = Object.keys(obj1);

  console.log(key1);

  if (key1.length !== Object.keys(obj2).length)
    return 'Object length is not same';

  for (const key of key1) {
    if (!obj2.hasOwnProperty(key)) return 'Object key property is not same';

    if (obj1[key] !== obj2[key]) return false;
    console.log(obj1[key]);
    console.log(obj2[key]);
  }

  return true;
}

console.log(
  objectsHaveEquivalentValues(
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Alice', age: 30, city: 'New York' }
  )
);
console.log(
  objectsHaveEquivalentValues(
    { name: 'Alice', age: 30, city: 'New York' },
    { country: 'Alice', age: 30, city: 'New York' }
  )
);

console.log(
  objectsHaveEquivalentValues(
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Alice', age: 30, city: 'New York', study: 'Master' }
  )
);

// Another way solved
const matches = (obj, soure) => {
  return Object.keys(soure).every(
    key => obj.hasOwnProperty(key) && obj[key] === soure[key]
  );
};

console.log(
  matches(
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Alice', age: 30, city: 'New York', study: 'Master' }
  )
);

console.log(
  matches(
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Alice', age: 30, city: 'New York' }
  )
);

// 2. Write a JavaScript program to copy a string to the clipboard.
// const copyToClipBoard = str => {
//   const el = document.createElement('textarea');
//   el.value = str;
//   el.setAttribute('readonly', '');
//   el.style.position = 'absolute';
//   el.style.left = '-9999px';
//   document.body.append(el);

//   const selected =
//     document.getSelection().rangeCount > 0
//       ? document.getSelection().getRangeAt(0)
//       : false;
//   el.select();
//   document.execCommand('copy');
//   document.body.removeChild(el);
//   if (selected) {
//     document.getSelection().removeAllRanges();
//     document.getSelection().addRange(selected);
//   }
// };

// console.log(copyToClipBoard('Hello'));

// 3. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.
function csvToArray(str) {
  const rows = str.split('\n');

  console.log(rows);

  const result = [];

  for (const row of rows) {
    console.log(row);
    const values = row.split(',');
    console.log(values);

    result.push(values);
  }

  return result;
}

console.log(csvToArray('Bikram,Neupane,30\nJane,Hello\nNepal'));

// Another way
const csv_To_Array = data => {
  const delimiter = ',';
  const omitFirstRow = false;

  return data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
};

console.log(csv_To_Array('Bikram,Neupane,30\nJane,Hello\nNepal'));
console.log(csv_To_Array('Bikram,Neupane'));

// Generator functions
function* genrator(i) {
  yield i;
  yield i * 2;
}

const gen = genrator(10);
console.log(gen.next().value);
console.log(gen.next().value);

// 4. Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array of objects. The first row of the string is used as the title row.
function csvArrayOFObject(csvString) {
  const rows = csvString.split('\n');

  console.log(rows);

  const headers = rows[0].split(',');

  console.log(headers);

  const result = [];

  for (let i = 1; i < rows.length; i++) {
    const values = rows[i].split(',');
    console.log(values);

    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j];
    }

    result.push(obj);
  }

  return result;
}

console.log(csvArrayOFObject('Name,Age,Location\nJohn,30,New York'));
console.log(
  csvArrayOFObject(
    'Name,Age,Location\nJohn,30,New York\nJane,25,Los Angeles\nBob,40,Chicago'
  )
);

// Another way
const csvToJSON = data => {
  const titles = data.slice(0, data.indexOf('\n')).split(',');
  console.log(titles);

  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(',');
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};

console.log(
  csvToJSON(
    'Name,Age,Location\nJohn,30,New York\nJane,25,Los Angeles\nBob,40,Chicago'
  )
);

// 5. Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.
function objectsToCsv(obj, col) {
  if (obj.length === 0) return '';

  const headerRos = col.join(',') + '\n';

  const csvRows = [headerRos];

  for (const ob of obj) {
    const rowData = [];

    for (const co of col) {
      if (ob.hasOwnProperty(co)) {
        rowData.push(ob[co]);
      } else {
        rowData.push('');
      }
    }

    csvRows.push(rowData.join(','));
  }

  return csvRows.join('\n');
}

console.log(
  objectsToCsv(
    [
      { name: 'John', age: 30, city: 'New York' },
      { name: 'Jane', age: 25, city: 'Los Angeles' },
      { name: 'Bob', age: 40, city: 'Chicago' },
    ],
    ['name', 'age']
  )
);

console.log(
  objectsToCsv([{ name: 'Bob', age: 40, city: 'Chicago' }], ['city', 'age'])
);

// Another way
const json_to_csv = (arr, columns) => {
  return [
    columns.join(','),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? '' : ','}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    ),
  ].join('\n');
};

console.log(json_to_csv([{ x: 100, y: 200 }], ['x', 'y']));
console.log(json_to_csv([{ x: 100, y: 200 }], ['a', 'c']));

const person = {
  name: 'Bikram',
  age: 28,
};

for (const item in person) {
  console.log(item);
}

const val = [1, 2, 3, 4];

for (const item of val) {
  console.log(item);
}

// 6. Write a JavaScript program to target a given value in a nested JSON object based on the given key.
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);

const data = {
  lavel1: {
    lavel2: {
      lavel3: 'Some Data',
    },
  },
};

const dog = {
  status: 'success',
  message: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg',
};

console.log(dig(data, 'lavel3'));
console.log(dig(data, 'lavel4'));
console.log(dig(data, 'message'));

// const numbers = [1, 2, 3, 4, 5];

// function printAnElement(index) {
//   console.log(numbers[index]);

//   printAnElement(3);
// }

// printAnElement(0);

// Another way solve problem
const data1 = {
  id: 1,
  name: 'Bikram',
  details: {
    age: 30,
    address: {
      street: '3-1-1 Hirao',
      city: 'Inagi',
    },
  },
};

const data2 = {
  status: 'Sucess',
  message: 'www.facebook.com',
};

function findValueByKey(obj, targetKey) {
  for (const key in obj) {
    if (key === targetKey) {
      console.log(obj[key]);
      return obj[key];
    } else if (typeof obj[key] === 'object') {
      const result = findValueByKey(obj[key], targetKey);
      if (result !== undefined) return result;
    }
  }

  return undefined;
}

console.log(findValueByKey(data1, 'details'));
console.log(findValueByKey(data1, 'city'));
console.log(findValueByKey(data1, 'cit'));
console.log(findValueByKey(data2, 'message'));
console.log(findValueByKey(data2, 'status'));

// 7. Write a JavaScript program to convert a specified number into an array of digits.
function numberToArray(num) {
  return num
    .toString()
    .split('')
    .map(i => parseInt(i));
}

console.log(numberToArray(1234));

// const numberToArray1 = n => [...`${n}`].map(Number);
const numberToArray1 = n => [...`${n}`].map(i => parseInt(i));

console.log(numberToArray1(1234));

// 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.
function filterArray(arr, valuesToFilter) {
  return arr.filter(el => !valuesToFilter.includes(el));
}

console.log(filterArray([1, 2, 3, 4, 5], [2, 4]));

// Another way solved
const pull = (arr, ...args) => {
  const argState = Array.isArray(args[0]) ? args[0] : args;

  console.log(args);

  const pulled = arr.filter(v => !argState.includes(v));

  // pulled.forEach(v => arr.push(v));

  return pulled;
};

console.log(pull([1, 2, 3, 4, 5], 2, 4));
console.log(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c'));

// Reducer Method
const arr = [15, 16, 17, 18, 19];

function reducer(acc, curr, index) {
  const returns = acc + curr;
  console.log(`Accumulator: ${acc}, currentValue: ${curr}, index: ${index}`);
  return returns;
}

arr.reduce(reducer, 0);

// 9. Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
function getAllCombinations(arr) {
  const result = [];

  function generateCombinations(curCombin, start) {
    for (let i = start; i < arr.length; i++) {
      curCombin.push(arr[i]);
      console.log(curCombin);
      result.push([...curCombin]);
      generateCombinations(curCombin, i + 1);
      curCombin.pop();
    }
  }

  generateCombinations([], 0);
  return result;
}

console.log(getAllCombinations([1, 2, 3]));

// Another way solve
const powerSet = arr =>
  arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

console.log(powerSet([1, 2]));

[1, 2, 3, 4].map(num => {
  if (typeof num === 'number') return;
  return num * 2;
});

// 10. Write a JavaScript program to extract values at specified indexes from a specified array.
function extractValuesAtIndexes(arr, indexes) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const index = indexes[i];

    console.log(index);

    if (index >= 0 && index < arr.length) {
      result.push(arr[index]);
    } else {
      result.push(undefined);
    }
  }

  return result;
}

console.log(extractValuesAtIndexes([10, 20, 30], [0, 2]));

// Another way
const pullAtIndex = (arr, index) => {
  const result = [];

  const pulled = arr.map((v, i) => (index.includes(i) ? result.push(v) : v));
  // return arr.filter((v, i) => index.includes(i));

  return result;
};

console.log(pullAtIndex(['a', 'b', 'c', 'd'], [0, 2, 10]));

// 11. Write a JavaScript program to generate a random hexadecimal color code.
function generateRandomHexColor() {
  // Generate random values for R, G, and B components
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert the RGB values to hexadecimal format
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = r.toString(16).padStart(2, '0');
  const hexB = r.toString(16).padStart(2, '0');

  // Concatenate the components to create the color code
  return `#${hexR}${hexG}${hexB}`;
}

console.log(generateRandomHexColor());

// Another Solved
const randomHexColor = () => {
  const n = Math.floor(Math.random() * 0xfffff * 1000000).toString(16);

  return `#${n.slice(0, 6)}`;
};

console.log(randomHexColor());

// 12. Write a JavaScript program to remove non-printable ASCII characters from a given string.
function removeNonPrintableChars(str) {
  const nonPrintalbeRegx = /[\x00-\x1F\x7F-\x9F]/g;

  const cleanedStr = str.replace(nonPrintalbeRegx, '');

  return cleanedStr;
}

console.log(removeNonPrintableChars('Hello\x03\x04 World\x0F!'));

// Another way solve

const removeNonAscii = str => str.replace(/[^\x20-\x7E]/g, '');

console.log(removeNonAscii('Hello\x03\x04 World\x0F!'));

function getInfo(member, year) {
  member.name = 'Bikram';
  year = '1995';
}

const person1 = {
  name: 'Neupane',
};

const birthYear = '1999';

console.log(getInfo(person1, birthYear));

console.log(person1, birthYear);

// 13. Write a JavaScript program to convert a given string's length to bytes.
function stringLengthInBytes(str) {
  const encoder = new TextEncoder('utf-8');

  console.log(encoder);

  const encodedData = encoder.encode(str);

  console.log(encodedData);

  return encodedData.length;
}

console.log(stringLengthInBytes('Hello world'));

// Another way solve
// const bytesSize = str => new Blob([str]).size;

// console.log(bytesSize('Hello world'));

// 14. Write a JavaScript program to replace multiple object keys' names with the values provided.
function replaceObjectKeys(obj, keyRep) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = keyRep[key] || key;

      console.log(newKey);

      result[newKey] = obj[key];
    }
  }

  return result;
}

const originalObje = {
  name: 'Bikram',
  age: 29,
  city: 'Tokyo',
};

const replaceKey = {
  name: 'fullName',
  age: 'years',
};

console.log(replaceObjectKeys(originalObje, replaceKey));

// Another way solve
const renameKeys = (obj, keyVal) => {
  return Object.keys(obj).reduce(
    (acc, key) => ({ ...acc, ...{ [keyVal[key] || key]: obj[key] } }),
    {}
  );
};

const obj3 = {
  name: 'Neupane',
  job: 'Programmer',
  shoeSize: 100,
};

const obj4 = {
  name: 'firstName',
  job: 'Actor',
};

console.log(renameKeys(obj3, obj4));
