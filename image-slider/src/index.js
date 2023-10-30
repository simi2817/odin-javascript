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