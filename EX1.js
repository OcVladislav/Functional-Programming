const sort = (array, param, direction) => {
  if (!["asc", "desc"].includes(direction)) {
    throw Error("Invalid direction");
  }
  if (!["age", "name"].includes(param)) {
    throw Error("Invalid obj key");
  }
  if (!Array.isArray(array)) {
    throw Error("Invalid collection type");
  }
  const arr = [...array];
  switch (param) {
    case "name": {
      arr.sort((a, b) => {
        if (direction === "asc" ? b.name < a.name : b.name > a.name) {
          return 1;
        } else if (b.name === a.name) {
          return 0;
        } else return -1;
      });
      break;
    }
    case "age": {
      arr.sort((a, b) => (direction === "asc" ? a.age - b.age : b.age - a.age));
      break;
    }
  }
  return arr;
};

const people = [
  { name: "Vladik", age: 18 },
  { name: "Alexandr", age: 2 },
  { name: "Vova", age: 5 },
  { name: "Alexei", age: 25 },
  { name: "Abdurozik", age: 25 },
];

const result = sort(people, "name", "asc");

console.log(result);
