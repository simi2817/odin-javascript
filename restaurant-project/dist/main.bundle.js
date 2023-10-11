/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/menuItems.js":
/*!*********************************!*\
  !*** ./src/assets/menuItems.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuItems: () => (/* binding */ menuItems)
/* harmony export */ });
const menuItems = [
    {
        title: "Cheese Sandwich",
        image: "cheese-sandwich",
        desc : "Grilled cheese toastie on white or wheat bread with filling of your choice!",choice: "Caramelized Onions | Roasted Peppers | Scrambled eggs | Pickles | Ham | Turkey",
        price: "£3.59"
    },
    {
        title: "Chicken Pockets",
        image: "chicken-pockets",
        desc : "Pita pockets stuffed with grilled chicken and filling of your choice!",
        choice: "Sun dried tomatoes | Lettuce | Red Onion | Mayonnaise | Buffalo sauce",
        price: "£3.59"
    },
    {
        title: "Pancakes",
        image: "pancake",
        desc : "Pancakes served with fresh fruits and maple syrup with base of your choice!",
        choice: "Sweet | Savoury | Whole Wheat | Oats",
        price: "£4.99"
    },
    {
        title: "Waffles",
        image: "waffle",
        desc : "Handmade waffle dough served with toppings of your choice!",
        choice: "Belgian Chocolate| Gelato | Fresh Cream | Fresh Fruits | Maple Syrup | Caramel Sauce",
        price: "£4.99"
    },
    {
        title: "Coffee",
        image: "coffee",
        desc : "Hand brewed seasonal single origin coffee with your choice of addon!",
        choice: "Short Black | Americano | Cappuccino | Latte | Mocha | Batch Brew",
        price: "£2.99"
    }
];

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayAbout)
/* harmony export */ });
/* harmony import */ var _assets_about_image_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/about-image.jpeg */ "./src/assets/about-image.jpeg");


function about() {
    const section = document.createElement('div');
    section.classList.add('about');

    const heading = document.createElement('h2');
    heading.textContent = 'About Us';
    section.appendChild(heading);

    const image = document.createElement('img');
    image.src = _assets_about_image_jpeg__WEBPACK_IMPORTED_MODULE_0__;
    image.height = 400;
    image.width = 300;
    image.alt = 'Image of coffee with croissants';
    section.appendChild(image);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
    section.appendChild(paragraph);

    return section;
}

function displayAbout() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(about());
}

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayContact)
/* harmony export */ });

function contact() {
    const section = document.createElement('div');
    section.classList.add('contact');

    const hours = document.createElement('h3');
    hours.textContent = 'Opening Hours';
    section.appendChild(hours);

    const open = document.createElement('p');
    open.textContent = 'Mon - Fri: 9AM - 5PM';
    section.appendChild(open);

    const close = document.createElement('p');
    close.textContent = 'Sat - Sun: Closed';
    section.appendChild(close);

    const emailHeading = document.createElement('h4');
    emailHeading.textContent = 'Want to book a table? Email or Call Us!';
    section.appendChild(emailHeading);

    const email = document.createElement('p');
    email.textContent = 'contact@mintcafe.com';
    section.appendChild(email);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(044) 123 4567 890';
    section.appendChild(phoneNumber);

    const addressHeading = document.createElement('h4');
    addressHeading.textContent = 'Find us on - ';
    section.appendChild(addressHeading);

    const address = document.createElement('p');
    address.textContent = '15 Featherstone Street | M34 6FG';
    section.appendChild(address);

    return section;
}

function displayContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(contact());
}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _assets_menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/menuItems */ "./src/assets/menuItems.js");


function menu() {
    const section = document.createElement('div');
    section.classList.add('menu');

    for(let item of _assets_menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems) {
        const title = document.createElement('h3');
        title.textContent = item.title;
        section.appendChild(title);

        const image = document.createElement('img');
        image.src = `/restaurant-project/src/assets/${item.image}.jpeg`;
        image.alt = `Image of ${item.image}`;
        image.height = 200;
        image.width = 200;
        section.appendChild(image);

        const description = document.createElement('p');
        description.textContent = item.desc;
        section.appendChild(description);

        const choice = document.createElement('p');
        choice.textContent = item.choice;
        section.appendChild(choice);

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = item.price;
        price.style.fontWeight = '100%';
        section.appendChild(price);
    }

    return section;
}

function displayMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(menu());
}

/***/ }),

/***/ "./src/components/welcome.js":
/*!***********************************!*\
  !*** ./src/components/welcome.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/components/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/components/contact.js");




function welcome() {
    const section = document.createElement('div');
    section.classList.add('welcome');

    const heading = document.createElement('h1');
    heading.textContent = 'Mint Cafe';
    section.appendChild(heading);

    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const aboutBtn = document.createElement('button');
    aboutBtn.textContent = 'About Us';
    aboutBtn.addEventListener('click', _about__WEBPACK_IMPORTED_MODULE_0__["default"]);
    nav.appendChild(aboutBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
    nav.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
    nav.appendChild(contactBtn);

    section.appendChild(nav);

    return section;
}

function main() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function display() {
    const content = document.getElementById('content');
    content.appendChild(welcome());
    content.appendChild(main());
    return content;
}

/***/ }),

/***/ "./src/assets/about-image.jpeg":
/*!*************************************!*\
  !*** ./src/assets/about-image.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e3ead6b582e26537e28.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _components_welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/welcome */ "./src/components/welcome.js");


document.body.appendChild((0,_components_welcome__WEBPACK_IMPORTED_MODULE_0__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkNvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q2dEOztBQUVoRDtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFzRCxXQUFXO0FBQ2pFLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEM0QjtBQUNGO0FBQ007O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLDhDQUFLO0FBQzVDOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsNkNBQUk7QUFDMUM7O0FBRUE7QUFDQTtBQUNBLHlDQUF5QyxnREFBTztBQUNoRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2xCMkM7O0FBRTNDLDBCQUEwQiwrREFBTyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ2hlZXNlIFNhbmR3aWNoXCIsXG4gICAgICAgIGltYWdlOiBcImNoZWVzZS1zYW5kd2ljaFwiLFxuICAgICAgICBkZXNjIDogXCJHcmlsbGVkIGNoZWVzZSB0b2FzdGllIG9uIHdoaXRlIG9yIHdoZWF0IGJyZWFkIHdpdGggZmlsbGluZyBvZiB5b3VyIGNob2ljZSFcIixjaG9pY2U6IFwiQ2FyYW1lbGl6ZWQgT25pb25zIHwgUm9hc3RlZCBQZXBwZXJzIHwgU2NyYW1ibGVkIGVnZ3MgfCBQaWNrbGVzIHwgSGFtIHwgVHVya2V5XCIsXG4gICAgICAgIHByaWNlOiBcIsKjMy41OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNoaWNrZW4gUG9ja2V0c1wiLFxuICAgICAgICBpbWFnZTogXCJjaGlja2VuLXBvY2tldHNcIixcbiAgICAgICAgZGVzYyA6IFwiUGl0YSBwb2NrZXRzIHN0dWZmZWQgd2l0aCBncmlsbGVkIGNoaWNrZW4gYW5kIGZpbGxpbmcgb2YgeW91ciBjaG9pY2UhXCIsXG4gICAgICAgIGNob2ljZTogXCJTdW4gZHJpZWQgdG9tYXRvZXMgfCBMZXR0dWNlIHwgUmVkIE9uaW9uIHwgTWF5b25uYWlzZSB8IEJ1ZmZhbG8gc2F1Y2VcIixcbiAgICAgICAgcHJpY2U6IFwiwqMzLjU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUGFuY2FrZXNcIixcbiAgICAgICAgaW1hZ2U6IFwicGFuY2FrZVwiLFxuICAgICAgICBkZXNjIDogXCJQYW5jYWtlcyBzZXJ2ZWQgd2l0aCBmcmVzaCBmcnVpdHMgYW5kIG1hcGxlIHN5cnVwIHdpdGggYmFzZSBvZiB5b3VyIGNob2ljZSFcIixcbiAgICAgICAgY2hvaWNlOiBcIlN3ZWV0IHwgU2F2b3VyeSB8IFdob2xlIFdoZWF0IHwgT2F0c1wiLFxuICAgICAgICBwcmljZTogXCLCozQuOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJXYWZmbGVzXCIsXG4gICAgICAgIGltYWdlOiBcIndhZmZsZVwiLFxuICAgICAgICBkZXNjIDogXCJIYW5kbWFkZSB3YWZmbGUgZG91Z2ggc2VydmVkIHdpdGggdG9wcGluZ3Mgb2YgeW91ciBjaG9pY2UhXCIsXG4gICAgICAgIGNob2ljZTogXCJCZWxnaWFuIENob2NvbGF0ZXwgR2VsYXRvIHwgRnJlc2ggQ3JlYW0gfCBGcmVzaCBGcnVpdHMgfCBNYXBsZSBTeXJ1cCB8IENhcmFtZWwgU2F1Y2VcIixcbiAgICAgICAgcHJpY2U6IFwiwqM0Ljk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29mZmVlXCIsXG4gICAgICAgIGltYWdlOiBcImNvZmZlZVwiLFxuICAgICAgICBkZXNjIDogXCJIYW5kIGJyZXdlZCBzZWFzb25hbCBzaW5nbGUgb3JpZ2luIGNvZmZlZSB3aXRoIHlvdXIgY2hvaWNlIG9mIGFkZG9uIVwiLFxuICAgICAgICBjaG9pY2U6IFwiU2hvcnQgQmxhY2sgfCBBbWVyaWNhbm8gfCBDYXBwdWNjaW5vIHwgTGF0dGUgfCBNb2NoYSB8IEJhdGNoIEJyZXdcIixcbiAgICAgICAgcHJpY2U6IFwiwqMyLjk5XCJcbiAgICB9XG5dOyIsImltcG9ydCBhYm91dEltYWdlIGZyb20gJy4uL2Fzc2V0cy9hYm91dC1pbWFnZS5qcGVnJztcblxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGFib3V0SW1hZ2U7XG4gICAgaW1hZ2UuaGVpZ2h0ID0gNDAwO1xuICAgIGltYWdlLndpZHRoID0gMzAwO1xuICAgIGltYWdlLmFsdCA9ICdJbWFnZSBvZiBjb2ZmZWUgd2l0aCBjcm9pc3NhbnRzJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpemVkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG59IiwiXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9ICdPcGVuaW5nIEhvdXJzJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3Blbi50ZXh0Q29udGVudCA9ICdNb24gLSBGcmk6IDlBTSAtIDVQTSc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChvcGVuKTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ1NhdCAtIFN1bjogQ2xvc2VkJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZW1haWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ1dhbnQgdG8gYm9vayBhIHRhYmxlPyBFbWFpbCBvciBDYWxsIFVzISc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlbWFpbEhlYWRpbmcpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAnY29udGFjdEBtaW50Y2FmZS5jb20nO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnKDA0NCkgMTIzIDQ1NjcgODkwJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhZGRyZXNzSGVhZGluZy50ZXh0Q29udGVudCA9ICdGaW5kIHVzIG9uIC0gJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxNSBGZWF0aGVyc3RvbmUgU3RyZWV0IHwgTTM0IDZGRyc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG59IiwiaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi4vYXNzZXRzL21lbnVJdGVtcyc7XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgZm9yKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYC9yZXN0YXVyYW50LXByb2plY3Qvc3JjL2Fzc2V0cy8ke2l0ZW0uaW1hZ2V9LmpwZWdgO1xuICAgICAgICBpbWFnZS5hbHQgPSBgSW1hZ2Ugb2YgJHtpdGVtLmltYWdlfWA7XG4gICAgICAgIGltYWdlLmhlaWdodCA9IDIwMDtcbiAgICAgICAgaW1hZ2Uud2lkdGggPSAyMDA7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjaG9pY2UudGV4dENvbnRlbnQgPSBpdGVtLmNob2ljZTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjaG9pY2UpO1xuXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIHByaWNlLnN0eWxlLmZvbnRXZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocHJpY2UpO1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnUoKSk7XG59IiwiaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnO1xuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5cbmZ1bmN0aW9uIHdlbGNvbWUoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2VsY29tZScpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdNaW50IENhZmUnO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG5cbiAgICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFib3V0QnRuLnRleHRDb250ZW50ID0gJ0Fib3V0IFVzJztcbiAgICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYWJvdXRCdG4pO1xuXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVCdG4udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnUpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0KTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG5cbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKG5hdik7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW4nKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlbGNvbWUoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKCkpO1xuICAgIHJldHVybiBjb250ZW50O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgZGlzcGxheSBmcm9tIFwiLi9jb21wb25lbnRzL3dlbGNvbWVcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXNwbGF5KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==