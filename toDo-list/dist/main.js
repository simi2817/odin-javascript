/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/createElement/createElement.js":
/*!*******************************************************!*\
  !*** ./src/components/createElement/createElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable indent */
function createElement(element, options = {}) {
    const { text, className, attributes } = options;
    const newElement = document.createElement(element);
    if (text)
        newElement.textContent = text;
    if (className)
        newElement.classList.add(className);
    if (attributes && attributes.length > 0) {
        for (const attribute of attributes)
            newElement.setAttribute(attribute.name, attribute.value);
    }
    return newElement;
}


/***/ }),

/***/ "./src/components/display/displayComponent.js":
/*!****************************************************!*\
  !*** ./src/components/display/displayComponent.js ***!
  \****************************************************/
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

/***/ "./src/components/home/buttonList.js":
/*!*******************************************!*\
  !*** ./src/components/home/buttonList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buttonList)
/* harmony export */ });
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");
/* harmony import */ var _list_generateList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../list/generateList */ "./src/components/list/generateList.js");
/* harmony import */ var _list_itemForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list/itemForm */ "./src/components/list/itemForm.js");
/* harmony import */ var _project_projectForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project/projectForm */ "./src/components/project/projectForm.js");





function buttonList() {
  const section = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', { className: 'welcome' });

  const addSymbol = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', { text: 'Add a list' });
  addSymbol.addEventListener('click', _list_itemForm__WEBPACK_IMPORTED_MODULE_2__["default"]);
  section.appendChild(addSymbol);

  const project = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', { text: 'New project' });
  project.addEventListener('click', _project_projectForm__WEBPACK_IMPORTED_MODULE_3__["default"]);
  section.appendChild(project);

  const viewList = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('button', { text: 'View List' });
  viewList.addEventListener('click', _list_generateList__WEBPACK_IMPORTED_MODULE_1__["default"]);
  section.appendChild(viewList);

  return section;
}


/***/ }),

/***/ "./src/components/home/home.js":
/*!*************************************!*\
  !*** ./src/components/home/home.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _mainDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDiv */ "./src/components/home/mainDiv.js");
/* harmony import */ var _buttonList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonList */ "./src/components/home/buttonList.js");
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");




function home() {
  const content = document.getElementById('content');
  const heading = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_2__["default"])('h1', { text: 'ToDo List' });
  content.appendChild(heading);
  content.appendChild((0,_buttonList__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_mainDiv__WEBPACK_IMPORTED_MODULE_0__["default"])());
  return content;
}


/***/ }),

/***/ "./src/components/home/mainDiv.js":
/*!****************************************!*\
  !*** ./src/components/home/mainDiv.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");


function main() {
  const mainDiv = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('div', { className: 'main', attributes: [{ name: 'id', value: 'main' }] });
  return mainDiv;
}


/***/ }),

/***/ "./src/components/list/deleteList.js":
/*!*******************************************!*\
  !*** ./src/components/list/deleteList.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteList)
/* harmony export */ });
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage */ "./src/components/storage/storage.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */


function deleteList(title) {
    for (const key of Object.keys(_storage_storage__WEBPACK_IMPORTED_MODULE_0__.storage)) {
        _storage_storage__WEBPACK_IMPORTED_MODULE_0__.storage[key] = _storage_storage__WEBPACK_IMPORTED_MODULE_0__.storage[key].filter((item) => item.title !== title);
    }
    return _storage_storage__WEBPACK_IMPORTED_MODULE_0__.storage;
}


/***/ }),

/***/ "./src/components/list/editList.js":
/*!*****************************************!*\
  !*** ./src/components/list/editList.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editList)
/* harmony export */ });
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/storage */ "./src/components/storage/storage.js");
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */


function editList(title) {
    for(const key of Object.keys(_storage_storage__WEBPACK_IMPORTED_MODULE_0__.storage)) {
        _storage_storage__WEBPACK_IMPORTED_MODULE_0__.storage[key].forEach(item => {
            if(item.title === title) {
                console.log('entered');
            }
        });
    }
}


/***/ }),

