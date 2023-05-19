const lodash = require("lodash");

const arr = [];
const obj = {
  a: 1,
  b: 2,
  c: {
    abc: 1,
  },
};

lodash.forEach(obj, (value, key) => {
  arr.push(value);
});

arr.map((a) => console.log(a));

lodash.map;

lodash.find;

lodash.filter;

lodash.forEach;

lodash.transform;

lodash.throttle;

lodash.debounce;

Object.assign;

Object.values;

Object.keys;
