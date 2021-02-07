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
      new ComponentsList('components');
      new ComponentsTrigger();
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