/***/ "./src/components/list/generateList.js":
/*!*********************************************!*\
  !*** ./src/components/list/generateList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateList)
/* harmony export */ });
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDate */ "./src/components/list/getDate.js");
/* harmony import */ var _display_displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/displayComponent */ "./src/components/display/displayComponent.js");
/* harmony import */ var _priorityColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorityColor */ "./src/components/list/priorityColor.js");
/* harmony import */ var _deleteList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleteList */ "./src/components/list/deleteList.js");
/* harmony import */ var _editList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editList */ "./src/components/list/editList.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storage/storage */ "./src/components/storage/storage.js");
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");
/* eslint-disable no-restricted-syntax */








function generateList() {
  const listContainer = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { class: 'listContainer' });

  const storageKeys = Object.keys(_storage_storage__WEBPACK_IMPORTED_MODULE_5__.storage);

  for (const key of storageKeys) {
    const projectName = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('h2', { text: key });
    listContainer.appendChild(projectName);

    for (const list of _storage_storage__WEBPACK_IMPORTED_MODULE_5__.storage[key]) {
      const section = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('div', { className: 'listGenerator' });
      section.addEventListener('click', () => {
        section.classList.toggle('done');
      });

      const closeButton = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('button', { text: 'x', className: 'closeButton' });
      closeButton.addEventListener('click', () => {
        (0,_deleteList__WEBPACK_IMPORTED_MODULE_3__["default"])(list.title);
      });
      section.appendChild(closeButton);

      const priority = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('p', { text: list.priority, className: 'priority' });
      (0,_priorityColor__WEBPACK_IMPORTED_MODULE_2__["default"])(list.priority, priority);
      section.appendChild(priority);

      const title = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('h3', { text: list.title, className: 'title' });
      section.appendChild(title);

      const desc = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('p', { text: list.description, className: 'desc' });
      section.appendChild(desc);

      const dueDate = (0,_getDate__WEBPACK_IMPORTED_MODULE_0__["default"])(list.dueDate);
      const date = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('p', { text: dueDate, className: 'date' });
      section.appendChild(date);

      const editButton = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_6__["default"])('button', { text: 'Edit', className: 'editButton' });
      editButton.addEventListener('click', () => {
        (0,_editList__WEBPACK_IMPORTED_MODULE_4__["default"])(list.title);
      });
      section.appendChild(editButton);

      listContainer.appendChild(section);
    }
  }

  (0,_display_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(listContainer);
  return listContainer;
}


/***/ }),

/***/ "./src/components/list/getDate.js":
/*!****************************************!*\
  !*** ./src/components/list/getDate.js ***!
  \****************************************/
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

/***/ "./src/components/list/itemForm.js":
/*!*****************************************!*\
  !*** ./src/components/list/itemForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newItem)
/* harmony export */ });
/* harmony import */ var _storage_updateStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage/updateStorage */ "./src/components/storage/updateStorage.js");
/* harmony import */ var _display_displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/displayComponent */ "./src/components/display/displayComponent.js");
/* harmony import */ var _generateList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateList */ "./src/components/list/generateList.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storage/storage */ "./src/components/storage/storage.js");
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");
/* eslint-disable no-trailing-spaces */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */






function newItem(projectName = null) {
  const br = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('br');
  const priority = ['low', 'med', 'high'];

  const section = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('div', { 
    className: 'newItem' });

  const form = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('form', { 
    attributes: [
      {name: 'method', value: 'post'},
      {name: 'action', value: 'submit'}
    ]});

  const title = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('input', { 
    attributes: [
      {name: 'type', value: 'text'},
      {name: 'id', value: 'title'},
      {name: 'placeholder', value: 'Title'}
    ]});

  const description = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('input', { 
    attributes: [
      {name: 'type', value: 'text'},
      {name: 'id', value: 'desc'},
      {name: 'placeholder', value: 'Description'}
    ]});

  const dueDate = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('input', { 
    attributes: [
      {name: 'type', value: 'date'},
      {name: 'id', value: 'date'}
    ]});

  const priorContainer = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('select', { attributes: [{name: 'id', value: 'prior'}]});

  priority.forEach((prior) => {
    const option = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('option', { text: prior});
    priorContainer.appendChild(option);
  });

  const submit = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_4__["default"])('button', {
    text: 'Submit',
    attributes: [{name: 'id', value: 'submit'}]
  });

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
    const updatedStorage = (0,_storage_updateStorage__WEBPACK_IMPORTED_MODULE_0__["default"])(_storage_storage__WEBPACK_IMPORTED_MODULE_3__.storage, projectName);
    (0,_generateList__WEBPACK_IMPORTED_MODULE_2__["default"])(updatedStorage);
    form.innerHTML = '';
  });

  (0,_display_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(section);

  return section;
}


