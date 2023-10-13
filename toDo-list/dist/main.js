/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/addItem.js":
/*!***********************************!*\
  !*** ./src/components/addItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewItem)
/* harmony export */ });
/* harmony import */ var _generateList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateList */ "./src/components/generateList.js");


function addNewItem(storage, projectName) {

    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const date = document.getElementById('date').value;
    const prior = document.getElementById('prior').value;
    const projectTitle = projectName === undefined ? 'default' : projectName;

    storage.push({
        "project": projectTitle,
        "title": title,
        "description": desc,
        "dueDate": date,
        "priority": prior
    });

    console.log(storage);

    (0,_generateList__WEBPACK_IMPORTED_MODULE_0__["default"])(storage);

    return storage;
}

/***/ }),

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


function addNewProject(projectName) {
    const section = document.createElement('div');
    // section.setAttribute('id', projectName);
    section.classList.add('newProject');
    
    const title = document.createElement('h2');
    title.textContent = projectName;
    section.appendChild(title);

    const itemsToAddInThisProject = document.createElement('button');
    itemsToAddInThisProject.textContent = 'Add a list';
    itemsToAddInThisProject.addEventListener('click', _itemForm__WEBPACK_IMPORTED_MODULE_0__["default"]);
    section.appendChild(itemsToAddInThisProject);

    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(section);

    return section;
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



function generateList(storage) {
    const container = document.createElement('div');
    container.classList.add('listContainer');

    storage.forEach((list) => {
        const section = document.createElement('div');
        section.classList.add('listGenerator');
        section.addEventListener('click', () => {
            section.classList.toggle('done');
        })
        
        const priority = document.createElement('p');
        priority.textContent = list["priority"];
        priority.classList.add("priority");
        switch(list["priority"]) {
            case 'low': 
                priority.style.backgroundColor = 'rgb(85, 169, 190)';
                break;
            case 'med':
                priority.style.backgroundColor = 'rgb(206, 162, 81)';
                break;
            case 'high':
                priority.style.backgroundColor = 'rgb(194, 91, 78)';
                break;
        }
        section.appendChild(priority);

        const title = document.createElement('h3');
        title.textContent = list["title"];
        title.classList.add("title");
        section.appendChild(title);

        const desc = document.createElement('p');
        desc.textContent = list["description"];
        desc.classList.add("desc");
        section.appendChild(desc);

        const date = document.createElement('p');
        const dueDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__["default"])(list["dueDate"]);
        date.textContent = dueDate;
        date.classList.add("date");
        section.appendChild(date);  

        container.appendChild(section);
    });

    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(container);

    return container;
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
    let givenDate = new Date(date);
    let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][givenDate.getMonth()];
    let formattedDate = `${givenDate.getDay()} ${month} ${givenDate.getFullYear()}`;

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
/* harmony export */   "default": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _itemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemForm */ "./src/components/itemForm.js");
/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm */ "./src/components/projectForm.js");



function welcome() {
    const section = document.createElement('div');
    section.classList.add('welcome');

    const addSymbol = document.createElement('button');
    addSymbol.textContent = 'Add a todo list';
    addSymbol.addEventListener('click', _itemForm__WEBPACK_IMPORTED_MODULE_0__["default"]);
    section.appendChild(addSymbol);

    const project = document.createElement('button');
    project.textContent = 'Create a new project';
    project.addEventListener('click', _projectForm__WEBPACK_IMPORTED_MODULE_1__["default"]);
    section.appendChild(project);

    return section;
}

function main() {
    const main = document.createElement('div');
    main.setAttribute('id','main');
    main.classList.add('main');
    return main;
}

function display() {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    heading.textContent = 'ToDo List';
    content.appendChild(heading);
    content.appendChild(welcome());
    content.appendChild(main());
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
/* harmony export */   "default": () => (/* binding */ displayForm)
/* harmony export */ });
/* harmony import */ var _addItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addItem */ "./src/components/addItem.js");


let storage = [];

function newItem(projectName) {
    const priority = ["low", "med", "high"];
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

    priority.forEach(prior => {
        const option = document.createElement('option');
        option.textContent = prior;
        priorContainer.appendChild(option);
    });

    const submit = document.createElement('button');
    submit.setAttribute('id', 'submit');
    submit.textContent = 'Submit';

    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priorContainer);
    form.appendChild(submit);

    section.appendChild(form);

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        (0,_addItem__WEBPACK_IMPORTED_MODULE_0__["default"])(storage, projectName);
        form.innerHTML = '';
    });

    return section;
}

function displayForm() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(newItem());
}

/***/ }),

