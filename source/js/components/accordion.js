class Accordion {
    constructor(baseContainerId) {
      this.baseContainerId = baseContainerId;
      this.baseContainer = document.querySelectorAll(`[data-id="${baseContainerId}"]`);
  
      if (!this.baseContainer) {
        console.error('base container is not defined');
        return;
      }
  
      this.init();
    }

    init() {
        this.baseContainer.forEach(el => {
            el.innerHTML = `
                <details class="expanded mb-sm">
                    <summary class="expanded__trigger">Collapsable Group Item #1 <svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24" class="svg-icon expanded__trigger-icon" fill="currentColor">
                        <use xlink:href="#angle"></use>
                    </svg></summary>
                    <div class="expanded__content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    amet.</div>
                </details>
                <details class="expanded mb-sm">
                    <summary class="expanded__trigger">Collapsable Group Item #2 <svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24" class="svg-icon expanded__trigger-icon" fill="currentColor">
                        <use xlink:href="#angle"></use>
                    </svg></summary>
                    <div class="expanded__content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    amet.</div>
                </details>
                <details class="expanded">
                    <summary class="expanded__trigger">Collapsable Group Item #3 <svg
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24" class="svg-icon expanded__trigger-icon" fill="currentColor">
                        <use xlink:href="#angle"></use>
                    </svg></summary>
                    <div class="expanded__content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                    sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
                    amet.</div>
                </details>
            `;
        });

        let accWrapper = document.querySelectorAll('.expanded');
        accWrapper.forEach(el => {
            const trigger = el.querySelector('.expanded__trigger');
            const content = el.querySelector('.expanded__content');

            el.addEventListener('click', () => {
                el.classList.toggle('open');
                console.log('trigger.offsetHeight', trigger.offsetHeight);
                console.log('content.offsetHeight', content.offsetHeight);
                if (el.classList.contains('open')) {
                    el.style.height = `${trigger.offsetHeight + 150}px`;
                } else {
                    el.style.height = ``;
                }
            });
        });
    }
}

export default Accordion;
