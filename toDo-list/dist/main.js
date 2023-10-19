/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addProject.js":
/*!**************************************!*\
  !*** ./src/components/addProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewProject)
/* harmony export */ });
/* harmony import */ var _itemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemForm */ "./src/components/itemForm.js");
/* harmony import */ var _displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComponent */ "./src/components/displayComponent.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* eslint-disable no-restricted-syntax */




function addNewProject(projectName) {
  const section = document.createElement('div');
  section.setAttribute('id', projectName);
  section.classList.add('newProject');

  const title = document.createElement('h2');
  title.textContent = projectName;
  section.appendChild(title);

  const itemsToAddInThisProject = document.createElement('button');
  itemsToAddInThisProject.textContent = 'Add a list';
  itemsToAddInThisProject.addEventListener('click', () => {
    (0,_itemForm__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName);
  });
  section.appendChild(itemsToAddInThisProject);

  const storageKeys = Object.keys(_storage__WEBPACK_IMPORTED_MODULE_2__.storage);
  for (const key of storageKeys) {
    if (key === projectName) {
      const ul = document.createElement('ul');
      section.appendChild(ul);
      for (const list of _storage__WEBPACK_IMPORTED_MODULE_2__.storage[key]) {
        const li = document.createElement('li');
        li.textContent = list.title;
        ul.appendChild(li);
      }
    }
  }

  (0,_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(section);

  return section;
}


/***/ }),

/***/ "./src/components/buttonList.js":
/*!**************************************!*\
  !*** ./src/components/buttonList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buttonList)
/* harmony export */ });
/* harmony import */ var _generateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateList */ "./src/components/generateList.js");
/* harmony import */ var _itemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./itemForm */ "./src/components/itemForm.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectForm */ "./src/components/projectForm.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");





function buttonList() {
  const section = document.createElement('div');
  section.classList.add('welcome');

  const addSymbol = document.createElement('button');
  addSymbol.textContent = 'Add a list';
  addSymbol.addEventListener('click', _itemForm__WEBPACK_IMPORTED_MODULE_1__["default"]);
  section.appendChild(addSymbol);

  const project = document.createElement('button');
  project.textContent = 'New project';
  project.addEventListener('click', _projectForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
  section.appendChild(project);

  const viewList = document.createElement('button');
  viewList.textContent = 'View List';
  viewList.addEventListener('click', () => {
    console.log('entered view list');
    (0,_generateList__WEBPACK_IMPORTED_MODULE_0__["default"])(_storage__WEBPACK_IMPORTED_MODULE_3__.storage);
  });
  section.appendChild(viewList);

  return section;
}


/***/ }),

/***/ "./src/components/displayComponent.js":
/*!********************************************!*\
  !*** ./src/components/displayComponent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayComponent)
/* harmony export */ });
function displayComponent(component) {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(component);
}


/***/ }),

/***/ "./src/components/generateList.js":
/*!****************************************!*\
  !*** ./src/components/generateList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateList)
/* harmony export */ });
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ "./src/components/getDate.js");
/* harmony import */ var _displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComponent */ "./src/components/displayComponent.js");
/* harmony import */ var _priorityColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorityColor */ "./src/components/priorityColor.js");
/* eslint-disable no-restricted-syntax */




function generateList(storage) {
  const listContainer = document.createElement('div');
  listContainer.classList.add('listContainer');

  const storageKeys = Object.keys(storage);

  for (const key of storageKeys) {
    const projectName = document.createElement('h2');
    projectName.textContent = key;
    listContainer.appendChild(projectName);

    for (const list of storage[key]) {
      const section = document.createElement('div');
      section.classList.add('listGenerator');
      section.addEventListener('click', () => {
        section.classList.toggle('done');
      });

      const priority = document.createElement('p');
      priority.textContent = list.priority;
      priority.classList.add('priority');
      (0,_priorityColor__WEBPACK_IMPORTED_MODULE_2__["default"])(list.priority, priority);
      section.appendChild(priority);

      const title = document.createElement('h3');
      title.textContent = list.title;
      title.classList.add('title');
      section.appendChild(title);

      const desc = document.createElement('p');
      desc.textContent = list.description;
      desc.classList.add('desc');
      section.appendChild(desc);

      const date = document.createElement('p');
      const dueDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__["default"])(list.dueDate);
      date.textContent = dueDate;
      date.classList.add('date');
      section.appendChild(date);

      listContainer.appendChild(section);
    }
  }

  (0,_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(listContainer);
  return listContainer;
}


/***/ }),

