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
          <input id="input-upload" type="file" class="d-none"/>
          <button id="btn-upload" class="components__item">Open</button>
          <button id="btn-download" class="components__item">Download</button>
        </div>
      </div>
    `;

    this._getControlsElements();
  }

  _getControlsElements() {
    this.inputUpload = document.getElementById('input-upload');
    this.btnUpload = document.getElementById('btn-upload');
    this.btnDownload = document.getElementById('btn-download');
    
    this._triggers();
  }

  _triggers() {
    this.btnUpload.addEventListener('click', () => {
      this.inputUpload.click();
    });

    this.inputUpload.addEventListener('input', () => {
      if (this.inputUpload.files.length > 0) {
        console.log(this.inputUpload.files[0].name);
      }
    });
  }
}

export default UploadFiles;