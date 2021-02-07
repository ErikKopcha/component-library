class Accordion {
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
        this.baseContainer.innerHTML = ``;

        for (let i = 0; i < 3; i++) {
            let accordionItem = document.createElement('details');
            accordionItem.className = `expanded mb-sm`;
            accordionItem.innerHTML = `
                <summary class="expanded__trigger">
                    Collapsable Group Item #${i} 
                    <svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24" class="svg-icon expanded__trigger-icon" fill="currentColor">
                        <use xlink:href="#angle"></use>
                    </svg>
                </summary>
                <div class="expanded__content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    amet.
                </div>
            `;

            this.baseContainer.appendChild(accordionItem);

            const trigger = accordionItem.querySelector('.expanded__trigger');
            const content = accordionItem.querySelector('.expanded__content');
    
            trigger.addEventListener('click', () => {
                if (accordionItem.classList.contains('open')) {
                    accordionItem.classList.remove('open');
                    accordionItem.style.height = ``;
                } else {
                    accordionItem.classList.add('open');
                    accordionItem.style.height = `${trigger.offsetHeight + 100}px`;
                }
            });
        }
    }
}

export default Accordion;
