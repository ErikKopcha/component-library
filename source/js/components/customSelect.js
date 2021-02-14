class CustomSelect {
  constructor(baseContainerId, options) {
    this.baseContainer = document.getElementById(baseContainerId);
    this.options = options;
    this.selectedId = options.selectedId;

    this.createSelect();
  }

  // create select
  createSelect() {
    const {
      data = [], placeholder
    } = this.options;
    let text = placeholder || 'Placeholder default';

    const items = data.map(item => {
      let cls = ``;

      if (item.id == this.selectedId) {
        text = item.value;
        cls = 'selected';
      }

      return `<li class="${cls} select-item" data-type="item" data-id="${item.id}">${item.value}</li>`
    });

    this.select = document.createElement('div');
    this.select.classList.add('custom-select');
    this.select.innerHTML = `
          <div class="custom-select__backdrop" data-type="backdrop"></div>
          <div data-type="input" class="custom-select__input">
            <p data-type="value">${text}</p>
            <i data-type="arrow" class="fas fa-chevron-down" style="transition: all 0.4s ease"></i>
          </div>
          <div class="custom-select__dropdown">
            <ul>
              <li><input id="select-search" class="select-search" autocomplete="off" type="text" placeholder="search" /></li>
              ${items.join('')}
            </ul>
          </div>
      `;

    this.baseContainer.innerHTML = ``;
    this.baseContainer.appendChild(this.select);
    let itemsList = this.select.querySelectorAll('.select-item');
    this.selectSearch = this.select.querySelector('#select-search');

    this.selectSearch.addEventListener('input', function () {
      this.selectSearchValue = this.value.toLowerCase().trim();

      if (this.selectSearchValue != '') {
        itemsList.forEach(el => {
          if (el.innerText.toLowerCase().search(this.selectSearchValue) == -1) {
            el.classList.add('hidden');
          } else {
            el.classList.remove('hidden');
          }
        });
      } else {
        itemsList.forEach(el => el.classList.remove('hidden'));
      }
    });

    this.select.querySelector('.custom-select__dropdown').style.top = `${this.select.clientHeight}px`;
    this.arrow = this.select.querySelector('[data-type="arrow"]');
    this.value = this.select.querySelector('[data-type="value"]');

    this.clickHandler = this.clickHandler.bind(this);
    this.select.addEventListener('click', this.clickHandler);
  }

  // select click event
  clickHandler(event) {
    const {
      type
    } = event.target.dataset;
    if (type == 'input' || type == 'value' || type == 'arrow') {
      this.toggle();
    } else if (type == 'item') {
      const id = event.target.dataset.id;
      this.selectId(id);
    } else if (type == 'backdrop') {
      this.close();
    }
  }

  // is open select
  get isOpen() {
    return this.select.classList.contains('open-custom-select')
  }

  // current value select
  get current() {
    return this.options.data.find(item => item.id === +this.selectedId);
  }

  // paste selected option in value inp, add selected css class, console.log(selected item)
  selectId(id) {
    this.selectedId = id;
    this.value.textContent = this.current.value;

    this.select.querySelectorAll('[data-type="item"]').forEach(el => el.classList.remove('selected'));
    this.select.querySelector(`[data-id="${id}"]`).classList.add('selected');

    this.options.onSelect ? this.options.onSelect(this.current) : null

    this.close();
  }

  // toggle (close/open)
  toggle() {
    this.isOpen ? this.close() : this.open()
  }

  // open select
  open() {
    this.select.classList.add('open-custom-select');
    this.arrow.style.transform = `rotate(180deg)`;
  }

  // close select
  close() {
    this.select.classList.remove('open-custom-select');
    this.arrow.style.transform = `rotate(0deg)`;
  }

  // remove select
  destroy() {
    this.select.removeEventListener('click', this.clickHandler);
    this.select.innerHTML = ``;
  }
}

export default CustomSelect;
