// For Of loop
const items = ['Book', 'Table', 'Chair', 'kite'];
const users = [{ name: 'Bikram' }, { name: 'Rojina' }, { name: 'Hari' }];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello World';
for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'Bikram');
map.set('age', '28');

for (const [key, value] of map) {
  console.log(key, value);
}

// For In loop
const colorObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'white',
  color4: 'green',
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArray = ['red', 'green', 'blue', 'black'];

for (const key in colorArray) {
  console.log(key);
  console.log(colorArray[key]);
}
