import ChangeTheme from './components/changeTheme';
import componentsDB from './components/componentsDB';
import ComponentsList from './components/componentsList';
import ComponentsTrigger from './components/componentsTrigger';

document.addEventListener("DOMContentLoaded", () => {
  new ChangeTheme(document.querySelector('html'), document.querySelector('.toggle-mode-input'));

  setTimeout(() => {
    new ComponentsList('components', componentsDB);
    new ComponentsTrigger();
  }, 1000)
});