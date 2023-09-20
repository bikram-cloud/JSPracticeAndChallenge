const post = {
  id: 1,
  title: 'Post One',
  body: 'This is a body',
  desc: 'Hello Post',
};

console.log(post);

const str = JSON.stringify(post);

console.log(str);

// Parse JSON
const par = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: 'Post One',
    body: 'This is body',
  },
  {
    id: 2,
    title: 'Post Two',
    body: 'This is body',
  },
];

const str2 = JSON.stringify(posts);

const par2 = JSON.parse(str2);

console.log(str2);

console.log(par2);

const library = [
  {
    title: 'Book',
    author: 'Bikram',
    sattus: {
      own: 'true',
      reading: 'false',
      read: 'false',
    },
  },
  {
    title: 'Fruit',
    author: 'Rojina',
    sattus: {
      own: 'true',
      reading: 'false',
      read: 'false',
    },
  },
  {
    title: 'Machine',
    author: 'Nepal',
    sattus: {
      own: 'true',
      reading: 'false',
      read: 'false',
    },
  },
];

// library[0].sattus.read = true;
// library[1].sattus.read = true;
// library[1].sattus.read = true;

// const readTrue = library.map(li => (li.sattus.read = true));

const { title: firstBook } = library[0];

console.log(firstBook);

const jsonStr = JSON.stringify(library);

console.log(jsonStr);
