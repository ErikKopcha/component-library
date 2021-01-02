import ChangeTheme from './components/changeTheme';
import CreateTooltip from './components/tooltip';
import Histogram from './components/histogram';
import Calendar from './components/calendar';
import Skeleton from './components/skeleton';
import Accordion from './components/accordion';

document.addEventListener("DOMContentLoaded", () => {
  let changeTheme = new ChangeTheme(document.querySelector('html'), document.querySelector('.toggle-mode-input'));

  setTimeout(() => {
    let createTooltip = new CreateTooltip('tooltip-container', true);
    let histogram = new Histogram('histogram-container');
    let calendar = new Calendar('calendar-container');
    let skeleton = new Skeleton('skeleton-container');
    let accordion = new Accordion('accordion-container');
  }, 1000);
});