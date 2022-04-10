//map

array = [1, 2, 3, 4, 5];

Array.prototype.customMap = function (func) {
  return this.reduce((acc, ...args) => {
    acc.push(func(args[0]));
    return acc;
  }, []);
};

console.log(array.customMap((item) => item));

//filter

Array.prototype.customFilter = function (func) {
  return this.reduce((acc, ...arg) => {
    func(...arg) && acc.push(arg[0]);
    return acc;
  }, []);
};

console.log(array.customFilter((el) => el > 1));

//every

Array.prototype.customEvery = function (func) {
  return this.reduce((flag, ...args) => {
    if (func(args[0]) === false) {
      flag = false;
    }
    return flag;
  }, true);
};

console.log(array.customEvery((el) => el > 2));

//some

Array.prototype.customSome = function (func) {
  return this.reduce((flag, ...args) => {
    if (func(args[0]) === true) {
      flag = true;
    }
    return flag;
  }, false);
};

console.log(array.customSome((el) => el > 4));

//find

let users = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 3, name: "Маша" },
];

Array.prototype.customFind = function (func) {
  return this.reduce((el, ...args) => {
    if (func(args[0]) === true) {
      el = args[0];
    }
    return el;
  }, undefined);
};

console.log(users.customFind((item) => item.id === 3));

//indexOf

Array.prototype.customindexOf = function (el) {
  return this.reduce((acc, ...args) => {
    if (args[0] === el && acc === -1) {
      acc = args[1];
    }
    return acc;
  }, -1);
};

console.log(array.customindexOf(5));
