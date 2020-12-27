"use strict";
let mySet = new Set([1, 2, 3]);
console.log(mySet.has(3));
console.log(mySet.has(4));
mySet.add(5);
mySet.add(8);
mySet.add(58);
mySet.add(93);
mySet.add(64);

for (const item of mySet) {
  console.log(item);
}
let sumOfElements = 0;
for (const item of mySet) {
  sumOfElements += item;
}
console.log("Сумма элементов множества = " + sumOfElements);
mySet.delete(2);
console.log(mySet);
mySet.clear();
console.log(mySet);
console.log(
  "------------------------------------------------------------------"
);

let myArray1 = ["user1", "user2", "user3", "user4"];
let myArray2 = [20, 18, 35, 42];
let myMap = new Map();
myMap.set("user1", 25);
myMap.set("user2", 55);
myMap.set("user3", 35);
myMap.set("user4", 45);
console.log(myMap);
for (let item of myMap.keys()) {
  console.log(item); 
}
for (let item of myMap.values()) {
  console.log(item); 
}

console.log(myMap.size); 
myMap.set("user5", 56);
console.log(myMap.size); 
myMap.delete("user5");
console.log(myMap.size); 
console.log(myMap.get("user2")); 
