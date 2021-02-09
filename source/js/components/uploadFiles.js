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
    this.baseContainer.innerHTML = `
      <div class="upload-file-container">
        <div class="card d-flex">
          <button class="components__item">Open</button>
          <button class="components__item">Download</button>
        </div>
      </div>
    `;
  }
}

export default UploadFiles;