import './styles.css'


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// Добавь функционал изменения темы при нажатии(событие change)
// на чекбокс #theme -switch-toggle в тулбаре.
const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', onThemeChange);

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент
// body класс light - theme или dark - theme.

function onThemeChange(event) {
  if (event.target === Theme.DARK) {
    bodyRef.classList.add((Theme.DARK));
  }
  bodyRef.classList.add((Theme.LIGHT));
 }


// Выбранная тема должна сохраняться между
// перезагрузками страницы.Для хранения темы используй localStorage.


// Если при загрузке страницы тема тёмная, не забудь поставить
// свойство checked у чекбокса #theme -switch-toggle в true,
// чтобы ползунок сдвинулся в правильное положение.



// Используя шаблонизатор Handlebars создай шаблон одного элемента меню.
// После чего, используя шаблон, создай разметку всего меню по данным
// из menu.json и добавь в DOM в ul.js - menu.

// Для иконок используется библиотека Material Icons, линк на веб - фонт
// уже есть в исходном HTML.

// Ниже указана разметка элемента меню которая должна получаться
// по шаблону(данные будут разные для каждого объекта).