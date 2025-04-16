// 1. Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = prompt("Введіть число");
// if (Number(number) === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// console.log("number: ", number);

//2. У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// function checkNumber(min) {
//   let quater;
//   if (min >= 0 && min < 15) {
//     quater = "першу";
//   } else if (min >= 15 && min < 30) {
//     quater = "другу";
//   } else if (min >= 30 && min <= 45) {
//     quater = "третю";
//   } else if (min >= 45 && min <= 59) {
//     quater = "четверту";
//   } else {
//     quater = "неправильне число";
//   }
//   return `${min} входить в ${quater} чверть`;
// }
// console.log(checkNumber(10));
// console.log(checkNumber(25));
// console.log(checkNumber(44));
// console.log(checkNumber(50));

// 3. Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// function season(prompt) {
//   switch (prompt) {
//     case 4:
//       return "Осінь";
//     case 3:
//       return "Літо";
//     case 2:
//       return "Весна";
//     case 1:
//       return "Зима";
//     default:
//       return "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//   }
// }

// console.log(season(1));
// console.log(season(3));
// console.log(season(4));
// console.log(season(2));
// console.log(season(5));

// 4.Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function check(min) {
//   let hours = Math.floor(min / 60);
//   let remainingMinutes = min % 60;
//   let formattedHours = String(hours).padStart(2, "0");
//   let formattedMinutes = String(remainingMinutes).padStart(2, "0");
//   return `${formattedHours}:${formattedMinutes}`;
// }
// let userMinutes = parseInt(prompt("Введіть кількість хвилин:"));
// console.log(check(userMinutes));

// 5.Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

// 6.Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let number = 0;
//   for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       number += i;
//     }
//   }
//   return number;
// }
// console.log(getNumbers(2, 10));
// console.log(getNumbers(1, 20));
// console.log(getNumbers(3, 15));

// 7.Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// let num = 0;
// while (num <= 20) {
//   console.log(`${num}`);
//   num += 1;
// }

// 8.Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a > b ? b : a;
// }

// console.log(min(3, 7));
// console.log(min(5, 2));

// 9.Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Ви впевнені, що вам є 18?");
//   }
// }

// console.log(isAdult(18));
// console.log(isAdult(12));
// console.log(isAdult(30));

// 10.Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num) {
//   if (num === 0) {
//     return `Invalid input`;
//   } else if (num % 3 === 0 && num % 5 === 0) {
//     return `fizzbuzz`;
//   } else if (num % 3 === 0) {
//     return `fizz`;
//   } else if (num % 5 === 0) {
//     return `buzz`;
//   } else {
//     return num;
//   }
// }

// console.log(fizzBuzz(9));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
