import componentsDB from './componentsDB';
import CreateTooltip from './tooltip';
import Histogram from './histogram';
import Calendar from './calendar';
import Skeleton from './skeleton';
import Accordion from './accordion';
import ComponentsList from './componentsList';
import UploadFiles from './uploadFiles';
import Search from './search';
import CustomSelect from './customSelect';
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
    new Search('search-input', '.components__item');

    this.btnBack.addEventListener('click', () => {
      this._hideBtnBack()
      new ComponentsList('components', componentsDB);
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
            case 'custom select':
              let selectObj = {
                placeholder: 'Виберіть елемент',
                selectedId: '',
                data: [
                    {id: 1, value: 'React'},
                    {id: 2, value: 'Angular'},
                    {id: 3, value: 'Vue'},
                    {id: 4, value: 'Nest'},
                    {id: 5, value: 'Next'}
                ],
                onSelect(item) {
                    console.log('selected item =>', item);
                }
              };
            
              new CustomSelect('components', selectObj);
              break;
          }
        });
      }
    });
  }
}

export default ComponentsTrigger;