// 1.
// 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector('body');
// console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector('#title');
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector('.list');
// console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const dataTopic = document.querySelectorAll('[data-topic]');
// console.log(dataTopic);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstElDataTopic = document.querySelectorAll('[data-topic');
// console.log(firstElDataTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const lastElDataTopic = firstElDataTopic[firstElDataTopic.length - 1];
// console.log(lastElDataTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const h1El = document.querySelector('h1');
// const nextSibling = h1El.nextElementSibling;
// console.log(nextSibling);
// const prevSibling = h1El.previousElementSibling;
// console.log(prevSibling);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3Elements = document.querySelectorAll('h3');
// console.log(h3Elements);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const h3El = document.querySelectorAll('h3');
// h3El.forEach(h3 => h3.classList.add('active'));
// console.log(h3El);

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liTopic = document.querySelector('li[data-topic = navigation]');
// console.log(liTopic);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// const dataNavig = document.querySelector('[data-topic="navigation"]');
// if (dataNavig) {
//   dataNavig.style.backgroundColor = 'yellow';
// }
// console.log(dataNavig);

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const dataNavigation = document.querySelector('[data-topic="navigation"]');
// console.log(dataNavigation);
// const dataNavPar = dataNavigation.querySelector('p');
// console.log(dataNavPar);
// console.log(dataNavPar.textContent);
// console.log((dataNavPar.textContent = 'Я змінив тут текст!'));

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = 'manipulation';
// const currentTopicData = document.querySelector('[data-topic="manipulation"]');
// const currentTopicData2 = document.querySelector(
//   '[data-topic="${currentTopic}"]'
// );
// console.log(currentTopicData);
// console.log(currentTopicData.dataset.topic);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// const blueColor = document.querySelector('[data-topic="search"]');
// console.log((blueColor.style.backgroundColor = 'blue'));

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedEl = document.querySelector('.completed');
// console.log(completedEl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// const allLi = document.querySelectorAll('li');
// console.log(allLi);
// console.log(completedEl.parentElement);
// const remEl = completedEl.parentElement.remove();
// console.log(remEl);
// const elem = remEl.closest(".container");
// console.log(elem);

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const elementTitle = document.querySelector('#title');
// console.log(elementTitle);
// const paragraf = document.createElement('p');
// paragraf.textContent = "Об'єктна модель документа (Document Object Model)";
// console.log(paragraf);
// // elementTitle.append(paragraf);
// const str = "<p>Об'єктна модель документа (Document Object Model)</p>";
// elementTitle.insertAdjacentHTML('afterend', str);
// const container = document.querySelector('.container');
// console.log(container);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку

// const elementList = document.querySelector('.list');
// console.log(elementList);
// const elementLi = document.createElement('li');
// console.log(elementLi);

// const elementH3 = document.createElement('h3');
// elementH3.textContent = `Властивість innerHTML`;
// console.log(elementH3);
// const paragrafH3 = document.createElement('p');
// paragrafH3.textContent = `Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу`;
// console.log(paragrafH3);
// elementLi.append(elementH3, paragrafH3);
// elementList.append(elementLi);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()

// elementList.insertAdjacentHTML(
//   'beforeend',
//   `<li>
//     <h3> Властивість innerHTML</h3>
//     <p>
//       Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
//       використовувати рядки з тегами і дозволити браузеру зробити всю важку
//       роботу
//     </p>
//   </li>`
// );

// 20 - очисти список
// const elementListDel = document.querySelector('.list');
// console.log(elementListDel);
// elementListDel.remove('li');
// console.log(elementListDel);

// 2.
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// const numberContainer = document.querySelector('.number-container');
// console.log(numberContainer);
// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// for (let block = 0; block < 100; block++) {
//   const blockNumber = document.createElement('div');
//   blockNumber.classList.add('number');
//   const number = randomNumber();
//   blockNumber.textContent = number;

//   if (number % 2 === 0) {
//     blockNumber.style.backgroundColor = 'green';
//     blockNumber.classList.add('even');
//   } else {
//     blockNumber.style.backgroundColor = 'yellow';
//     blockNumber.classList.add('odd');
//   }

//   numberContainer.append(blockNumber);
// }

// console.log(numberContainer);

// 3.
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// const form = document.querySelector('.js-contact-form');
// // console.log(form);
// const input = document.querySelector('.js-username-input');
// // console.log(input);

// form.addEventListener('input', handleInput);
// function handleInput(event) {
//   const lengthInput = input.value.length;
//   if (lengthInput > 6) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.add('error');
//     input.classList.remove('success');
//   }
//   span.textContent = event.target.value.trim() || 'Anonymous';
//   return;
// }

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`
// const form = document.querySelector('.js-contact-form');
// // console.log(form);
// const input = document.querySelector('.js-username-input');
// console.log(input);
// input.addEventListener('focus', handleFocus);
// function handleFocus(event) {
//   if (input.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// }

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// input.addEventListener('blur', handleBlur);
// function handleBlur(event) {
//   if (!event.target.value) {
//     event.target.style.outline = '3px solid red';
//   } else {
//     event.target.style.outline = '3px solid lime';
//   }
//   return;
// }
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const checkBox = document.querySelector('.js-policy-checkbox');
// const span = document.querySelector('.js-username-output');

// form.addEventListener('submit', handleSubmit);
// function handleSubmit(event) {
//   event.preventDefault();
//   if (!input.value || !checkBox.checked) {
//     alert(`Please fill in all the fields!`);
//     return;
//   }
//   const inputValue = event.target.elements.userName.value.trim();
//   const checkboxValue = event.target.elements.accept.checked;
//   const userName = { inputValue, checkboxValue };
//   console.log(userName);
//   form.reset();
//   span.textContent = 'Anonymous';
// }

// 4.
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

// const box = document.querySelector('.box');
// const decreaseBtn = document.querySelector('#decrease');
// const increaseBtn = document.querySelector('#increase');

// let size = parseInt(window.getComputedStyle(box).width, 10);

// decreaseBtn.addEventListener('click', () => {
//   size = Math.max(20, size - 20);
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// });

// increaseBtn.addEventListener('click', () => {
//   size += 20;
//   box.style.width = `${size}px`;
//   box.style.height = `${size}px`;
// });

// console.log(box);
// console.log(decreaseBtn);
// console.log(increaseBtn);
