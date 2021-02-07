class UploadFiles {
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
  }
}

export default UploadFiles;