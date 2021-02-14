/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/js/components/accordion.js":
/*!*******************************************!*\
  !*** ./source/js/components/accordion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
      trigger.addEventListener('click', () => {
        if (accordionItem.classList.contains('open')) {
          accordionItem.classList.remove('open');
          accordionItem.style.maxHeight = '72px';
        } else {
          accordionItem.classList.add('open');
          accordionItem.style.maxHeight = `${100}vh`;
        }
      });
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./source/js/components/calendar.js":
/*!******************************************!*\
  !*** ./source/js/components/calendar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Calendar {
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
            <div class="calendar calendar_size_mini">
                <div class="calendar__inner">
                    <div class="calendar__body-wrapper">
                        <div class="calendar__header">
                            October 2020
                        </div>
                        <div class="calendar__body">
                            <div class="calendar__body-inner">
                                <span class="calendar__item calendar__item_day">Mon</span>
                                <span class="calendar__item calendar__item_day">Tue</span>
                                <span class="calendar__item calendar__item_day">Wed</span>
                                <span class="calendar__item calendar__item_day">Thu</span>
                                <span class="calendar__item calendar__item_day">Fri</span>
                                <span class="calendar__item calendar__item_day">Sat</span>
                                <span class="calendar__item calendar__item_day">Sun</span>
                                <span class="calendar__item"></span>
                                <span class="calendar__item"></span>
                                <span class="calendar__item"></span>
                                <span class="calendar__item"></span>
                                <span class="calendar__item"></span>
                                <span class="calendar__item">1</span>
                                <span class="calendar__item">2</span>
                                <span class="calendar__item">3</span>
                                <span class="calendar__item">4</span>
                                <span class="calendar__item">5</span>
                                <span class="calendar__item">6</span>
                                <span class="calendar__item">7</span>
                                <span class="calendar__item">8</span>
                                <span class="calendar__item">9</span>
                                <span class="calendar__item">10</span>
                                <span class="calendar__item calendar__item_active">11</span>
                                <span class="calendar__item calendar__item_between-active">12</span>
                                <span class="calendar__item calendar__item_between-active">13</span>
                                <span class="calendar__item calendar__item_between-active">14</span>
                                <span class="calendar__item calendar__item_active">15</span>
                                <span class="calendar__item">16</span>
                                <span class="calendar__item">17</span>
                                <span class="calendar__item">18</span>
                                <span class="calendar__item">19</span>
                                <span class="calendar__item">20</span>
                                <span class="calendar__item">21</span>
                                <span class="calendar__item">22</span>
                                <span class="calendar__item">23</span>
                                <span class="calendar__item">24</span>
                                <span class="calendar__item">25</span>
                                <span class="calendar__item">26</span>
                                <span class="calendar__item">27</span>
                                <span class="calendar__item">28</span>
                                <span class="calendar__item">29</span>
                                <span class="calendar__item">30</span>
                                <span class="calendar__item">31</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./source/js/components/changeTheme.js":
/*!*********************************************!*\
  !*** ./source/js/components/changeTheme.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ChangeTheme {
  constructor(htmlTag, modeToggler) {
    this.htmlTag = htmlTag;
    this.modeToggler = modeToggler;
    this.init();
  }

  init() {
    this.modeToggler !== undefined && this.modeToggler.addEventListener("click", () => {
      const boolState = this.modeToggler.querySelector("input").checked;
      this.htmlTag.setAttribute('data-mode', boolState !== true ? "light" : "dark");
      localStorage.setItem('data-mode', boolState !== true ? "light" : "dark");
    });
    this.checkSelectedTheme();
  }

  checkSelectedTheme() {
    if (localStorage.getItem('data-mode') === 'light') {
      this.modeToggler.querySelector("input").checked = false;
      this.htmlTag.setAttribute('data-mode', "light");
    } else {
      this.modeToggler.querySelector("input").checked = true;
      this.htmlTag.setAttribute('data-mode', "dark");
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ChangeTheme);

/***/ }),

/***/ "./source/js/components/componentsDB.js":
/*!**********************************************!*\
  !*** ./source/js/components/componentsDB.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let componentsDB = [{
  "name": "files",
  "id": 1
}, {
  "name": "histogram",
  "id": 2
}, {
  "name": "calendar",
  "id": 3
}, {
  "name": "accordion",
  "id": 4
}, {
  "name": "skeleton",
  "id": 5
}, {
  "name": "tooltip",
  "id": 6
}];
/* harmony default export */ __webpack_exports__["default"] = (componentsDB);

/***/ }),

/***/ "./source/js/components/componentsList.js":
/*!************************************************!*\
  !*** ./source/js/components/componentsList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    }).join('')}
      </ul>
    `;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ComponentsList);

/***/ }),

/***/ "./source/js/components/componentsTrigger.js":
/*!***************************************************!*\
  !*** ./source/js/components/componentsTrigger.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componentsDB__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentsDB */ "./source/js/components/componentsDB.js");
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip */ "./source/js/components/tooltip.js");
/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./histogram */ "./source/js/components/histogram.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar */ "./source/js/components/calendar.js");
/* harmony import */ var _skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skeleton */ "./source/js/components/skeleton.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion */ "./source/js/components/accordion.js");
/* harmony import */ var _componentsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentsList */ "./source/js/components/componentsList.js");
/* harmony import */ var _uploadFiles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./uploadFiles */ "./source/js/components/uploadFiles.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search */ "./source/js/components/search.js");










class ComponentsTrigger {
  constructor() {
    this._getControlElements();

    this._triggers();
  }

  _getControlElements() {
    this.btnBack = document.querySelector('.btn-back');
    this.searchField = document.querySelector('.search-input');
  }

