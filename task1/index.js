//А

const myMap = (collection, callback) => {
  const result = [];
  for (let item of collection) {
    result.push(callback(item));
  }
  return result;
};

const myFilter = (collection, callback) => {
  const result = [];
  for (let item of collection) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
};

const myReduce = (collection, callback, init) => {
  let acc = init;
  for (let item of collection) {
    acc = callback(acc, item);
  }
  return acc;
};

//Б

const notes = [
  {
    id: 1,
    title: "Recipe",
    description: "Ingredients include 2 eggs...",
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: "Workouts",
    description: "3 sets of squats...",
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: "Passwords",
    description: "VISA ...",
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: "To Do 2021",
    description: "1. Learn JS...",
    pagesCount: 3,
    isMarked: false,
    access: [],
  },
];

//1

const newNotes = myMap(notes, (item) => ({ id: item.id, title: item.title }));
console.log(newNotes);

//2

const filteredNotes = myFilter(notes, (item) => item.isMarked);
console.log(filteredNotes);

//3

const pagesTotalCount = myReduce(
  notes,
  (acc, item) => acc + item.pagesCount,
  0
);
console.log(pagesTotalCount);

//В

const testArray = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5];

const countNumbers = (obj, number) => {
  if (obj[number]) {
    obj[number] = obj[number] + 1;
  } else {
    obj[number] = 1;
  }
  return obj;
};

const getUnique = (arr) => {
  let numbersCount = arr.reduce(countNumbers, {});
  for (let key in numbersCount) {
    if (numbersCount[key] === 1) {
      return key;
    }
  }
};

const uniqueElement = getUnique(testArray);
console.log(uniqueElement);
