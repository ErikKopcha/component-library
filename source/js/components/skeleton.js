class Skeleton {
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
        this.baseContainer.innerHTML = `
            <div class="loading-skeleton">
                <div class="d-flex mb-md">
                <div class="circle-skeleton"></div>
                <div class="flex-grow mt-sm ml-md">
                    <div class="short-loading-line mb-sm"></div>
                    <div class="middle-loading-line"></div>
                </div>
                </div>
                <div class="loading-line mb-sm"></div>
                <div class="middle-loading-line"></div>
            </div>
        `;
    }
}

export default Skeleton;