/***/ "./src/components/getDate.js":
/*!***********************************!*\
  !*** ./src/components/getDate.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
function getDate(date) {
  const givenDate = new Date(date);
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][givenDate.getMonth()];
  const formattedDate = `${givenDate.getDate()} ${month} ${givenDate.getFullYear()}`;

  return formattedDate;
}


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _mainDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDiv */ "./src/components/mainDiv.js");
/* harmony import */ var _buttonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonList */ "./src/components/buttonList.js");



function home() {
  const content = document.getElementById('content');
  const heading = document.createElement('h1');
  heading.textContent = 'ToDo List';
  content.appendChild(heading);
  content.appendChild((0,_buttonList__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_mainDiv__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return content;
}


/***/ }),

/***/ "./src/components/itemForm.js":
/*!************************************!*\
  !*** ./src/components/itemForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newItem)
/* harmony export */ });
/* harmony import */ var _updateStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateStorage */ "./src/components/updateStorage.js");
/* harmony import */ var _displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComponent */ "./src/components/displayComponent.js");
/* harmony import */ var _generateList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateList */ "./src/components/generateList.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");





function newItem(projectName = null) {
  console.log(projectName.isTrusted);

  const br = document.createElement('br');
  const priority = ['low', 'med', 'high'];

  const section = document.createElement('div');
  section.classList.add('newItem');

  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'submit');

  const title = document.createElement('input');
  title.setAttribute('type', 'text');
  title.setAttribute('id', 'title');
  title.setAttribute('placeholder', 'Title');

  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.setAttribute('id', 'desc');
  description.setAttribute('placeholder', 'Description');

  const dueDate = document.createElement('input');
  dueDate.setAttribute('type', 'date');
  dueDate.setAttribute('id', 'date');

  const priorContainer = document.createElement('select');
  priorContainer.setAttribute('id', 'prior');

  priority.forEach((prior) => {
    const option = document.createElement('option');
    option.textContent = prior;
    priorContainer.appendChild(option);
  });

  const submit = document.createElement('button');
  submit.setAttribute('id', 'submit');
  submit.textContent = 'Submit';

  form.appendChild(title);
  form.appendChild(br.cloneNode());
  form.appendChild(description);
  form.appendChild(br.cloneNode());
  form.appendChild(dueDate);
  form.appendChild(br.cloneNode());
  form.appendChild(priorContainer);
  form.appendChild(br.cloneNode());
  form.appendChild(submit);

  section.appendChild(form);

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const updatedStorage = (0,_updateStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(_storage__WEBPACK_IMPORTED_MODULE_3__.storage, projectName);
    (0,_generateList__WEBPACK_IMPORTED_MODULE_2__["default"])(updatedStorage);
    form.innerHTML = '';
  });

  (0,_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(section);

  return section;
}


/***/ }),

/***/ "./src/components/mainDiv.js":
/*!***********************************!*\
  !*** ./src/components/mainDiv.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
function main() {
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'main');
  mainDiv.classList.add('main');
  return mainDiv;
}


/***/ }),

/***/ "./src/components/priorityColor.js":
/*!*****************************************!*\
  !*** ./src/components/priorityColor.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ priorityColor)
/* harmony export */ });
/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
function priorityColor(item, component) {
  switch (item) {
    case 'low':
      component.style.backgroundColor = 'rgb(85, 169, 190)';
      break;
    case 'med':
      component.style.backgroundColor = 'rgb(206, 162, 81)';
      break;
    case 'high':
      component.style.backgroundColor = 'rgb(194, 91, 78)';
      break;
  }
  return component;
}


/***/ }),

/***/ "./src/components/projectForm.js":
/*!***************************************!*\
  !*** ./src/components/projectForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectForm)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/components/addProject.js");
/* harmony import */ var _displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayComponent */ "./src/components/displayComponent.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* eslint-disable no-restricted-syntax */




function newProjectForm() {
  const section = document.createElement('div');
  section.classList.add('createProject');

  const storageKeys = Object.keys(_storage__WEBPACK_IMPORTED_MODULE_2__.storage);
  for (const key of storageKeys) {
    if (key !== 'default') { section.appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_0__["default"])(key)); }
  }
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', 'submit');

  const projectName = document.createElement('input');
  projectName.setAttribute('type', 'text');
  projectName.setAttribute('id', 'projectName');
  projectName.setAttribute('placeholder', 'Project Name');

  const click = document.createElement('button');
  click.setAttribute('id', 'click');
  click.textContent = 'Ok';

  form.appendChild(projectName);
  form.appendChild(click);
  section.appendChild(form);

  click.addEventListener('click', (e) => {
    e.preventDefault();
    const eachProject = document.getElementById('projectName').value;
    (0,_addProject__WEBPACK_IMPORTED_MODULE_0__["default"])(eachProject);
    form.innerHTML = '';
  });
  (0,_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(section);
  return section;
}


