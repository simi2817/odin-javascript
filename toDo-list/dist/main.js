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

/***/ "./src/components/deleteList.js":
/*!**************************************!*\
  !*** ./src/components/deleteList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteList)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* eslint-disable indent */


function deleteList(title) {
    console.log('entered delete list');
    for(const key of Object.keys(_storage__WEBPACK_IMPORTED_MODULE_0__.storage)) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.storage[key] = _storage__WEBPACK_IMPORTED_MODULE_0__.storage[key].filter((item) => item.title !== title);
    }
    return _storage__WEBPACK_IMPORTED_MODULE_0__.storage;
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
/* harmony import */ var _deleteList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteList */ "./src/components/deleteList.js");
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

      const closeButton = document.createElement('button');
      closeButton.classList.add('closeButton');
      closeButton.textContent = 'x';
      closeButton.addEventListener('click', () => {
        (0,_deleteList__WEBPACK_IMPORTED_MODULE_3__["default"])(list.title);
      });
      section.appendChild(closeButton);

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


/*<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>ToDo List</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script defer src="main.js"></script></head>
  <link rel="stylesheet" type="text/css" href="style.css"/>
  <link rel="icon" href="../src/assets/logo.png" type="image/x-icon"/>
  <body>
    <div id="content"></div>
  </body>
</html>*/

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2Q7QUFDQSxHQUFHO0FBQ0gsRUFBRSw2REFBZ0I7QUFDbEI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ087Ozs7Ozs7Ozs7Ozs7OztBQ0RQO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsMEJBQTBCLDREQUFJOzs7QUFHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2J1dHRvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5Q29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dlbmVyYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9nZXREYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbkRpdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcmlvcml0eUNvbG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBuZXdJdGVtIGZyb20gJy4vaXRlbUZvcm0nO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdE5hbWUpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3QnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBhIGxpc3QnO1xuICBpdGVtc1RvQWRkSW5UaGlzUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdJdGVtKHByb2plY3ROYW1lKTtcbiAgfSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbXNUb0FkZEluVGhpc1Byb2plY3QpO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG4gIGZvciAoY29uc3Qga2V5IG9mIHN0b3JhZ2VLZXlzKSB7XG4gICAgaWYgKGtleSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgZm9yIChjb25zdCBsaXN0IG9mIHN0b3JhZ2Vba2V5XSkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gbGlzdC50aXRsZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlDb21wb25lbnQoc2VjdGlvbik7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVMaXN0IGZyb20gJy4vZ2VuZXJhdGVMaXN0JztcbmltcG9ydCBuZXdJdGVtIGZyb20gJy4vaXRlbUZvcm0nO1xuaW1wb3J0IG5ld1Byb2plY3QgZnJvbSAnLi9wcm9qZWN0Rm9ybSc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uTGlzdCgpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuICBjb25zdCBhZGRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkU3ltYm9sLnRleHRDb250ZW50ID0gJ0FkZCBhIGxpc3QnO1xuICBhZGRTeW1ib2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdJdGVtKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZGRTeW1ib2wpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdOZXcgcHJvamVjdCc7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICBjb25zdCB2aWV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2aWV3TGlzdC50ZXh0Q29udGVudCA9ICdWaWV3IExpc3QnO1xuICB2aWV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZCB2aWV3IGxpc3QnKTtcbiAgICBnZW5lcmF0ZUxpc3Qoc3RvcmFnZSk7XG4gIH0pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHZpZXdMaXN0KTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QodGl0bGUpIHtcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZCBkZWxldGUgbGlzdCcpO1xuICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc3RvcmFnZSkpIHtcbiAgICAgICAgc3RvcmFnZVtrZXldID0gc3RvcmFnZVtrZXldLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aXRsZSAhPT0gdGl0bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgZ2V0RGF0ZSBmcm9tICcuL2dldERhdGUnO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCBwcmlvcml0eUNvbG9yIGZyb20gJy4vcHJpb3JpdHlDb2xvcic7XG5pbXBvcnQgZGVsZXRlTGlzdCBmcm9tICcuL2RlbGV0ZUxpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUxpc3Qoc3RvcmFnZSkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG5cbiAgZm9yIChjb25zdCBrZXkgb2Ygc3RvcmFnZUtleXMpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2Ygc3RvcmFnZVtrZXldKSB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2xpc3RHZW5lcmF0b3InKTtcbiAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlTGlzdChsaXN0LnRpdGxlKTtcbiAgICAgIH0pO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBsaXN0LnByaW9yaXR5O1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgIHByaW9yaXR5Q29sb3IobGlzdC5wcmlvcml0eSwgcHJpb3JpdHkpO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdC50aXRsZTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBsaXN0LmRlc2NyaXB0aW9uO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGdldERhdGUobGlzdC5kdWVEYXRlKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlDb21wb25lbnQobGlzdENvbnRhaW5lcik7XG4gIHJldHVybiBsaXN0Q29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlKSB7XG4gIGNvbnN0IGdpdmVuRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBjb25zdCBtb250aCA9IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLFxuICAgICdKdWwnLCAnQXVnJywgJ1NlcHQnLCAnT2N0JywgJ05vdicsICdEZWMnXVtnaXZlbkRhdGUuZ2V0TW9udGgoKV07XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBgJHtnaXZlbkRhdGUuZ2V0RGF0ZSgpfSAke21vbnRofSAke2dpdmVuRGF0ZS5nZXRGdWxsWWVhcigpfWA7XG5cbiAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59XG4iLCJpbXBvcnQgbWFpbiBmcm9tICcuL21haW5EaXYnO1xuaW1wb3J0IGJ1dHRvbkxpc3QgZnJvbSAnLi9idXR0b25MaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ1RvRG8gTGlzdCc7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uTGlzdCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKCkpO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCBhZGRJdGVtIGZyb20gJy4vdXBkYXRlU3RvcmFnZSc7XG5pbXBvcnQgZGlzcGxheUNvbXBvbmVudCBmcm9tICcuL2Rpc3BsYXlDb21wb25lbnQnO1xuaW1wb3J0IGdlbmVyYXRlTGlzdCBmcm9tICcuL2dlbmVyYXRlTGlzdCc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3SXRlbShwcm9qZWN0TmFtZSA9IG51bGwpIHtcbiAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBwcmlvcml0eSA9IFsnbG93JywgJ21lZCcsICdoaWdoJ107XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25ld0l0ZW0nKTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUaXRsZScpO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRGVzY3JpcHRpb24nKTtcblxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuXG4gIGNvbnN0IHByaW9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHByaW9yQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3InKTtcblxuICBwcmlvcml0eS5mb3JFYWNoKChwcmlvcikgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yO1xuICAgIHByaW9yQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH0pO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcbiAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRTdG9yYWdlID0gYWRkSXRlbShzdG9yYWdlLCBwcm9qZWN0TmFtZSk7XG4gICAgZ2VuZXJhdGVMaXN0KHVwZGF0ZWRTdG9yYWdlKTtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICB9KTtcblxuICBkaXNwbGF5Q29tcG9uZW50KHNlY3Rpb24pO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgcmV0dXJuIG1haW5EaXY7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuLyogZXNsaW50LWRpc2FibGUgZGVmYXVsdC1jYXNlICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmlvcml0eUNvbG9yKGl0ZW0sIGNvbXBvbmVudCkge1xuICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICBjYXNlICdsb3cnOlxuICAgICAgY29tcG9uZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoODUsIDE2OSwgMTkwKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtZWQnOlxuICAgICAgY29tcG9uZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjA2LCAxNjIsIDgxKSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdoaWdoJzpcbiAgICAgIGNvbXBvbmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDE5NCwgOTEsIDc4KSc7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gY29tcG9uZW50O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBhZGRQcm9qZWN0IGZyb20gJy4vYWRkUHJvamVjdCc7XG5pbXBvcnQgZGlzcGxheUNvbXBvbmVudCBmcm9tICcuL2Rpc3BsYXlDb21wb25lbnQnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld1Byb2plY3RGb3JtKCkge1xuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlUHJvamVjdCcpO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG4gIGZvciAoY29uc3Qga2V5IG9mIHN0b3JhZ2VLZXlzKSB7XG4gICAgaWYgKGtleSAhPT0gJ2RlZmF1bHQnKSB7IHNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdChrZXkpKTsgfVxuICB9XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnYWN0aW9uJywgJ3N1Ym1pdCcpO1xuXG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0TmFtZScpO1xuICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Byb2plY3QgTmFtZScpO1xuXG4gIGNvbnN0IGNsaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNsaWNrLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xpY2snKTtcbiAgY2xpY2sudGV4dENvbnRlbnQgPSAnT2snO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGNsaWNrKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBjbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGVhY2hQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJykudmFsdWU7XG4gICAgYWRkUHJvamVjdChlYWNoUHJvamVjdCk7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG4gIGRpc3BsYXlDb21wb25lbnQoc2VjdGlvbik7XG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0ge307XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlU3RvcmFnZShzdG9yYWdlLCBwcm9qZWN0TmFtZSkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICBjb25zdCBkZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2MnKS52YWx1ZTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gIGNvbnN0IHByaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yJykudmFsdWU7XG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3ROYW1lLmlzVHJ1c3RlZCA9PT0gdHJ1ZSA/ICdkZWZhdWx0JyA6IHByb2plY3ROYW1lO1xuXG4gIGlmICghT2JqZWN0LmtleXMoc3RvcmFnZSkuaW5jbHVkZXMocHJvamVjdFRpdGxlKSkge1xuICAgIHN0b3JhZ2VbcHJvamVjdFRpdGxlXSA9IFt7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjLFxuICAgICAgZHVlRGF0ZTogZGF0ZSxcbiAgICAgIHByaW9yaXR5OiBwcmlvcixcbiAgICB9LFxuICAgIF07XG4gIH0gZWxzZSB7XG4gICAgc3RvcmFnZVtwcm9qZWN0VGl0bGVdLnB1c2goe1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgIGR1ZURhdGU6IGRhdGUsXG4gICAgICBwcmlvcml0eTogcHJpb3IsXG4gICAgfSk7XG4gIH1cblxuICBjb25zb2xlLmxvZyhzdG9yYWdlKTtcblxuICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWUoKSk7XG5cblxuLyo8IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuICA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICA8dGl0bGU+VG9EbyBMaXN0PC90aXRsZT5cbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XG4gIDxzY3JpcHQgZGVmZXIgc3JjPVwibWFpbi5qc1wiPjwvc2NyaXB0PjwvaGVhZD5cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJzdHlsZS5jc3NcIi8+XG4gIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi4vc3JjL2Fzc2V0cy9sb2dvLnBuZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIi8+XG4gIDxib2R5PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PC9kaXY+XG4gIDwvYm9keT5cbjwvaHRtbD4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9