import CreateTooltip from './tooltip';

class Histogram {
  constructor(baseContainerId) {
    this.baseContainerId = baseContainerId;
    this.baseContainer = document.getElementById(baseContainerId);

    if (!this.baseContainer) {
      console.error('base container is not defined');
      return;
    }

    this.init();
  }

  init() {
    let arr = [
        {
            "height": 50,
            "id": 1
        },
        {
            "height": 37,
            "id": 2
        },
        {
            "height": 73,
            "id": 3
        },
        {
            "height": 81,
            "id": 4
        },
        {
            "height": 127,
            "id": 5
        },
        {
            "height": 78,
            "id": 6
        },
        {
            "height": 90,
            "id": 7
        },
        {
            "height": 56,
            "id": 8
        },
        {
            "height": 65,
            "id": 9
        },
        {
            "height": 41,
            "id": 10
        },
        {
            "height": 87,
            "id": 11
        },
        {
            "height": 78,
            "id": 12
        },
        {
            "height": 90,
            "id": 13
        },
        {
            "height": 76,
            "id": 14
        },
        {
            "height": 55,
            "id": 15
        },
        
    ]

    this.baseContainer.innerHTML = ``;

    let histHead = document.createElement('div'),
        histBody = document.createElement('div');
    histHead.classList.add('histogram');
    histBody.classList.add('histogram__bars');

    histHead.innerHTML = `
        <h1 class="histogram__header">Total orders</h1>
        <span class="histogram__total">50399</span>
    `;

    histHead.appendChild(histBody);

    this.baseContainer.appendChild(histHead);

    arr.forEach(el => {
        let bar = document.createElement('div');
        bar.classList.add('histogram__bar');
        bar.id = `histogram__bar-${el.id}`;
        bar.style.height = `${el.height}%`;

        histBody.appendChild(bar);
        new CreateTooltip(`histogram__bar-${el.id}`, {
            needIcon: false, 
            tooltipText: `Count: ${el.height}`
        });
    });
  }
}

export default Histogram;
