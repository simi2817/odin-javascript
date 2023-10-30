/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const pics = document.querySelectorAll(".pic");
const dots = document.querySelectorAll(".dot");
let slideShow;

function getCurrentPicNumber() {
  for (let i = 1; i <= 5; i++) {
    let pic = document.getElementById("pic"+i);
    let leftCssString = getComputedStyle(pic).getPropertyValue("left");
    if (leftCssString === "0px") {
      return i;
    }
  }
}

function displayPic(index) {
  if (index < 1 || index > 5) return;
  const distance = index - getCurrentPicNumber();
  for (let i = 1; i <= 5; i++) {
    let pic = document.getElementById("pic" + i);
    let leftCssString = getComputedStyle(pic).getPropertyValue("left");
    let leftCssNum = Number(leftCssString.slice(0, leftCssString.length - 2));
    pic.style.left = leftCssNum - distance * 1000 + "px";
  }
  document.getElementById("dot" + index).checked = true;
}

function moveLeft() {
  const currentPicNumber = getCurrentPicNumber();
  if (currentPicNumber > 1) {
    displayPic(currentPicNumber - 1);
  } else {
    displayPic(5);
  }
}

function moveRight() {
  const currentPicNumber = getCurrentPicNumber();
  if (currentPicNumber < 5) {
    displayPic(currentPicNumber + 1);
  } else {
    displayPic(1);
  }
}

function startShow() {
  slideShow = setInterval(() => {
    moveRight();
  }, 5000);
}

document.querySelector("#back").addEventListener("click", () => {
  moveLeft();
});
document.querySelector("#forward").addEventListener("click", () => {
  moveRight();
});
document.querySelector("#dot1").addEventListener("click", () => {
  displayPic(1);
});
document.querySelector("#dot2").addEventListener("click", () => {
  displayPic(2);
});
document.querySelector("#dot3").addEventListener("click", () => {
  displayPic(3);
});
document.querySelector("#dot4").addEventListener("click", () => {
  displayPic(4);
});
document.querySelector("#dot5").addEventListener("click", () => {
    displayPic(5);
  });

startShow();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxHQUFHOztBQUVILFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGljXCIpO1xuY29uc3QgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG90XCIpO1xubGV0IHNsaWRlU2hvdztcblxuZnVuY3Rpb24gZ2V0Q3VycmVudFBpY051bWJlcigpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgbGV0IHBpYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGljXCIraSk7XG4gICAgbGV0IGxlZnRDc3NTdHJpbmcgPSBnZXRDb21wdXRlZFN0eWxlKHBpYykuZ2V0UHJvcGVydHlWYWx1ZShcImxlZnRcIik7XG4gICAgaWYgKGxlZnRDc3NTdHJpbmcgPT09IFwiMHB4XCIpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UGljKGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDEgfHwgaW5kZXggPiA1KSByZXR1cm47XG4gIGNvbnN0IGRpc3RhbmNlID0gaW5kZXggLSBnZXRDdXJyZW50UGljTnVtYmVyKCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgIGxldCBwaWMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpY1wiICsgaSk7XG4gICAgbGV0IGxlZnRDc3NTdHJpbmcgPSBnZXRDb21wdXRlZFN0eWxlKHBpYykuZ2V0UHJvcGVydHlWYWx1ZShcImxlZnRcIik7XG4gICAgbGV0IGxlZnRDc3NOdW0gPSBOdW1iZXIobGVmdENzc1N0cmluZy5zbGljZSgwLCBsZWZ0Q3NzU3RyaW5nLmxlbmd0aCAtIDIpKTtcbiAgICBwaWMuc3R5bGUubGVmdCA9IGxlZnRDc3NOdW0gLSBkaXN0YW5jZSAqIDEwMDAgKyBcInB4XCI7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkb3RcIiArIGluZGV4KS5jaGVja2VkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbW92ZUxlZnQoKSB7XG4gIGNvbnN0IGN1cnJlbnRQaWNOdW1iZXIgPSBnZXRDdXJyZW50UGljTnVtYmVyKCk7XG4gIGlmIChjdXJyZW50UGljTnVtYmVyID4gMSkge1xuICAgIGRpc3BsYXlQaWMoY3VycmVudFBpY051bWJlciAtIDEpO1xuICB9IGVsc2Uge1xuICAgIGRpc3BsYXlQaWMoNSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICBjb25zdCBjdXJyZW50UGljTnVtYmVyID0gZ2V0Q3VycmVudFBpY051bWJlcigpO1xuICBpZiAoY3VycmVudFBpY051bWJlciA8IDUpIHtcbiAgICBkaXNwbGF5UGljKGN1cnJlbnRQaWNOdW1iZXIgKyAxKTtcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5UGljKDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0U2hvdygpIHtcbiAgc2xpZGVTaG93ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIG1vdmVSaWdodCgpO1xuICB9LCA1MDAwKTtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vdmVMZWZ0KCk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9yd2FyZFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb3ZlUmlnaHQoKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3QxXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlQaWMoMSk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG90MlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5UGljKDIpO1xufSk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RvdDNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheVBpYygzKTtcbn0pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3Q0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlQaWMoNCk7XG59KTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG90NVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRpc3BsYXlQaWMoNSk7XG4gIH0pO1xuXG5zdGFydFNob3coKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=