let x;

const person = {
  name: 'Neupane Bikram',
  fName: 'Neupane',
  lName: 'Bikram',
  age: 30,
  isAdmin: true,
  address: {
    street: '123',
    city: 'Inagi',
    state: 'Tokyo',
  },
  hobbies: ['music', 'sports'],
  greet: function () {
    // return this.fName + ' ' + this.lName;
    return `${this.fName} ${this.lName}`;
  },
};

console.log(person);

x = person.name;
x = person['age'];
x = person['address']['city'];

person.isAdmin = false;

delete person.age;

x = person.greet();

console.log(x);

let b;

console.log(b);

// const todo = {};

const todo = new Object();

todo.id = 'Hello';
todo.name = 'World';

b = todo;

const person1 = {
  address: {
    coords: {
      lat: 42.98,
      lng: -71.32222,
    },
  },
};

b = person1.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };

const obj4 = { ...obj1, ...obj2 };

const obj5 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Buy Fruit' },
];

b = todos[0].id;

b = Object.keys(todo);

b = Object.values(todo);

b = Object.entries(todo);

b = todo.hasOwnProperty('name');

console.log(b);

const firstName = 'Bikram';
const lastName = 'Neupane';
const age = 28;

const person2 = {
  firstName,
  lastName,
  age,
};

console.log(person2['age']);

// Destructuring
const todo1 = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'Bikram',
  },
};

// const id = todo1.id;

const {
  id: todoId,
  title,
  user: { name },
} = todo1;

console.log(todoId, title, name);

const obj10 = {
  id: 10,
  address: {
    city: 'Ktm',
    country: 'Nepal',
    zone: 'Gandaki',
  },
  isAdmin: true,
};

const objID = obj10.id;

const {
  id: ids,
  address: { city: village, zone },
  isAdmin,
} = obj10;

console.log(ids, village, zone);

// Destructers arrays
const numbers = [23, 25, 27, 31, 39, 60];

const [first, second, ...nums] = numbers;

console.log(first, second, nums);