/***/ }),

/***/ "./src/components/list/priorityColor.js":
/*!**********************************************!*\
  !*** ./src/components/list/priorityColor.js ***!
  \**********************************************/
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

/***/ "./src/components/project/addProject.js":
/*!**********************************************!*\
  !*** ./src/components/project/addProject.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewProject)
/* harmony export */ });
/* harmony import */ var _list_itemForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../list/itemForm */ "./src/components/list/itemForm.js");
/* harmony import */ var _display_displayComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../display/displayComponent */ "./src/components/display/displayComponent.js");
/* harmony import */ var _checkExistingProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkExistingProjects */ "./src/components/project/checkExistingProjects.js");
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");
/* eslint-disable no-restricted-syntax */





function addNewProject(projectName) {
  const section = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])('div', { className: 'newProject', attributes: [{ name: 'id', value: projectName }] });

  const title = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])('h2', { text: projectName });
  section.appendChild(title);

  const itemsToAddInThisProject = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_3__["default"])('button', { text: 'Add a list' });
  itemsToAddInThisProject.addEventListener('click', () => {
    (0,_list_itemForm__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName);
  });
  section.appendChild(itemsToAddInThisProject);

  (0,_checkExistingProjects__WEBPACK_IMPORTED_MODULE_2__["default"])(section, projectName);

  (0,_display_displayComponent__WEBPACK_IMPORTED_MODULE_1__["default"])(section);

  return section;
}


/***/ }),

/***/ "./src/components/project/checkExistingProjects.js":
/*!*********************************************************!*\
  !*** ./src/components/project/checkExistingProjects.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkExistingProjects)
/* harmony export */ });
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storage */ "./src/components/storage/storage.js");
/* eslint-disable no-restricted-syntax */




/* eslint-disable indent */
function checkExistingProjects(component, projectName) {
    const storageKeys = Object.keys(_storage_storage__WEBPACK_IMPORTED_MODULE_1__.storage);
    for (const key of storageKeys) {
      if (key === projectName) {
        const ul = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('ul');
        component.appendChild(ul);
        for (const list of _storage_storage__WEBPACK_IMPORTED_MODULE_1__.storage[key]) {
          const li = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('li', { text: list.title });
          ul.appendChild(li);
        }
      }
    }
    return component;
}


/***/ }),

/***/ "./src/components/project/ifClicked.js":
/*!*********************************************!*\
  !*** ./src/components/project/ifClicked.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ifClicked)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/components/project/addProject.js");
/* eslint-disable no-param-reassign */


function ifClicked(component, form) {
  component.addEventListener('click', (e) => {
    e.preventDefault();
    const eachProject = document.getElementById('projectName').value;
    (0,_addProject__WEBPACK_IMPORTED_MODULE_0__["default"])(eachProject);
    form.innerHTML = '';
  });
}


/***/ }),

/***/ "./src/components/project/projectForm.js":
/*!***********************************************!*\
  !*** ./src/components/project/projectForm.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newProjectForm)
/* harmony export */ });
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addProject */ "./src/components/project/addProject.js");
/* harmony import */ var _createElement_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement/createElement */ "./src/components/createElement/createElement.js");
/* harmony import */ var _display_displayComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/displayComponent */ "./src/components/display/displayComponent.js");
/* harmony import */ var _ifClicked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ifClicked */ "./src/components/project/ifClicked.js");
/* harmony import */ var _storage_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../storage/storage */ "./src/components/storage/storage.js");
/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable no-restricted-syntax */






