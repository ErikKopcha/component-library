import componentsDB from './componentsDB';
import CreateTooltip from './tooltip';
import Histogram from './histogram';
import Calendar from './calendar';
import Skeleton from './skeleton';
import Accordion from './accordion';
import ComponentsList from './componentsList';
import UploadFiles from './uploadFiles';

class ComponentsTrigger {
  constructor() {
    
    this._getControlElements();
    this._triggers();
  }

  _getControlElements() {
    this.btnBack = document.querySelector('.btn-back');
    this.searchField = document.querySelector('.search-input');
  }

  _showBtnBack() {
    if (this.btnBack) {
      this.btnBack.classList.remove('d-none');
    }
  }

  _hideBtnBack() {
    if (this.btnBack) {
      this.btnBack.classList.add('d-none');
    }
  }

  _triggers() {
    this.btnBack.addEventListener('click', () => {
      this._hideBtnBack()
      new ComponentsList('components', componentsDB);
      new ComponentsTrigger();
    });
    
    let timeout = null;

    this.searchField.addEventListener('input', () => {
      let value = this.searchField.value.toLowerCase().trim();
        componentsDB.forEach(el => {
          try {            
            if (el.name.toLowerCase().search(value) == -1) {
              document.querySelector(`[data-name="${el.name}"]`).classList.add('hidden');

              if (value != `` && Array.from(document.querySelectorAll('.components__list .components__item')).some(item => item.classList.contains('hidden'))) {
              //   if (timeout) {
              //     clearTimeout(timeout);
              //   }

              //   timeout = setTimeout(() => {
              //     document.querySelector('.text__glitch').classList.remove('hidden');
              //     const text = baffle(".text__glitch");

              //     text.set({
              //         characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>",
              //         speed: 120
              //     });
              //     text.start();
              //     text.reveal(8000);
              //   },400);
              }
            } else {
              document.querySelector('.text__glitch').classList.add('hidden');
              document.querySelector(`[data-name="${el.name}"]`).classList.remove('hidden');
            }
          } catch(e) {}
        });
    });

    componentsDB.forEach(component => {
      let item = document.querySelector(`[data-name="${component.name}"]`);

      if (item) {
        item.addEventListener('click', (e) => {
          this._showBtnBack();

          switch (e.target.dataset.name) {
            case 'histogram':
              new Histogram('components');
              break;
            case 'calendar':
              new Calendar('components');
              break;
            case 'accordion':
              new Accordion('components');
              break;
            case 'skeleton':
              new Skeleton('components');
              break;
            case 'tooltip':
              new CreateTooltip('components', {
                needIcon: true, 
                tooltipText: 'Helper text'
              })
              break;
            case 'files': 
              new UploadFiles(`components`);
              break;
          }
        });
      }
    });
  }
}

export default ComponentsTrigger;