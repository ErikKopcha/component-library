class ComponentsList {
  constructor(baseContainerId, itemsArr = []) {
    this.baseContainerId = baseContainerId;
    this.baseContainer = document.getElementById(baseContainerId);
    this.itemsArr = itemsArr;
    if (!this.baseContainer) {
      console.error('base container is not defined');
      return;
    }

    this._renderList();
  }

  _renderList() {
    this.baseContainer.innerHTML = `
      <ul class="components__list">
        ${this.itemsArr.map(item => { 
          return `<li class="components__item" data-name="${item.name}">${item.name}</li>`; 
        } ).join('')}
      </ul>
    `;
  }
}

export default ComponentsList;