function newProjectForm() {
  const section = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('div', { className: 'createProject' });

  const storageKeys = Object.keys(_storage_storage__WEBPACK_IMPORTED_MODULE_4__.storage);
  for (const key of storageKeys) {
    if (key !== 'default')
      section.appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_0__["default"])(key));
  }
  const form = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('form', { attributes: [
    {name: 'method', value: 'post'},
    {name: 'action', value: 'submit'}
  ]});

  const projectName = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('input', { attributes: [
    {name: 'type', value: 'text'},
    {name: 'id', value: 'projectName'},
    {name: 'placeholder', value: 'Project Name'}
  ]});

  const click = (0,_createElement_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])('button', { text: 'Ok', attributes: [{ name: 'id', value: 'click' }] });

  form.appendChild(projectName);
  form.appendChild(click);
  section.appendChild(form);

  (0,_ifClicked__WEBPACK_IMPORTED_MODULE_3__["default"])(click, form);

  (0,_display_displayComponent__WEBPACK_IMPORTED_MODULE_2__["default"])(section);
  return section;
}


/***/ }),

/***/ "./src/components/storage/storage.js":
/*!*******************************************!*\
  !*** ./src/components/storage/storage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
// eslint-disable-next-line import/prefer-default-export
const storage = {};


/***/ }),

/***/ "./src/components/storage/updateStorage.js":
/*!*************************************************!*\
  !*** ./src/components/storage/updateStorage.js ***!
  \*************************************************/
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
/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/home/home */ "./src/components/home/home.js");


