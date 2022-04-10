const arr = [4, 5, 3, 6, 7, 1, 2, 9, 8];

const sortArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw Error("Invalid type of collection");
  }
  const arr1 = [];
  const arr2 = [];

  arr.forEach((item) => (!(item % 2) ? arr1 : arr2).push(item));

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);

  return arr1.concat(...arr2);
};

console.log(sortArray(arr));