/***/ "./src/components/projectForm.js":
/*!***************************************!*\
  !*** ./src/components/projectForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/components/addProject.js");


function newProjectForm() {
    const section = document.createElement('div');
    section.classList.add('createProject');

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
        const projectName = document.getElementById('projectName').value;
        (0,_addProject__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName);
        form.innerHTML = '';
    });

    return section;
}

function display() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(newProjectForm());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7O0FBRTNCOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQSxJQUFJLHlEQUFZOztBQUVoQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN2QmlDOztBQUVsQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0QsaURBQU87QUFDN0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmdDOztBQUVqQjtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixvREFBTztBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyRGU7QUFDZjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsb0JBQW9CLEVBQUUsT0FBTyxFQUFFLHdCQUF3Qjs7QUFFbEY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JpQztBQUNNOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxpREFBTztBQUMvQzs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLG9EQUFVO0FBQ2hEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkNnQzs7QUFFaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxvREFBTztBQUNmO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFVO0FBQ2xCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDOztBQUV4QywwQkFBMEIsNERBQU8sSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2FkZEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvYWRkUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9nZW5lcmF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2V0RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2l0ZW1Gb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2VuZXJhdGVMaXN0IGZyb20gXCIuL2dlbmVyYXRlTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGROZXdJdGVtKHN0b3JhZ2UsIHByb2plY3ROYW1lKSB7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzYycpLnZhbHVlO1xuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yJykudmFsdWU7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdE5hbWUgPT09IHVuZGVmaW5lZCA/ICdkZWZhdWx0JyA6IHByb2plY3ROYW1lO1xuXG4gICAgc3RvcmFnZS5wdXNoKHtcbiAgICAgICAgXCJwcm9qZWN0XCI6IHByb2plY3RUaXRsZSxcbiAgICAgICAgXCJ0aXRsZVwiOiB0aXRsZSxcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBkZXNjLFxuICAgICAgICBcImR1ZURhdGVcIjogZGF0ZSxcbiAgICAgICAgXCJwcmlvcml0eVwiOiBwcmlvclxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coc3RvcmFnZSk7XG5cbiAgICBnZW5lcmF0ZUxpc3Qoc3RvcmFnZSk7XG5cbiAgICByZXR1cm4gc3RvcmFnZTtcbn0iLCJpbXBvcnQgbmV3SXRlbSBmcm9tICcuL2l0ZW1Gb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0TmFtZSk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCduZXdQcm9qZWN0Jyk7XG4gICAgXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBpdGVtc1RvQWRkSW5UaGlzUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0LnRleHRDb250ZW50ID0gJ0FkZCBhIGxpc3QnO1xuICAgIGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV3SXRlbSk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpdGVtc1RvQWRkSW5UaGlzUHJvamVjdCk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59IiwiXG5pbXBvcnQgZ2V0RGF0ZSBmcm9tIFwiLi9nZXREYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlTGlzdChzdG9yYWdlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xpc3RDb250YWluZXInKTtcblxuICAgIHN0b3JhZ2UuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbGlzdEdlbmVyYXRvcicpO1xuICAgICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCdkb25lJyk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBsaXN0W1wicHJpb3JpdHlcIl07XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiKTtcbiAgICAgICAgc3dpdGNoKGxpc3RbXCJwcmlvcml0eVwiXSkge1xuICAgICAgICAgICAgY2FzZSAnbG93JzogXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYig4NSwgMTY5LCAxOTApJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21lZCc6XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigyMDYsIDE2MiwgODEpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMTk0LCA5MSwgNzgpJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdFtcInRpdGxlXCJdO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidGl0bGVcIik7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2MudGV4dENvbnRlbnQgPSBsaXN0W1wiZGVzY3JpcHRpb25cIl07XG4gICAgICAgIGRlc2MuY2xhc3NMaXN0LmFkZChcImRlc2NcIik7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzYyk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGdldERhdGUobGlzdFtcImR1ZURhdGVcIl0pO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkYXRlKTsgIFxuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRlKGRhdGUpIHtcbiAgICBsZXQgZ2l2ZW5EYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgbGV0IG1vbnRoID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsXG4gICAgXCJKdWxcIiwgXCJBdWdcIiwgXCJTZXB0XCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdW2dpdmVuRGF0ZS5nZXRNb250aCgpXTtcbiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGAke2dpdmVuRGF0ZS5nZXREYXkoKX0gJHttb250aH0gJHtnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKX1gO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG59IiwiaW1wb3J0IG5ld0l0ZW0gZnJvbSAnLi9pdGVtRm9ybSc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuL3Byb2plY3RGb3JtJztcblxuZnVuY3Rpb24gd2VsY29tZSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG5cbiAgICBjb25zdCBhZGRTeW1ib2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRTeW1ib2wudGV4dENvbnRlbnQgPSAnQWRkIGEgdG9kbyBsaXN0JztcbiAgICBhZGRTeW1ib2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXdJdGVtKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFN5bWJvbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgYSBuZXcgcHJvamVjdCc7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywnbWFpbicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnVG9EbyBMaXN0JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4oKSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiaW1wb3J0IGFkZEl0ZW0gZnJvbSBcIi4vYWRkSXRlbVwiO1xuXG5sZXQgc3RvcmFnZSA9IFtdO1xuXG5mdW5jdGlvbiBuZXdJdGVtKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBbXCJsb3dcIiwgXCJtZWRcIiwgXCJoaWdoXCJdO1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ25ld0l0ZW0nKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICdzdWJtaXQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndGl0bGUnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1RpdGxlJyk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uJyk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcblxuICAgIGNvbnN0IHByaW9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgcHJpb3JDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcicpO1xuXG4gICAgcHJpb3JpdHkuZm9yRWFjaChwcmlvciA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcjtcbiAgICAgICAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHByaW9yQ29udGFpbmVyKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRJdGVtKHN0b3JhZ2UsIHByb2plY3ROYW1lKTtcbiAgICAgICAgZm9ybS5pbm5lckhUTUwgPSAnJztcbiAgICB9KTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Rm9ybSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld0l0ZW0oKSk7XG59IiwiaW1wb3J0IGFkZFByb2plY3QgZnJvbSBcIi4vYWRkUHJvamVjdFwiO1xuXG5mdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGVQcm9qZWN0Jyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdtZXRob2QnLCAncG9zdCcpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnc3VibWl0Jyk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3ROYW1lJyk7XG4gICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdQcm9qZWN0IE5hbWUnKTtcblxuICAgIGNvbnN0IGNsaWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xpY2suc2V0QXR0cmlidXRlKCdpZCcsICdjbGljaycpO1xuICAgIGNsaWNrLnRleHRDb250ZW50ID0gJ09rJztcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xpY2spO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjbGljay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKS52YWx1ZTtcbiAgICAgICAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGZvcm0uaW5uZXJIVE1MID0gJyc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKCkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXkgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGlzcGxheSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=