document.body.appendChild((0,_components_home_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjBDOztBQUUxQywwQkFBMEIsaUVBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9jcmVhdGVFbGVtZW50L2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZGlzcGxheS9kaXNwbGF5Q29tcG9uZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2hvbWUvYnV0dG9uTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvaG9tZS9tYWluRGl2LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xpc3QvZGVsZXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9saXN0L2VkaXRMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xpc3QvZ2VuZXJhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xpc3QvZ2V0RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9saXN0L2l0ZW1Gb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xpc3QvcHJpb3JpdHlDb2xvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0L2FkZFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC9jaGVja0V4aXN0aW5nUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC9pZkNsaWNrZWQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvcHJvamVjdC9wcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zdG9yYWdlL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc3RvcmFnZS91cGRhdGVTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgY3VybHkgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vbmJsb2NrLXN0YXRlbWVudC1ib2R5LXBvc2l0aW9uICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgeyB0ZXh0LCBjbGFzc05hbWUsIGF0dHJpYnV0ZXMgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgaWYgKHRleHQpXG4gICAgICAgIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIGlmIChjbGFzc05hbWUpXG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVzKVxuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLm5hbWUsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgbWFpbi5hcHBlbmRDaGlsZChjb21wb25lbnQpO1xufVxuIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudC9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBnZW5lcmF0ZUxpc3QgZnJvbSAnLi4vbGlzdC9nZW5lcmF0ZUxpc3QnO1xuaW1wb3J0IG5ld0l0ZW0gZnJvbSAnLi4vbGlzdC9pdGVtRm9ybSc7XG5pbXBvcnQgbmV3UHJvamVjdCBmcm9tICcuLi9wcm9qZWN0L3Byb2plY3RGb3JtJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnV0dG9uTGlzdCgpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnd2VsY29tZScgfSk7XG5cbiAgY29uc3QgYWRkU3ltYm9sID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyB0ZXh0OiAnQWRkIGEgbGlzdCcgfSk7XG4gIGFkZFN5bWJvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld0l0ZW0pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFN5bWJvbCk7XG5cbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHsgdGV4dDogJ05ldyBwcm9qZWN0JyB9KTtcbiAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5ld1Byb2plY3QpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3QpO1xuXG4gIGNvbnN0IHZpZXdMaXN0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyB0ZXh0OiAnVmlldyBMaXN0JyB9KTtcbiAgdmlld0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUxpc3QpO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKHZpZXdMaXN0KTtcblxuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsImltcG9ydCBtYWluIGZyb20gJy4vbWFpbkRpdic7XG5pbXBvcnQgYnV0dG9uTGlzdCBmcm9tICcuL2J1dHRvbkxpc3QnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudC9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoMScsIHsgdGV4dDogJ1RvRG8gTGlzdCcgfSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnV0dG9uTGlzdCgpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKCkpO1xuICByZXR1cm4gY29udGVudDtcbn1cbiIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQvY3JlYXRlRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ21haW4nLCBhdHRyaWJ1dGVzOiBbeyBuYW1lOiAnaWQnLCB2YWx1ZTogJ21haW4nIH1dIH0pO1xuICByZXR1cm4gbWFpbkRpdjtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWxldGVMaXN0KHRpdGxlKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc3RvcmFnZSkpIHtcbiAgICAgICAgc3RvcmFnZVtrZXldID0gc3RvcmFnZVtrZXldLmZpbHRlcigoaXRlbSkgPT4gaXRlbS50aXRsZSAhPT0gdGl0bGUpO1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBhcnJvdy1wYXJlbnMgKi9cbi8qIGVzbGludC1kaXNhYmxlIGtleXdvcmQtc3BhY2luZyAqL1xuLyogZXNsaW50LWRpc2FibGUgaW5kZW50ICovXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vc3RvcmFnZS9zdG9yYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWRpdExpc3QodGl0bGUpIHtcbiAgICBmb3IoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHN0b3JhZ2UpKSB7XG4gICAgICAgIHN0b3JhZ2Vba2V5XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYoaXRlbS50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuaW1wb3J0IGdldERhdGUgZnJvbSAnLi9nZXREYXRlJztcbmltcG9ydCBkaXNwbGF5Q29tcG9uZW50IGZyb20gJy4uL2Rpc3BsYXkvZGlzcGxheUNvbXBvbmVudCc7XG5pbXBvcnQgcHJpb3JpdHlDb2xvciBmcm9tICcuL3ByaW9yaXR5Q29sb3InO1xuaW1wb3J0IGRlbGV0ZUxpc3QgZnJvbSAnLi9kZWxldGVMaXN0JztcbmltcG9ydCBlZGl0TGlzdCBmcm9tICcuL2VkaXRMaXN0JztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudC9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVMaXN0KCkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzczogJ2xpc3RDb250YWluZXInIH0pO1xuXG4gIGNvbnN0IHN0b3JhZ2VLZXlzID0gT2JqZWN0LmtleXMoc3RvcmFnZSk7XG5cbiAgZm9yIChjb25zdCBrZXkgb2Ygc3RvcmFnZUtleXMpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgeyB0ZXh0OiBrZXkgfSk7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICBmb3IgKGNvbnN0IGxpc3Qgb2Ygc3RvcmFnZVtrZXldKSB7XG4gICAgICBjb25zdCBzZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgeyBjbGFzc05hbWU6ICdsaXN0R2VuZXJhdG9yJyB9KTtcbiAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LnRvZ2dsZSgnZG9uZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyB0ZXh0OiAneCcsIGNsYXNzTmFtZTogJ2Nsb3NlQnV0dG9uJyB9KTtcbiAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVMaXN0KGxpc3QudGl0bGUpO1xuICAgICAgfSk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHkgPSBjcmVhdGVFbGVtZW50KCdwJywgeyB0ZXh0OiBsaXN0LnByaW9yaXR5LCBjbGFzc05hbWU6ICdwcmlvcml0eScgfSk7XG4gICAgICBwcmlvcml0eUNvbG9yKGxpc3QucHJpb3JpdHksIHByaW9yaXR5KTtcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuXG4gICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gzJywgeyB0ZXh0OiBsaXN0LnRpdGxlLCBjbGFzc05hbWU6ICd0aXRsZScgfSk7XG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgY29uc3QgZGVzYyA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCB7IHRleHQ6IGxpc3QuZGVzY3JpcHRpb24sIGNsYXNzTmFtZTogJ2Rlc2MnIH0pO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjKTtcblxuICAgICAgY29uc3QgZHVlRGF0ZSA9IGdldERhdGUobGlzdC5kdWVEYXRlKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBjcmVhdGVFbGVtZW50KCdwJywgeyB0ZXh0OiBkdWVEYXRlLCBjbGFzc05hbWU6ICdkYXRlJyB9KTtcbiAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IHRleHQ6ICdFZGl0JywgY2xhc3NOYW1lOiAnZWRpdEJ1dHRvbicgfSk7XG4gICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlZGl0TGlzdChsaXN0LnRpdGxlKTtcbiAgICAgIH0pO1xuICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWN0aW9uKTtcbiAgICB9XG4gIH1cblxuICBkaXNwbGF5Q29tcG9uZW50KGxpc3RDb250YWluZXIpO1xuICByZXR1cm4gbGlzdENvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldERhdGUoZGF0ZSkge1xuICBjb25zdCBnaXZlbkRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgY29uc3QgbW9udGggPSBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJyxcbiAgICAnSnVsJywgJ0F1ZycsICdTZXB0JywgJ09jdCcsICdOb3YnLCAnRGVjJ11bZ2l2ZW5EYXRlLmdldE1vbnRoKCldO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7Z2l2ZW5EYXRlLmdldERhdGUoKX0gJHttb250aH0gJHtnaXZlbkRhdGUuZ2V0RnVsbFllYXIoKX1gO1xuXG4gIHJldHVybiBmb3JtYXR0ZWREYXRlO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdHJhaWxpbmctc3BhY2VzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktbmV3bGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktc3BhY2luZyAqL1xuaW1wb3J0IGFkZEl0ZW0gZnJvbSAnLi4vc3RvcmFnZS91cGRhdGVTdG9yYWdlJztcbmltcG9ydCBkaXNwbGF5Q29tcG9uZW50IGZyb20gJy4uL2Rpc3BsYXkvZGlzcGxheUNvbXBvbmVudCc7XG5pbXBvcnQgZ2VuZXJhdGVMaXN0IGZyb20gJy4vZ2VuZXJhdGVMaXN0JztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudC9jcmVhdGVFbGVtZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3SXRlbShwcm9qZWN0TmFtZSA9IG51bGwpIHtcbiAgY29uc3QgYnIgPSBjcmVhdGVFbGVtZW50KCdicicpO1xuICBjb25zdCBwcmlvcml0eSA9IFsnbG93JywgJ21lZCcsICdoaWdoJ107XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgXG4gICAgY2xhc3NOYW1lOiAnbmV3SXRlbScgfSk7XG5cbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7IFxuICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgIHtuYW1lOiAnbWV0aG9kJywgdmFsdWU6ICdwb3N0J30sXG4gICAgICB7bmFtZTogJ2FjdGlvbicsIHZhbHVlOiAnc3VibWl0J31cbiAgICBdfSk7XG5cbiAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgXG4gICAgYXR0cmlidXRlczogW1xuICAgICAge25hbWU6ICd0eXBlJywgdmFsdWU6ICd0ZXh0J30sXG4gICAgICB7bmFtZTogJ2lkJywgdmFsdWU6ICd0aXRsZSd9LFxuICAgICAge25hbWU6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnVGl0bGUnfVxuICAgIF19KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBcbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICB7bmFtZTogJ3R5cGUnLCB2YWx1ZTogJ3RleHQnfSxcbiAgICAgIHtuYW1lOiAnaWQnLCB2YWx1ZTogJ2Rlc2MnfSxcbiAgICAgIHtuYW1lOiAncGxhY2Vob2xkZXInLCB2YWx1ZTogJ0Rlc2NyaXB0aW9uJ31cbiAgICBdfSk7XG5cbiAgY29uc3QgZHVlRGF0ZSA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBcbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICB7bmFtZTogJ3R5cGUnLCB2YWx1ZTogJ2RhdGUnfSxcbiAgICAgIHtuYW1lOiAnaWQnLCB2YWx1ZTogJ2RhdGUnfVxuICAgIF19KTtcblxuICBjb25zdCBwcmlvckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcsIHsgYXR0cmlidXRlczogW3tuYW1lOiAnaWQnLCB2YWx1ZTogJ3ByaW9yJ31dfSk7XG5cbiAgcHJpb3JpdHkuZm9yRWFjaCgocHJpb3IpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBjcmVhdGVFbGVtZW50KCdvcHRpb24nLCB7IHRleHQ6IHByaW9yfSk7XG4gICAgcHJpb3JDb250YWluZXIuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfSk7XG5cbiAgY29uc3Qgc3VibWl0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgIHRleHQ6ICdTdWJtaXQnLFxuICAgIGF0dHJpYnV0ZXM6IFt7bmFtZTogJ2lkJywgdmFsdWU6ICdzdWJtaXQnfV1cbiAgfSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYnIuY2xvbmVOb2RlKCkpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChici5jbG9uZU5vZGUoKSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcblxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHVwZGF0ZWRTdG9yYWdlID0gYWRkSXRlbShzdG9yYWdlLCBwcm9qZWN0TmFtZSk7XG4gICAgZ2VuZXJhdGVMaXN0KHVwZGF0ZWRTdG9yYWdlKTtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICB9KTtcblxuICBkaXNwbGF5Q29tcG9uZW50KHNlY3Rpb24pO1xuXG4gIHJldHVybiBzZWN0aW9uO1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIGRlZmF1bHQtY2FzZSAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpb3JpdHlDb2xvcihpdGVtLCBjb21wb25lbnQpIHtcbiAgc3dpdGNoIChpdGVtKSB7XG4gICAgY2FzZSAnbG93JzpcbiAgICAgIGNvbXBvbmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDg1LCAxNjksIDE5MCknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWVkJzpcbiAgICAgIGNvbXBvbmVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiKDIwNiwgMTYyLCA4MSknO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnaGlnaCc6XG4gICAgICBjb21wb25lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYigxOTQsIDkxLCA3OCknO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgbmV3SXRlbSBmcm9tICcuLi9saXN0L2l0ZW1Gb3JtJztcbmltcG9ydCBkaXNwbGF5Q29tcG9uZW50IGZyb20gJy4uL2Rpc3BsYXkvZGlzcGxheUNvbXBvbmVudCc7XG5pbXBvcnQgY2hlY2tFeGlzdGluZ1Byb2plY3RzIGZyb20gJy4vY2hlY2tFeGlzdGluZ1Byb2plY3RzJztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4uL2NyZWF0ZUVsZW1lbnQvY3JlYXRlRWxlbWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE5ld1Byb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnbmV3UHJvamVjdCcsIGF0dHJpYnV0ZXM6IFt7IG5hbWU6ICdpZCcsIHZhbHVlOiBwcm9qZWN0TmFtZSB9XSB9KTtcblxuICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2gyJywgeyB0ZXh0OiBwcm9qZWN0TmFtZSB9KTtcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgaXRlbXNUb0FkZEluVGhpc1Byb2plY3QgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7IHRleHQ6ICdBZGQgYSBsaXN0JyB9KTtcbiAgaXRlbXNUb0FkZEluVGhpc1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3SXRlbShwcm9qZWN0TmFtZSk7XG4gIH0pO1xuICBzZWN0aW9uLmFwcGVuZENoaWxkKGl0ZW1zVG9BZGRJblRoaXNQcm9qZWN0KTtcblxuICBjaGVja0V4aXN0aW5nUHJvamVjdHMoc2VjdGlvbiwgcHJvamVjdE5hbWUpO1xuXG4gIGRpc3BsYXlDb21wb25lbnQoc2VjdGlvbik7XG5cbiAgcmV0dXJuIHNlY3Rpb247XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuXG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuLi9jcmVhdGVFbGVtZW50L2NyZWF0ZUVsZW1lbnQnO1xuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4uL3N0b3JhZ2Uvc3RvcmFnZSc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGluZGVudCAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tFeGlzdGluZ1Byb2plY3RzKGNvbXBvbmVudCwgcHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCBzdG9yYWdlS2V5cyA9IE9iamVjdC5rZXlzKHN0b3JhZ2UpO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHN0b3JhZ2VLZXlzKSB7XG4gICAgICBpZiAoa2V5ID09PSBwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB1bCA9IGNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbXBvbmVudC5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIGZvciAoY29uc3QgbGlzdCBvZiBzdG9yYWdlW2tleV0pIHtcbiAgICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgeyB0ZXh0OiBsaXN0LnRpdGxlIH0pO1xuICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCBhZGROZXdQcm9qZWN0IGZyb20gJy4vYWRkUHJvamVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlmQ2xpY2tlZChjb21wb25lbnQsIGZvcm0pIHtcbiAgY29tcG9uZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZWFjaFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKS52YWx1ZTtcbiAgICBhZGROZXdQcm9qZWN0KGVhY2hQcm9qZWN0KTtcbiAgICBmb3JtLmlubmVySFRNTCA9ICcnO1xuICB9KTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG9iamVjdC1jdXJseS1uZXdsaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBvYmplY3QtY3VybHktc3BhY2luZyAqL1xuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBjdXJseSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm9uYmxvY2stc3RhdGVtZW50LWJvZHktcG9zaXRpb24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tICcuL2FkZFByb2plY3QnO1xuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnLi4vY3JlYXRlRWxlbWVudC9jcmVhdGVFbGVtZW50JztcbmltcG9ydCBkaXNwbGF5Q29tcG9uZW50IGZyb20gJy4uL2Rpc3BsYXkvZGlzcGxheUNvbXBvbmVudCc7XG5pbXBvcnQgaWZDbGlja2VkIGZyb20gJy4vaWZDbGlja2VkJztcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuLi9zdG9yYWdlL3N0b3JhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdQcm9qZWN0Rm9ybSgpIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgY2xhc3NOYW1lOiAnY3JlYXRlUHJvamVjdCcgfSk7XG5cbiAgY29uc3Qgc3RvcmFnZUtleXMgPSBPYmplY3Qua2V5cyhzdG9yYWdlKTtcbiAgZm9yIChjb25zdCBrZXkgb2Ygc3RvcmFnZUtleXMpIHtcbiAgICBpZiAoa2V5ICE9PSAnZGVmYXVsdCcpXG4gICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZFByb2plY3Qoa2V5KSk7XG4gIH1cbiAgY29uc3QgZm9ybSA9IGNyZWF0ZUVsZW1lbnQoJ2Zvcm0nLCB7IGF0dHJpYnV0ZXM6IFtcbiAgICB7bmFtZTogJ21ldGhvZCcsIHZhbHVlOiAncG9zdCd9LFxuICAgIHtuYW1lOiAnYWN0aW9uJywgdmFsdWU6ICdzdWJtaXQnfVxuICBdfSk7XG5cbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgYXR0cmlidXRlczogW1xuICAgIHtuYW1lOiAndHlwZScsIHZhbHVlOiAndGV4dCd9LFxuICAgIHtuYW1lOiAnaWQnLCB2YWx1ZTogJ3Byb2plY3ROYW1lJ30sXG4gICAge25hbWU6ICdwbGFjZWhvbGRlcicsIHZhbHVlOiAnUHJvamVjdCBOYW1lJ31cbiAgXX0pO1xuXG4gIGNvbnN0IGNsaWNrID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywgeyB0ZXh0OiAnT2snLCBhdHRyaWJ1dGVzOiBbeyBuYW1lOiAnaWQnLCB2YWx1ZTogJ2NsaWNrJyB9XSB9KTtcblxuICBmb3JtLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjbGljayk7XG4gIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgaWZDbGlja2VkKGNsaWNrLCBmb3JtKTtcblxuICBkaXNwbGF5Q29tcG9uZW50KHNlY3Rpb24pO1xuICByZXR1cm4gc2VjdGlvbjtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IHt9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2Uoc3RvcmFnZSwgcHJvamVjdE5hbWUpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjJykudmFsdWU7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICBjb25zdCBwcmlvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcicpLnZhbHVlO1xuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0TmFtZS5pc1RydXN0ZWQgPT09IHRydWUgPyAnZGVmYXVsdCcgOiBwcm9qZWN0TmFtZTtcblxuICBpZiAoIU9iamVjdC5rZXlzKHN0b3JhZ2UpLmluY2x1ZGVzKHByb2plY3RUaXRsZSkpIHtcbiAgICBzdG9yYWdlW3Byb2plY3RUaXRsZV0gPSBbe1xuICAgICAgdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgIGR1ZURhdGU6IGRhdGUsXG4gICAgICBwcmlvcml0eTogcHJpb3IsXG4gICAgfSxcbiAgICBdO1xuICB9IGVsc2Uge1xuICAgIHN0b3JhZ2VbcHJvamVjdFRpdGxlXS5wdXNoKHtcbiAgICAgIHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICBkdWVEYXRlOiBkYXRlLFxuICAgICAgcHJpb3JpdHk6IHByaW9yLFxuICAgIH0pO1xuICB9XG4gIGNvbnNvbGUubG9nKHN0b3JhZ2UpO1xuICByZXR1cm4gc3RvcmFnZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZSc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==