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

const checkboxRef = document.querySelector('#theme-switch-toggle');
checkboxRef.addEventListener('change', onThemeChange);
uploadThemeSelected();

function onThemeChange(event) {
  if (event.target.checked) {
    document.body.classList.toggle(Theme.DARK);
    localStorage.setItem('dark', true);
  }
  else {
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('dark', false);
  }
}

function uploadThemeSelected(event) {
  const dataStorage = localStorage.getItem(('dark'));

  if (dataStorage === 'true') {
    document.body.classList.add(Theme.DARK);
    checkboxRef.checked = true;
  }
  else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    checkboxRef.checked = false;
  }
}
