"use strict";
/*let test;
test = 100;
let copyTest;
copyTest = test;
console.log(test);
console.log(typeof test);
console.log(copyTest);
console.log(typeof copyTest);
console.log(
  "------------------------------------------------------------------"
);

let userData;
userData = prompt("Введите число", 50);
if (!isNaN(userData)) {
  console.log("Введено число");
} else {
  console.log("Введено не числовое значение, а " + typeof userData);
}
console.log(
  "------------------------------------------------------------------"
);

let step = 0.5;
let limit1 = -2;
let limit2 = 2;
function CalculateExpression(limit1, limit2, step) {
  let x;
  let y = [];
  for (x = limit1; x <= limit2; x += step) {
    y.push((-2.4 * x * x + 5 * x - 3).toFixed(2));
  }
  return y;
}
console.log("Значения функции: ");
for (const item of CalculateExpression(limit1, limit2, step)) {
  console.log(item);
}

console.log(
  "------------------------------------------------------------------"
);
console.log(null + 1 == 1);
console.log(undefined + 1 == NaN);
console.log(null == "0");
console.log(undefined == null);
let a = 3,
  b = 1,
  c = 8,
  d = 5;
console.log(a && b && c && d);
console.log(a || b || c || d);

console.log(
  "------------------------------------------------------------------"
);
let quantityOfAtars = 5;
let stringOfStars;
for (let i = 1; i <= quantityOfAtars; i++) {
  stringOfStars = "";
  for (let j = 1; j <= i; j++) {
    stringOfStars += "*";
  }
  console.log(stringOfStars);
}

console.log(
  "------------------------------------------------------------------"
);
*/
let number1 = parseInt(Math.random() * 10);
let number2 = parseInt(Math.random() * 10);
let userAnswer;
userAnswer = parseInt(prompt(`Сколько будет ${number1} + ${number2} ? `));
if (userAnswer == number1 + number2) {
  alert("Правильный ответ!");
} else {
  alert("Неправильный ответ!");
  alert("Правильный ответ = " + (number1 + number2));
}
console.log(
  "------------------------------------------------------------------"
);

userAnswer = parseInt(prompt("Введите номер месяца", 1));

switch (userAnswer) {
  case 12:
  case 1:
  case 2:
    alert("Зима");
    break;
  case 3:
  case 4:
  case 5:
    alert("Весна");
    break;
  case 6:
  case 7:
  case 8:
    alert("Лето");
    break;
  case 9:
  case 10:
  case 11:
    alert("Осень");
    break;
  default:
    alert("Неправильный номер месяца");
    break;
}
console.log(
  "------------------------------------------------------------------"
);

userAnswer = prompt("Введите число", 1646);
let proverka = Number(userAnswer);
let arrayOfNumbers = [];
if (!isNaN(proverka)) {
  let flag = false;
  console.log("Цифры введенного числа:");
  for (const item of userAnswer) {
    if (item == ".") {
      flag = true;
      continue;
    }
    console.log(item);
    arrayOfNumbers.push(+item);
  }
  console.log("Количество цифр введенного числа:");
  if (flag) {
    console.log(userAnswer.length - 1);
  } else {
    console.log(userAnswer.length);
  }
  console.log("Числа в обратном порядке:");
  for (const item of arrayOfNumbers.reverse()) {
  console.log(item);}
} else {
  console.log("Введенное значение не является числом");
}
