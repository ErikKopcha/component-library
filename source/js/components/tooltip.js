class CreateTooltip {
  constructor(baseContainerId, options = {}) {
    this.needIcon = options.needIcon;
    this.tooltipText = options.tooltipText;
    this.baseContainerId = baseContainerId;
    this.baseContainer = document.getElementById(baseContainerId);

    if (!this.baseContainer) {
        console.error('base container is not defined');
        return;
    }

    this.init();
  }

  init() {
    if (this.needIcon) {
      this.template = `
        <div class="tooltip">
            <div class="tooltip__icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 24 24" class="svg-icon" fill="currentColor" id="light-theme-icon">
                  <use xlink:href="#help"></use>
              </svg>
            </div>
            <div class="tooltip__help">
              <div class="tooltip__text">Helper text</div>
            </div>
        </div>
      `;

      this.renderToHTML(this.template);
    } else {
      let tooltipHelper = document.createElement('div');
      tooltipHelper.classList.add('tooltip__help');
      tooltipHelper.innerHTML = `<div class="tooltip__text">${this.tooltipText}</div>`;

      this.baseContainer.classList.add('tooltip');
      this.baseContainer.appendChild(tooltipHelper);
    }
  }

  renderToHTML() {
    this.baseContainer.innerHTML = this.template;
  }
}

export default CreateTooltip;