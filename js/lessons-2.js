// 1. Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ["jazz", "blues"];
// styles.push("rock-n-roll");
// styles[styles.indexOf("blues")] = "classic";
// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} - ${array[i]}`);
//   }
// }
// logItems(styles);

// 2. Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Enter your name:");
//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert("User not found");
//   }
//   return array.includes(name);
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];
// console.log(checkLogin(logins));

// 3. Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// // Додайте перевірку, що аргументи - це числа.

// function caclculateAverage() {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] === "number") {
//       sum += arguments[i];
//       count++;
//     }
//   }
//   return count === 0 ? 0 : sum / count;
// }

// console.log(caclculateAverage(1, 2, 3, 4, 5));
// console.log(caclculateAverage("1", 3, "3", 4, 7));

// 4.  Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function sumNumbers(arr) {
//   const result = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     result.push(arr[i] + arr[i + 1]);
//   }
//   return result;
// }
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// console.log(sumNumbers(someArr));

// 5. Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return "Sory, it is not an array!";
//   }
//   let smalLest = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smalLest) {
//       smalLest = numbers[i];
//     }
//   }
//   return smalLest;
// }
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// console.log(findSmallestNumber(numbers));

// // 7.
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user["hobby"] = "skydiving";
// user["premium"] = false;
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

// //  8.
// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// if (Object.keys(salaries).length === 0) {
//   console.log("No salaries found");
// }
// // console.log(sum);
