import componentsDB from './componentsDB';

class ComponentsList {
  constructor(baseContainerId) {
    this.baseContainerId = baseContainerId;
    this.baseContainer = document.getElementById(baseContainerId);

    if (!this.baseContainer) {
      console.error('base container is not defined');
      return;
    }

    this._renderList();
  }

  _renderList() {
    this.baseContainer.innerHTML = `
      <ul class="components__list">
        ${componentsDB.map(component => { 
          return `<li class="components__item" data-name="${component.name}">${component.name}</li>`; 
        } ).join('')}
      </ul>
    `;
  }
}

export default ComponentsList;