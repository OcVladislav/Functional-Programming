a = {
  name: "Vitea",
  c: {
    teacher: null,
    director: [2, 34, 5],
    y: {
      e: () => {
        let j = 0;
      },
    },
  },
};

let deepCopy = (obj) => {
  if (obj === null) return obj;
  let clone = { ...obj };
  for (let key in clone) {
    typeof obj[key] === "object"
      ? (clone[key] = deepCopy(obj[key]))
      : (clone[key] = obj[key]);
  }
  if (Array.isArray(obj)) {
    return Object.values(obj);
  }
  return clone;
};

f = deepCopy(a);

f.c.director = [1, 6, 435, 32, 4324];
f.c.y.e = "hello";

console.log(f);
console.log(a);
