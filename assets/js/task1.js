"use strict";

console.log(
  "------------------------------------------------------------------------"
);
let set1 = new Set();
set1.add(5);
set1.add(4);
set1.add(52);
set1.add(40);
console.log(set1);
let set2 = set1;
set1.add(45);
console.log(set2);
let a = [1, 2, 2, 6, 2, 5, 9, 9, 89, 9];
let setA = new Set(a);
for (const item of setA) {
  console.log(item);
}
console.log(setA);
console.log(setA.size);
console.log(setA.has(2));
let mySet = new Set();
mySet.add({ a: 1, b: 2 });
console.log(mySet);
console.log(
  "------------------------------------------------------------------------"
);

let recipeMap = new Map([
  ["огурец", 500],
  ["помидор", 350],
  ["лук", 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}
