const slider = document.querySelector(".slider");
const slider__item = slider.querySelector(".slider__item");
const slider__item_All = document.querySelectorAll(".slider__item");
var isScrolling = true;

let press = false;
let startX;
let scrollLeft;
let save_position = [];
// let ontouchstart = window.ontouchstart;
// let ontouchend = window.ontouchend;

for (let i = 0; i < slider__item_All.length; i++) {
  save_position.push(slider__item_All[i].offsetLeft);
  //   save_position[0] = 0;
}

slider.addEventListener(
  !window.ontouchstart ? "mousedown" : "ontouchstart",
  (e) => {
    press = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }
);
slider.addEventListener("mouseleave", () => {
  press = false;
});
slider.addEventListener(!window.ontouchend ? "mouseup" : "ontouchend", () => {
  magnetEffect();
  press = false;
});

slider.addEventListener("scroll", (event) => {
  window.clearTimeout(isScrolling);
  isScrolling = setTimeout(function () {
    magnetEffect();
  }, 66);
});

slider.addEventListener(
  !window.ontouchmove ? "mousemove" : "touchmove",
  (e) => {
    if (press) {
      const x = e.pageX - slider.offsetLeft;
      const move = (x - startX) * 1;
      slider.scrollLeft = scrollLeft - move * 2;
    }
  }
);

function magnetEffect() {
  let val = slider.scrollLeft;
  let a = save_position.reduce(function (a, c) {
    return Math.abs(a - val) < Math.abs(c - val) ? a : c;
  });
  slider.scrollLeft = a - 20;
}
