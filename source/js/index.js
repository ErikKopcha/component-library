import ChangeTheme from './components/changeTheme';
import ComponentsList from './components/componentsList';
import ComponentsTrigger from './components/componentsTrigger';

document.addEventListener("DOMContentLoaded", () => {
  let changeTheme = new ChangeTheme(document.querySelector('html'), document.querySelector('.toggle-mode-input'));
  let componentsList = new ComponentsList('components');
  let componentsTrigger = new ComponentsTrigger();
});