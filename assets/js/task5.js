"use strict";

/*
String

charAt
Вывести 5-й символ в строке

IndexOf
- найти индекс первого пробела в строке
 
lastIndexOf
- найти индекс последнего пробела в строке

split
- вернуть массив слов предложения

substr
-вернуть первых 5 символов предложения

toUpperCase
-преобразовать строку в верхний ригистр
*/
/*
indexOf
найти индекс первого нулевого элемента
*/

let lengthOfUserArray = 10;
let userArray1 = new Array(lengthOfUserArray);
for (let i = 0; i < userArray1.length; i++) {
  userArray1[i] = parseInt(Math.random() * 10);
}

function FindFirstZeroElement(userArray) {
  return userArray.indexOf(0);
}

console.log("Для массива " + userArray1);
console.log(
  "Индекс первого нулевого элемента = " + FindFirstZeroElement(userArray1)
);
console.log(
  "------------------------------------------------------------------"
);

/*
concat 
слить три массива в один
*/
let userArray2 = new Array(lengthOfUserArray);
for (let i = 0; i < userArray2.length; i++) {
  userArray2[i] = parseInt(Math.random() * 10);
}

let userArray3 = new Array(lengthOfUserArray);
for (let i = 0; i < userArray3.length; i++) {
  userArray3[i] = parseInt(Math.random() * 10);
}
function ConcatOfThreeArrays(userArray1, userArray2, userArray3) {
  let concatArrays = userArray1.concat(userArray2).concat(userArray3);
  return concatArrays;
}
console.log("Склеенный массив из 3 массивов");
console.log(ConcatOfThreeArrays(userArray1, userArray2, userArray3));
console.log(
  "------------------------------------------------------------------"
);

/*
every
проверить содержит ли массив одни нули
*/
function IsZeroArray(userArray) {
  return userArray.every((element) => element == 0);
}
console.log(
  "Содержит ли массив " +
    userArray1 +
    " все нулевые элементы  " +
    IsZeroArray(userArray1)
);
console.log(
  "------------------------------------------------------------------"
);

/*
fill
- создать массив из 10 звездочек
*/
let userArrayStars = new Array(lengthOfUserArray);
userArrayStars.fill("*");
console.log("Массив звезд = " + userArrayStars);
console.log(
  "------------------------------------------------------------------"
);

/*
filter
- вернуть только строки из массива
*/

let userArrayVariousTypes = [56, "dff", 45, null, "jerheg"];
function FindStringsInArray(userArray) {
  return userArray.filter((element) => typeof element == "string");
}
console.log("Массив = " + userArrayVariousTypes);
console.log("содержит строки = " + FindStringsInArray(userArrayVariousTypes));
console.log(
  "------------------------------------------------------------------"
);

/*
find
- найти первое отрицательное число в массиве
*/

let userArrayWithNegativeNumbers = [56, -56, 0, -5, 34];
function FindFirstNegativeNumberInArray(userArray) {
  return userArray.find((element) => element < 0);
}
console.log(
  "Первый негативный элемент" +
    FindFirstNegativeNumberInArray(userArrayWithNegativeNumbers)
);
console.log(
  "------------------------------------------------------------------"
);

/*
forEach
умножить каждый элемент массива на 2
*/
function MultiplyFor2ElementsOfArray(userArray) {
  let i = 0;
  userArray.forEach((element) => {
    userArray[i] = element *= 2;
    i++;
  });
  return userArray;
}

console.log("Для массива " + userArray1);
console.log("Удвоенные значения " + MultiplyFor2ElementsOfArray(userArray1));
console.log(
  "------------------------------------------------------------------"
);
/*
includes
- содержит ли массив отрицательное число
*/

function HasNegativeNumberInArray(userArray, number) {
  return userArray.includes(number);
}
console.log(
  "Содержит ли массив " +
    userArrayWithNegativeNumbers +
    " число -5  " +
    HasNegativeNumberInArray(userArrayWithNegativeNumbers, -5)
);
console.log(
  "------------------------------------------------------------------"
);

/*
some
есть ли в массиве отрицательное число
*/

function HasNegativeNumbersInArray(userArray) {
  return userArray.some((elem) => elem < 0);
}
console.log(
  "Содержит ли массив " +
    userArrayWithNegativeNumbers +
    " отрицательные числа   " +
    HasNegativeNumbersInArray(userArrayWithNegativeNumbers)
);
console.log(
  "------------------------------------------------------------------"
);
/*
join
- преобразовать массив в строку по шаблону "1 and 2 and 3 and 4 and 5"
*/
function PatternInArray(userArray) {
  return userArray.join(" and ");
}
console.log("Массив = " + userArray1);

console.log("После преобразования = " + PatternInArray(userArray1));
console.log(
  "------------------------------------------------------------------"
);
/*
reverse
развернуть массив обратно
*/

function ReverseArray(userArray) {
  return userArray.reverse();
}
console.log("Массив = " + userArray1);

console.log("Элементы в обратном порядке = " + ReverseArray(userArray1));
console.log(
  "------------------------------------------------------------------"
);

/*
sort
- сортировка в порядке убывания
*/

function SortReverseOrderArray(userArray) {
  return userArray.sort((a, b) => b - a);
}
console.log("Массив = " + userArray1);

console.log(
  "Элементы отсортированые порядке убывания = " +
    SortReverseOrderArray(userArray1)
);
console.log(
  "------------------------------------------------------------------"
);

/*
splice
- удалить 3 элемент массива
- удалить 3 элемент массива и вставить новый элемент после него
- удалить с 3 по 5 элементы массива
- удалить первые 3 элемента
- удалить последние 3 элемента
*/
console.log("Массив = " + (userArray2 = userArray2.concat(userArray3)));
userArray2.splice(2, 1);
console.log("Массив c удаленным 3 элементом = " + userArray2);
userArray2.splice(2, 1, 1000);
console.log(
  "Массив c удаленным 3 элементом и вставленный элемент 1000 = " + userArray2
);
userArray2.splice(2, 3);
console.log("Массив c удаленным 3,4,5 элементом = " + userArray2);
userArray2.splice(0, 3);
console.log("Массив c удаленным 1,2,3 элементом = " + userArray2);
userArray2.splice(-3, 3);
console.log("Массив c удаленным 1,2,3 элементом с конца = " + userArray2);
console.log(
  "------------------------------------------------------------------"
);
/*
slice
- вернуть фрагмент массива от N1 до N2
*/

let n1 = 2;
let n2 = 5;
function SliceOfArray(userArray, n1, n2) {
  let modArr = [];
  modArr = userArray.slice(n1-1, n2);
  return modArr;
}
console.log("Массив = " + userArray3);

console.log(
  "Срез элементов с " + n1 + " по " + n2 + " = " + SliceOfArray(userArray3, n1, n2)
);
console.log(
  "------------------------------------------------------------------"
);
