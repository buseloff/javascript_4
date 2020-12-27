"use strict";
const objectTest = {
  prop1: "value1",
  prop2: "value2",
  outThis: function () {
    console.log(this);
  },
};

objectTest.outThis();
console.log(objectTest);

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.sayHi = function () {
    return `Hi, my name is ${this.name}`;
  };
}

const user1 = new Person("Ivan", "Ivanov", 20);
const user2 = new Person("Vasya", "Petrov", 29);
console.log(user1);
console.log(user2);
console.log(user1.sayHi());
console.log(user2.sayHi());
function Employee(name, surname, age, salary) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.salary = salary;
}

Employee.prototype = new Person();
const employee1 = new Employee("Peter", "Ivanov", 54, 15000);
console.log(employee1);
console.log(employee1.sayHi());
console.log(
  "------------------------------------------------------------------"
);

function MyArray() {
  this.length = 0;
}

MyArray.prototype = {
  push(value) {
    this[this.length++] = value;
  },
};

const arr2 = new MyArray();
arr2.push(3);
console.log(arr2);