  _showBtnBack() {
    if (this.btnBack) {
      this.btnBack.classList.remove('d-none');
    }
  }

  _hideBtnBack() {
    if (this.btnBack) {
      this.btnBack.classList.add('d-none');
    }
  }

  _triggers() {
    new _search__WEBPACK_IMPORTED_MODULE_8__["default"]('search-input', '.components__item');
    this.btnBack.addEventListener('click', () => {
      this._hideBtnBack();

      new _componentsList__WEBPACK_IMPORTED_MODULE_6__["default"]('components', _componentsDB__WEBPACK_IMPORTED_MODULE_0__["default"]);
      new ComponentsTrigger();
    });
    let timeout = null;
    _componentsDB__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(component => {
      let item = document.querySelector(`[data-name="${component.name}"]`);

      if (item) {
        item.addEventListener('click', e => {
          this._showBtnBack();

          switch (e.target.dataset.name) {
            case 'histogram':
              new _histogram__WEBPACK_IMPORTED_MODULE_2__["default"]('components');
              break;

            case 'calendar':
              new _calendar__WEBPACK_IMPORTED_MODULE_3__["default"]('components');
              break;

            case 'accordion':
              new _accordion__WEBPACK_IMPORTED_MODULE_5__["default"]('components');
              break;

            case 'skeleton':
              new _skeleton__WEBPACK_IMPORTED_MODULE_4__["default"]('components');
              break;

            case 'tooltip':
              new _tooltip__WEBPACK_IMPORTED_MODULE_1__["default"]('components', {
                needIcon: true,
                tooltipText: 'Helper text'
              });
              break;

            case 'files':
              new _uploadFiles__WEBPACK_IMPORTED_MODULE_7__["default"](`components`);
              break;
          }
        });
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ComponentsTrigger);

/***/ }),

/***/ "./source/js/components/histogram.js":
/*!*******************************************!*\
  !*** ./source/js/components/histogram.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip */ "./source/js/components/tooltip.js");


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
    let arr = [{
      "height": 50,
      "id": 1
    }, {
      "height": 37,
      "id": 2
    }, {
      "height": 73,
      "id": 3
    }, {
      "height": 81,
      "id": 4
    }, {
      "height": 127,
      "id": 5
    }, {
      "height": 78,
      "id": 6
    }, {
      "height": 90,
      "id": 7
    }, {
      "height": 56,
      "id": 8
    }, {
      "height": 65,
      "id": 9
    }, {
      "height": 41,
      "id": 10
    }, {
      "height": 87,
      "id": 11
    }, {
      "height": 78,
      "id": 12
    }, {
      "height": 90,
      "id": 13
    }, {
      "height": 76,
      "id": 14
    }, {
      "height": 55,
      "id": 15
    }];
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
      new _tooltip__WEBPACK_IMPORTED_MODULE_0__["default"](`histogram__bar-${el.id}`, {
        needIcon: false,
        tooltipText: `Count: ${el.height}`
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Histogram);

/***/ }),

/***/ "./source/js/components/search.js":
/*!****************************************!*\
  !*** ./source/js/components/search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Search {
  constructor(inputId, items) {
    this.searchInput = document.getElementById(inputId);
    this.items = document.querySelectorAll(items);
    this.search();
  }

  search() {
    // event на поле поиска
    this.searchInput.addEventListener('keyup', () => {
      // получаем информацию с поиска и убираем пробелы
      let value = this.searchInput.value.toLowerCase().trim();

      if (value != '') {
        this.items.forEach(el => {
          // получаем только текст, без тегов.
          // search - ищет подстроку в строке и возвращает номер подстроки / -1 (если нет)
          if (el.innerText.toLowerCase().search(value) == -1) {
            el.classList.add('hidden');
          } else {
            el.classList.remove('hidden');
          }
        });
      } else {
        this.items.forEach(el => {
          el.classList.remove('hidden');
        });
      }
    });
  } // showElement(el) {
  //   el.style.display = 'block';
  //   setTimeout(() => {
  //     el.style.transform = 'scale(1)';
  //   }, 200);
  // }
  // hideElement(el) {
  //   el.style.transform = 'translateX(-1000px)';
  //   setTimeout(() => {
  //     el.style.display = 'none';
  //   }, 200);
  // }


}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./source/js/components/skeleton.js":
/*!******************************************!*\
  !*** ./source/js/components/skeleton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (Skeleton);

/***/ }),

/***/ "./source/js/components/tooltip.js":
/*!*****************************************!*\
  !*** ./source/js/components/tooltip.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (CreateTooltip);

/***/ }),

/***/ "./source/js/components/uploadFiles.js":
/*!*********************************************!*\
  !*** ./source/js/components/uploadFiles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (UploadFiles);

/***/ }),

/***/ "./source/js/index.js":
/*!****************************!*\
  !*** ./source/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_changeTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/changeTheme */ "./source/js/components/changeTheme.js");
/* harmony import */ var _components_componentsDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/componentsDB */ "./source/js/components/componentsDB.js");
/* harmony import */ var _components_componentsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/componentsList */ "./source/js/components/componentsList.js");
/* harmony import */ var _components_componentsTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/componentsTrigger */ "./source/js/components/componentsTrigger.js");




document.addEventListener("DOMContentLoaded", () => {
  new _components_changeTheme__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('html'), document.querySelector('.toggle-mode-input'));
  setTimeout(() => {
    new _components_componentsList__WEBPACK_IMPORTED_MODULE_2__["default"]('components', _components_componentsDB__WEBPACK_IMPORTED_MODULE_1__["default"]);
    new _components_componentsTrigger__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }, 1000);
});

/***/ })

/******/ });
//# sourceMappingURL=index.js.map