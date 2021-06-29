import './styles.css';
import menu from './menu.json';
import makeMenu from './template.hbs';

const menuNode = document.querySelector('.js-menu');
const newMenu = makeMenu(menu);
menuNode.insertAdjacentHTML('beforeend', newMenu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', onThemeChange);
uploadThemeSelected();

function onThemeChange(event) {
  let thema = LIGHT;
  
  if (event.target.checked) {
    thema = DARK;
  }
  document.body.classList = thema;
  localStorage.setItem('dark', event.target.checked);
};

function uploadThemeSelected() {
  const dataStorage = localStorage.getItem('dark');
  const thema = JSON.parse(dataStorage) ? DARK : LIGHT;
  document.body.classList.add(thema);
  checkboxRef.checked = thema === DARK;
};

/*==========MY FIRST TRY BEFORE OPTIMIZATION===========*/

// function onThemeChange(event) {
//   if (event.target.checked) {
//     document.body.classList.toggle(Theme.DARK);
//     localStorage.setItem('dark', true);
//   }
//   else {
//     document.body.classList.remove(Theme.DARK);
//     localStorage.setItem('dark', false);
//   }
// }

// function uploadThemeSelected(event) {
//   const dataStorage = localStorage.getItem(('dark'));

//   if (dataStorage === 'true') {
//     document.body.classList.add(Theme.DARK);
//     checkboxRef.checked = true;
//   }
//   else {
//     document.body.classList.remove(Theme.DARK);
//     document.body.classList.add(Theme.LIGHT);
//     checkboxRef.checked = false;
//   }
// }

