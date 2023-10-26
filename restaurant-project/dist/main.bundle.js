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
const menuItems = [{
  title: "Cheese Sandwich",
  image: "cheese-sandwich",
  desc: "Grilled cheese toastie on white or wheat bread with filling of your choice!",
  choice: "Caramelized Onions | Roasted Peppers | Scrambled eggs | Pickles | Ham | Turkey",
  price: "£3.59"
}, {
  title: "Chicken Pockets",
  image: "chicken-pockets",
  desc: "Pita pockets stuffed with grilled chicken and filling of your choice!",
  choice: "Sun dried tomatoes | Lettuce | Red Onion | Mayonnaise | Buffalo sauce",
  price: "£3.59"
}, {
  title: "Pancakes",
  image: "pancake",
  desc: "Pancakes served with fresh fruits and maple syrup with base of your choice!",
  choice: "Sweet | Savoury | Whole Wheat | Oats",
  price: "£4.99"
}, {
  title: "Waffles",
  image: "waffle",
  desc: "Handmade waffle dough served with toppings of your choice!",
  choice: "Belgian Chocolate| Gelato | Fresh Cream | Fresh Fruits | Maple Syrup | Caramel Sauce",
  price: "£4.99"
}, {
  title: "Coffee",
  image: "coffee",
  desc: "Hand brewed seasonal single origin coffee with your choice of addon!",
  choice: "Short Black | Americano | Cappuccino | Latte | Mocha | Batch Brew",
  price: "£2.99"
}];

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
  for (let item of _assets_menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems) {
    const title = document.createElement('h3');
    title.textContent = item.title;
    section.appendChild(title);
    const image = document.createElement('img');
    image.src = `/src/assets/${item.image}.jpeg`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMvQixPQUFPdEIsSUFBSTtBQUNmO0FBRWUsU0FBU3VCLE9BQU9BLENBQUEsRUFBRztFQUM5QixNQUFNQyxPQUFPLEdBQUdyQyxRQUFRLENBQUNjLGNBQWMsQ0FBQyxTQUFTLENBQUM7RUFDbER1QixPQUFPLENBQUMvQixXQUFXLENBQUN1QixPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQzlCUSxPQUFPLENBQUMvQixXQUFXLENBQUNPLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDM0IsT0FBT3dCLE9BQU87QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2xCMkM7QUFFM0NyQyxRQUFRLENBQUNzQyxJQUFJLENBQUNoQyxXQUFXLENBQUM4QiwrREFBTyxDQUFDLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2Fzc2V0cy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0Ly4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXByb2plY3QvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9jb21wb25lbnRzL3dlbGNvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ2hlZXNlIFNhbmR3aWNoXCIsXG4gICAgICAgIGltYWdlOiBcImNoZWVzZS1zYW5kd2ljaFwiLFxuICAgICAgICBkZXNjIDogXCJHcmlsbGVkIGNoZWVzZSB0b2FzdGllIG9uIHdoaXRlIG9yIHdoZWF0IGJyZWFkIHdpdGggZmlsbGluZyBvZiB5b3VyIGNob2ljZSFcIixjaG9pY2U6IFwiQ2FyYW1lbGl6ZWQgT25pb25zIHwgUm9hc3RlZCBQZXBwZXJzIHwgU2NyYW1ibGVkIGVnZ3MgfCBQaWNrbGVzIHwgSGFtIHwgVHVya2V5XCIsXG4gICAgICAgIHByaWNlOiBcIsKjMy41OVwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNoaWNrZW4gUG9ja2V0c1wiLFxuICAgICAgICBpbWFnZTogXCJjaGlja2VuLXBvY2tldHNcIixcbiAgICAgICAgZGVzYyA6IFwiUGl0YSBwb2NrZXRzIHN0dWZmZWQgd2l0aCBncmlsbGVkIGNoaWNrZW4gYW5kIGZpbGxpbmcgb2YgeW91ciBjaG9pY2UhXCIsXG4gICAgICAgIGNob2ljZTogXCJTdW4gZHJpZWQgdG9tYXRvZXMgfCBMZXR0dWNlIHwgUmVkIE9uaW9uIHwgTWF5b25uYWlzZSB8IEJ1ZmZhbG8gc2F1Y2VcIixcbiAgICAgICAgcHJpY2U6IFwiwqMzLjU5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUGFuY2FrZXNcIixcbiAgICAgICAgaW1hZ2U6IFwicGFuY2FrZVwiLFxuICAgICAgICBkZXNjIDogXCJQYW5jYWtlcyBzZXJ2ZWQgd2l0aCBmcmVzaCBmcnVpdHMgYW5kIG1hcGxlIHN5cnVwIHdpdGggYmFzZSBvZiB5b3VyIGNob2ljZSFcIixcbiAgICAgICAgY2hvaWNlOiBcIlN3ZWV0IHwgU2F2b3VyeSB8IFdob2xlIFdoZWF0IHwgT2F0c1wiLFxuICAgICAgICBwcmljZTogXCLCozQuOTlcIlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJXYWZmbGVzXCIsXG4gICAgICAgIGltYWdlOiBcIndhZmZsZVwiLFxuICAgICAgICBkZXNjIDogXCJIYW5kbWFkZSB3YWZmbGUgZG91Z2ggc2VydmVkIHdpdGggdG9wcGluZ3Mgb2YgeW91ciBjaG9pY2UhXCIsXG4gICAgICAgIGNob2ljZTogXCJCZWxnaWFuIENob2NvbGF0ZXwgR2VsYXRvIHwgRnJlc2ggQ3JlYW0gfCBGcmVzaCBGcnVpdHMgfCBNYXBsZSBTeXJ1cCB8IENhcmFtZWwgU2F1Y2VcIixcbiAgICAgICAgcHJpY2U6IFwiwqM0Ljk5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29mZmVlXCIsXG4gICAgICAgIGltYWdlOiBcImNvZmZlZVwiLFxuICAgICAgICBkZXNjIDogXCJIYW5kIGJyZXdlZCBzZWFzb25hbCBzaW5nbGUgb3JpZ2luIGNvZmZlZSB3aXRoIHlvdXIgY2hvaWNlIG9mIGFkZG9uIVwiLFxuICAgICAgICBjaG9pY2U6IFwiU2hvcnQgQmxhY2sgfCBBbWVyaWNhbm8gfCBDYXBwdWNjaW5vIHwgTGF0dGUgfCBNb2NoYSB8IEJhdGNoIEJyZXdcIixcbiAgICAgICAgcHJpY2U6IFwiwqMyLjk5XCJcbiAgICB9XG5dOyIsImltcG9ydCBhYm91dEltYWdlIGZyb20gJy4uL2Fzc2V0cy9hYm91dC1pbWFnZS5qcGVnJztcblxuZnVuY3Rpb24gYWJvdXQoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGFib3V0SW1hZ2U7XG4gICAgaW1hZ2UuaGVpZ2h0ID0gNDAwO1xuICAgIGltYWdlLndpZHRoID0gMzAwO1xuICAgIGltYWdlLmFsdCA9ICdJbWFnZSBvZiBjb2ZmZWUgd2l0aCBjcm9pc3NhbnRzJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5XFwncyBzdGFuZGFyZCBkdW1teSB0ZXh0IGV2ZXIgc2luY2UgdGhlIDE1MDBzLCB3aGVuIGFuIHVua25vd24gcHJpbnRlciB0b29rIGEgZ2FsbGV5IG9mIHR5cGUgYW5kIHNjcmFtYmxlZCBpdCB0byBtYWtlIGEgdHlwZSBzcGVjaW1lbiBib29rLiBJdCBoYXMgc3Vydml2ZWQgbm90IG9ubHkgZml2ZSBjZW50dXJpZXMsIGJ1dCBhbHNvIHRoZSBsZWFwIGludG8gZWxlY3Ryb25pYyB0eXBlc2V0dGluZywgcmVtYWluaW5nIGVzc2VudGlhbGx5IHVuY2hhbmdlZC4gSXQgd2FzIHBvcHVsYXJpemVkIGluIHRoZSAxOTYwcyB3aXRoIHRoZSByZWxlYXNlIG9mIExldHJhc2V0IHNoZWV0cyBjb250YWluaW5nIExvcmVtIElwc3VtIHBhc3NhZ2VzLCBhbmQgbW9yZSByZWNlbnRseSB3aXRoIGRlc2t0b3AgcHVibGlzaGluZyBzb2Z0d2FyZSBsaWtlIEFsZHVzIFBhZ2VNYWtlciBpbmNsdWRpbmcgdmVyc2lvbnMgb2YgTG9yZW0gSXBzdW0uJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG59IiwiXG5mdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBob3Vycy50ZXh0Q29udGVudCA9ICdPcGVuaW5nIEhvdXJzJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3Blbi50ZXh0Q29udGVudCA9ICdNb24gLSBGcmk6IDlBTSAtIDVQTSc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChvcGVuKTtcblxuICAgIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNsb3NlLnRleHRDb250ZW50ID0gJ1NhdCAtIFN1bjogQ2xvc2VkJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICAgIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZW1haWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ1dhbnQgdG8gYm9vayBhIHRhYmxlPyBFbWFpbCBvciBDYWxsIFVzISc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChlbWFpbEhlYWRpbmcpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW1haWwudGV4dENvbnRlbnQgPSAnY29udGFjdEBtaW50Y2FmZS5jb20nO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSAnKDA0NCkgMTIzIDQ1NjcgODkwJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIGNvbnN0IGFkZHJlc3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhZGRyZXNzSGVhZGluZy50ZXh0Q29udGVudCA9ICdGaW5kIHVzIG9uIC0gJztcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGFkZHJlc3NIZWFkaW5nKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICcxNSBGZWF0aGVyc3RvbmUgU3RyZWV0IHwgTTM0IDZGRyc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG59IiwiaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi4vYXNzZXRzL21lbnVJdGVtcyc7XG5cbmZ1bmN0aW9uIG1lbnUoKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgZm9yKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gYC9zcmMvYXNzZXRzLyR7aXRlbS5pbWFnZX0uanBlZ2A7XG4gICAgICAgIGltYWdlLmFsdCA9IGBJbWFnZSBvZiAke2l0ZW0uaW1hZ2V9YDtcbiAgICAgICAgaW1hZ2UuaGVpZ2h0ID0gMjAwO1xuICAgICAgICBpbWFnZS53aWR0aCA9IDIwMDtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBjaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNob2ljZS50ZXh0Q29udGVudCA9IGl0ZW0uY2hvaWNlO1xuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNob2ljZSk7XG5cbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudSgpKTtcbn0iLCJpbXBvcnQgYWJvdXQgZnJvbSAnLi9hYm91dCc7XG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcblxuZnVuY3Rpb24gd2VsY29tZSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd3ZWxjb21lJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ01pbnQgQ2FmZSc7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWJvdXRCdG4udGV4dENvbnRlbnQgPSAnQWJvdXQgVXMnO1xuICAgIGFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJvdXQpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudUJ0bi50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3QpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIHJldHVybiBzZWN0aW9uO1xufVxuXG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICBtYWluLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbicpO1xuICAgIHJldHVybiBtYWluO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZSgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4oKSk7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBkaXNwbGF5IGZyb20gXCIuL2NvbXBvbmVudHMvd2VsY29tZVwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpc3BsYXkoKSk7Il0sIm5hbWVzIjpbIm1lbnVJdGVtcyIsInRpdGxlIiwiaW1hZ2UiLCJkZXNjIiwiY2hvaWNlIiwicHJpY2UiLCJhYm91dEltYWdlIiwiYWJvdXQiLCJzZWN0aW9uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaGVhZGluZyIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsImFsdCIsInBhcmFncmFwaCIsImRpc3BsYXlBYm91dCIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImNvbnRhY3QiLCJob3VycyIsIm9wZW4iLCJjbG9zZSIsImVtYWlsSGVhZGluZyIsImVtYWlsIiwicGhvbmVOdW1iZXIiLCJhZGRyZXNzSGVhZGluZyIsImFkZHJlc3MiLCJkaXNwbGF5Q29udGFjdCIsIm1lbnUiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJkaXNwbGF5TWVudSIsIndlbGNvbWUiLCJuYXYiLCJhYm91dEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW51QnRuIiwiY29udGFjdEJ0biIsInNldEF0dHJpYnV0ZSIsImRpc3BsYXkiLCJjb250ZW50IiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=