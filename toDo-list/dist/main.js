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

/***/ "./src/components/editList.js":
/*!************************************!*\
  !*** ./src/components/editList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editList)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/components/storage.js");
/* eslint-disable indent */


function editList(title) {
    for(const key of Object.keys(_storage__WEBPACK_IMPORTED_MODULE_0__.storage)) {
        _storage__WEBPACK_IMPORTED_MODULE_0__.storage[key].forEach(item => {
            if(item.title === title) {
                console.log('entered');
            }
        });
    }
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
/* harmony import */ var _editList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editList */ "./src/components/editList.js");
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

      const editButton = document.createElement('button');
      editButton.classList.add('editButton');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        (0,_editList__WEBPACK_IMPORTED_MODULE_4__["default"])(list.title);
      });
      section.appendChild(editButton);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDc0M7QUFDWTtBQUNkOztBQUVyQjtBQUNmO0FBQ0E7O0FBRUEsa0NBQWtDLDZDQUFPO0FBQ3pDO0FBQ0EsNkJBQTZCLG9CQUFvQix1REFBVTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQVU7QUFDZDtBQUNBLEdBQUc7QUFDSCxFQUFFLDZEQUFnQjtBQUNsQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDTzs7Ozs7Ozs7Ozs7Ozs7O0FDRFA7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQzs7QUFFckMsMEJBQTBCLDREQUFJOzs7QUFHOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2J1dHRvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZGVsZXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9kaXNwbGF5Q29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2VkaXRMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dlbmVyYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9nZXREYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaXRlbUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbkRpdi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcmlvcml0eUNvbG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdXBkYXRlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbmltcG9ydCBuZXdJdGVtIGZyb20gJy4vaXRlbUZvcm0nO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdE5hbWUpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25ld1Byb2plY3QnKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGNvbnN0IGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBhIGxpc3QnO1xuICBpdGVtc1RvQWRkSW5UaGlzUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdJdGVtKHByb2plY3ROYW1lKTtcbiAgfSk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaXRlbXNUb0FkZEluVGhpc1Byb2plY3QpO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG4gIGZvciAoY29uc3Qga2V5IG9mIHN0b3JhZ2VLZXlzKSB7XG4gICAgaWYgKGtleSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgZm9yIChjb25zdCBsaXN0IG9mIHN0b3JhZ2Vba2V5XSkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLnRleHRDb250ZW50ID0gbGlzdC50aXRsZTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlDb21wb25lbnQoc2VjdGlvbik7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCJpbXBvcnQgZ2VuZXJhdGVMaXN0IGZyb20gJy4vZ2VuZXJhdGVMaXN0JztcbmltcG9ydCBuZXdJdGVtIGZyb20gJy4vaXRlbUZvcm0nO1xuaW1wb3J0IG5ld1Byb2plY3QgZnJvbSAnLi9wcm9qZWN0Rm9ybSc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uTGlzdCgpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3dlbGNvbWUnKTtcblxuICBjb25zdCBhZGRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkU3ltYm9sLnRleHRDb250ZW50ID0gJ0FkZCBhIGxpc3QnO1xuICBhZGRTeW1ib2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdJdGVtKTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZGRTeW1ib2wpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdOZXcgcHJvamVjdCc7XG4gIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdQcm9qZWN0KTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0KTtcblxuICBjb25zdCB2aWV3TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB2aWV3TGlzdC50ZXh0Q29udGVudCA9ICdWaWV3IExpc3QnO1xuICB2aWV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZCB2aWV3IGxpc3QnKTtcbiAgICBnZW5lcmF0ZUxpc3Qoc3RvcmFnZSk7XG4gIH0pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHZpZXdMaXN0KTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QodGl0bGUpIHtcbiAgICBjb25zb2xlLmxvZygnZW50ZXJlZCBkZWxldGUgbGlzdCcpO1xuICAgIGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc3RvcmFnZSkpIHtcbiAgICAgICAgc3RvcmFnZVtrZXldID0gc3RvcmFnZVtrZXldLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aXRsZSAhPT0gdGl0bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDb21wb25lbnQoY29tcG9uZW50KSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29tcG9uZW50KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVkaXRMaXN0KHRpdGxlKSB7XG4gICAgZm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzdG9yYWdlKSkge1xuICAgICAgICBzdG9yYWdlW2tleV0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VudGVyZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgZ2V0RGF0ZSBmcm9tICcuL2dldERhdGUnO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCBwcmlvcml0eUNvbG9yIGZyb20gJy4vcHJpb3JpdHlDb2xvcic7XG5pbXBvcnQgZGVsZXRlTGlzdCBmcm9tICcuL2RlbGV0ZUxpc3QnO1xuaW1wb3J0IGVkaXRMaXN0IGZyb20gJy4vZWRpdExpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZUxpc3Qoc3RvcmFnZSkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbGlzdENvbnRhaW5lcicpO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG5cbiAgZm9yIChjb25zdCBrZXkgb2Ygc3RvcmFnZUtleXMpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBrZXk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2Ygc3RvcmFnZVtrZXldKSB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2xpc3RHZW5lcmF0b3InKTtcbiAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZUJ1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAneCc7XG4gICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlTGlzdChsaXN0LnRpdGxlKTtcbiAgICAgIH0pO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBsaXN0LnByaW9yaXR5O1xuICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKTtcbiAgICAgIHByaW9yaXR5Q29sb3IobGlzdC5wcmlvcml0eSwgcHJpb3JpdHkpO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdC50aXRsZTtcbiAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBsaXN0LmRlc2NyaXB0aW9uO1xuICAgICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2MpO1xuXG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGdldERhdGUobGlzdC5kdWVEYXRlKTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXRCdXR0b24nKTtcbiAgICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0TGlzdChsaXN0LnRpdGxlKTtcbiAgICAgIH0pO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5Q29tcG9uZW50KGxpc3RDb250YWluZXIpO1xuICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGggPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJyxcbiAgICAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11bZ2l2ZW5EYXRlLmdldE1vbnRoKCldO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7Z2l2ZW5EYXRlLmdldERhdGUoKX0gJHttb250aH0gJHtnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuIiwiaW1wb3J0IG1haW4gZnJvbSAnLi9tYWluRGl2JztcbmltcG9ydCBidXR0b25MaXN0IGZyb20gJy4vYnV0dG9uTGlzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdUb0RvIExpc3QnO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkxpc3QoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbigpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iLCJpbXBvcnQgYWRkSXRlbSBmcm9tICcuL3VwZGF0ZVN0b3JhZ2UnO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCBnZW5lcmF0ZUxpc3QgZnJvbSAnLi9nZW5lcmF0ZUxpc3QnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vc3RvcmFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0l0ZW0ocHJvamVjdE5hbWUgPSBudWxsKSB7XG4gIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBbJ2xvdycsICdtZWQnLCAnaGlnaCddO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCduZXdJdGVtJyk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGl0bGUnKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcblxuICBjb25zdCBwcmlvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBwcmlvckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3ByaW9yJyk7XG5cbiAgcHJpb3JpdHkuZm9yRWFjaCgocHJpb3IpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcjtcbiAgICBwcmlvckNvbnRhaW5lci5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcblxuICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XG4gIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKGJyLmNsb25lTm9kZSgpKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvckNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB1cGRhdGVkU3RvcmFnZSA9IGFkZEl0ZW0oc3RvcmFnZSwgcHJvamVjdE5hbWUpO1xuICAgIGdlbmVyYXRlTGlzdCh1cGRhdGVkU3RvcmFnZSk7XG4gICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgfSk7XG5cbiAgZGlzcGxheUNvbXBvbmVudChzZWN0aW9uKTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gIHJldHVybiBtYWluRGl2O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGRlZmF1bHQtY2FzZSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpb3JpdHlDb2xvcihpdGVtLCBjb21wb25lbnQpIHtcbiAgc3dpdGNoIChpdGVtKSB7XG4gICAgY2FzZSAnbG93JzpcbiAgICAgIGNvbXBvbmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDg1LCAxNjksIDE5MCknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVkJzpcbiAgICAgIGNvbXBvbmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIwNiwgMTYyLCA4MSknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaGlnaCc6XG4gICAgICBjb21wb25lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxOTQsIDkxLCA3OCknO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tICcuL2FkZFByb2plY3QnO1xuaW1wb3J0IGRpc3BsYXlDb21wb25lbnQgZnJvbSAnLi9kaXNwbGF5Q29tcG9uZW50JztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVByb2plY3QnKTtcblxuICBjb25zdCBzdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JhZ2UpO1xuICBmb3IgKGNvbnN0IGtleSBvZiBzdG9yYWdlS2V5cykge1xuICAgIGlmIChrZXkgIT09ICdkZWZhdWx0JykgeyBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFByb2plY3Qoa2V5KSk7IH1cbiAgfVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBmb3JtLnNldEF0dHJpYnV0ZSgnbWV0aG9kJywgJ3Bvc3QnKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcblxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdE5hbWUnKTtcbiAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcblxuICBjb25zdCBjbGljayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjbGljay5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsaWNrJyk7XG4gIGNsaWNrLnRleHRDb250ZW50ID0gJ09rJztcblxuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjbGljayk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgY2xpY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBlYWNoUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpLnZhbHVlO1xuICAgIGFkZFByb2plY3QoZWFjaFByb2plY3QpO1xuICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gIH0pO1xuICBkaXNwbGF5Q29tcG9uZW50KHNlY3Rpb24pO1xuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IHt9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2Uoc3RvcmFnZSwgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcicpLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0TmFtZS5pc1RydXN0ZWQgPT09IHRydWUgPyAnZGVmYXVsdCcgOiBwcm9qZWN0TmFtZTtcblxuICBpZiAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmluY2x1ZGVzKHByb2plY3RUaXRsZSkpIHtcbiAgICBzdG9yYWdlW3Byb2plY3RUaXRsZV0gPSBbe1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgIGR1ZURhdGU6IGRhdGUsXG4gICAgICBwcmlvcml0eTogcHJpb3IsXG4gICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHN0b3JhZ2VbcHJvamVjdFRpdGxlXS5wdXNoKHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICBkdWVEYXRlOiBkYXRlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yLFxuICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xuICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWUoKSk7XG5cblxuLyo8IURPQ1RZUEUgaHRtbD5cbjxodG1sPlxuICA8aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICA8dGl0bGU+VG9EbyBMaXN0PC90aXRsZT5cbiAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XG4gIDxzY3JpcHQgZGVmZXIgc3JjPVwibWFpbi5qc1wiPjwvc2NyaXB0PjwvaGVhZD5cbiAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCJzdHlsZS5jc3NcIi8+XG4gIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi4vc3JjL2Fzc2V0cy9sb2dvLnBuZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIi8+XG4gIDxib2R5PlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+PC9kaXY+XG4gIDwvYm9keT5cbjwvaHRtbD4qL1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9