/***/ }),

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const storage = {};


/***/ }),

/***/ "./src/components/updateStorage.js":
/*!*****************************************!*\
  !*** ./src/components/updateStorage.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateStorage)
/* harmony export */ });
/* eslint-disable no-param-reassign */
function updateStorage(storage, projectName) {
  const title = document.getElementById('title').value;
  const desc = document.getElementById('desc').value;
  const date = document.getElementById('date').value;
  const prior = document.getElementById('prior').value;
  const projectTitle = projectName.isTrusted === true ? 'default' : projectName;

  if (!Object.keys(storage).includes(projectTitle)) {
    storage[projectTitle] = [{
      title,
      description: desc,
      dueDate: date,
      priority: prior,
    },
    ];
  } else {
    storage[projectTitle].push({
      title,
      description: desc,
      dueDate: date,
      priority: prior,
    });
  }

  console.log(storage);

  return storage;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");


document.body.appendChild((0,_components_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsMEJBQTBCLDREQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9idXR0b25MaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Rpc3BsYXlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2VuZXJhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dldERhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9pdGVtRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9tYWluRGl2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3ByaW9yaXR5Q29sb3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy91cGRhdGVTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IG5ld0l0ZW0gZnJvbSAnLi9pdGVtRm9ybSc7XG5pbXBvcnQgZGlzcGxheUNvbXBvbmVudCBmcm9tICcuL2Rpc3BsYXlDb21wb25lbnQnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0TmFtZSk7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbmV3UHJvamVjdCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgaXRlbXNUb0FkZEluVGhpc1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaXRlbXNUb0FkZEluVGhpc1Byb2plY3QudGV4dENvbnRlbnQgPSAnQWRkIGEgbGlzdCc7XG4gIGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld0l0ZW0ocHJvamVjdE5hbWUpO1xuICB9KTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtc1RvQWRkSW5UaGlzUHJvamVjdCk7XG5cbiAgY29uc3Qgc3RvcmFnZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yYWdlKTtcbiAgZm9yIChjb25zdCBrZXkgb2Ygc3RvcmFnZUtleXMpIHtcbiAgICBpZiAoa2V5ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICBmb3IgKGNvbnN0IGxpc3Qgb2Ygc3RvcmFnZVtrZXldKSB7XG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBsaXN0LnRpdGxlO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZGlzcGxheUNvbXBvbmVudChzZWN0aW9uKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsImltcG9ydCBnZW5lcmF0ZUxpc3QgZnJvbSAnLi9nZW5lcmF0ZUxpc3QnO1xuaW1wb3J0IG5ld0l0ZW0gZnJvbSAnLi9pdGVtRm9ybSc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuL3Byb2plY3RGb3JtJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidXR0b25MaXN0KCkge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gIGNvbnN0IGFkZFN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhZGRTeW1ib2wudGV4dENvbnRlbnQgPSAnQWRkIGEgbGlzdCc7XG4gIGFkZFN5bWJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0l0ZW0pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFN5bWJvbCk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0LnRleHRDb250ZW50ID0gJ05ldyBwcm9qZWN0JztcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGNvbnN0IHZpZXdMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHZpZXdMaXN0LnRleHRDb250ZW50ID0gJ1ZpZXcgTGlzdCc7XG4gIHZpZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlbnRlcmVkIHZpZXcgbGlzdCcpO1xuICAgIGdlbmVyYXRlTGlzdChzdG9yYWdlKTtcbiAgfSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodmlld0xpc3QpO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBnZXREYXRlIGZyb20gJy4vZ2V0RGF0ZSc7XG5pbXBvcnQgZGlzcGxheUNvbXBvbmVudCBmcm9tICcuL2Rpc3BsYXlDb21wb25lbnQnO1xuaW1wb3J0IHByaW9yaXR5Q29sb3IgZnJvbSAnLi9wcmlvcml0eUNvbG9yJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KHN0b3JhZ2UpIHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250YWluZXInKTtcblxuICBjb25zdCBzdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JhZ2UpO1xuXG4gIGZvciAoY29uc3Qga2V5IG9mIHN0b3JhZ2VLZXlzKSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0ga2V5O1xuICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgZm9yIChjb25zdCBsaXN0IG9mIHN0b3JhZ2Vba2V5XSkge1xuICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdsaXN0R2VuZXJhdG9yJyk7XG4gICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC50b2dnbGUoJ2RvbmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gbGlzdC5wcmlvcml0eTtcbiAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5Jyk7XG4gICAgICBwcmlvcml0eUNvbG9yKGxpc3QucHJpb3JpdHksIHByaW9yaXR5KTtcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGxpc3QudGl0bGU7XG4gICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICBkZXNjLnRleHRDb250ZW50ID0gbGlzdC5kZXNjcmlwdGlvbjtcbiAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZCgnZGVzYycpO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBnZXREYXRlKGxpc3QuZHVlRGF0ZSk7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgIGRhdGUuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5Q29tcG9uZW50KGxpc3RDb250YWluZXIpO1xuICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGggPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJyxcbiAgICAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11bZ2l2ZW5EYXRlLmdldE1vbnRoKCldO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7Z2l2ZW5EYXRlLmdldERhdGUoKX0gJHttb250aH0gJHtnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuIiwiaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluRGl2JztcbmltcG9ydCBidXR0b25MaXN0IGZyb20gJy4vYnV0dG9uTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdUb0RvIExpc3QnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkxpc3QoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbigpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgYWRkSXRlbSBmcm9tICcuL3VwZGF0ZVN0b3JhZ2UnO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCBnZW5lcmF0ZUxpc3QgZnJvbSAnLi9nZW5lcmF0ZUxpc3QnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0l0ZW0ocHJvamVjdE5hbWUgPSBudWxsKSB7XG4gIGNvbnNvbGUubG9nKHByb2plY3ROYW1lLmlzVHJ1c3RlZCk7XG5cbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBwcmlvcml0eSA9IFsnbG93JywgJ21lZCcsICdoaWdoJ107XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25ld0l0ZW0nKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuXG4gIGNvbnN0IHByaW9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3InKTtcblxuICBwcmlvcml0eS5mb3JFYWNoKChwcmlvcikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yO1xuICAgIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRTdG9yYWdlID0gYWRkSXRlbShzdG9yYWdlLCBwcm9qZWN0TmFtZSk7XG4gICAgZ2VuZXJhdGVMaXN0KHVwZGF0ZWRTdG9yYWdlKTtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICB9KTtcblxuICBkaXNwbGF5Q29tcG9uZW50KHNlY3Rpb24pO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgcmV0dXJuIG1haW5EaXY7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZGVmYXVsdC1jYXNlICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmlvcml0eUNvbG9yKGl0ZW0sIGNvbXBvbmVudCkge1xuICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICBjYXNlICdsb3cnOlxuICAgICAgY29tcG9uZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoODUsIDE2OSwgMTkwKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtZWQnOlxuICAgICAgY29tcG9uZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjA2LCAxNjIsIDgxKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoaWdoJzpcbiAgICAgIGNvbXBvbmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE5NCwgOTEsIDc4KSc7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gY29tcG9uZW50O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBhZGRQcm9qZWN0IGZyb20gJy4vYWRkUHJvamVjdCc7XG5pbXBvcnQgZGlzcGxheUNvbXBvbmVudCBmcm9tICcuL2Rpc3BsYXlDb21wb25lbnQnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtKCkge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlUHJvamVjdCcpO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG4gIGZvciAoY29uc3Qga2V5IG9mIHN0b3JhZ2VLZXlzKSB7XG4gICAgaWYgKGtleSAhPT0gJ2RlZmF1bHQnKSB7IHNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdChrZXkpKTsgfVxuICB9XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdCcpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TmFtZScpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpO1xuXG4gIGNvbnN0IGNsaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNsaWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xpY2snKTtcbiAgY2xpY2sudGV4dENvbnRlbnQgPSAnT2snO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNsaWNrKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVhY2hQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJykudmFsdWU7XG4gICAgYWRkUHJvamVjdChlYWNoUHJvamVjdCk7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG4gIGRpc3BsYXlDb21wb25lbnQoc2VjdGlvbik7XG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0ge307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU3RvcmFnZShzdG9yYWdlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yJykudmFsdWU7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3ROYW1lLmlzVHJ1c3RlZCA9PT0gdHJ1ZSA/ICdkZWZhdWx0JyA6IHByb2plY3ROYW1lO1xuXG4gIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZSkuaW5jbHVkZXMocHJvamVjdFRpdGxlKSkge1xuICAgIHN0b3JhZ2VbcHJvamVjdFRpdGxlXSA9IFt7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgZHVlRGF0ZTogZGF0ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcixcbiAgICB9LFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgc3RvcmFnZVtwcm9qZWN0VGl0bGVdLnB1c2goe1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgIGR1ZURhdGU6IGRhdGUsXG4gICAgICBwcmlvcml0eTogcHJpb3IsXG4gICAgfSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhzdG9yYWdlKTtcblxuICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=