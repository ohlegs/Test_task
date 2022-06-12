let wrapper = document.querySelector(".wrapper");
let square = document.querySelectorAll(".square");
console.log(square);
let counter = 0;
let scrollHeight = window.scrollMaxY;
let scrollCenter = scrollHeight / 2;
let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;

window.addEventListener("scroll", function (event) {
  if (window.pageYOffset >= scrollCenter) {
    window.scrollTo(0, scrollCenter);
    document.body.overflow = "hidden";
    counter_1 += 2.5;
    square[0].style.transform = `rotate(${
      counter_1 > 180 ? 180 : counter_1
    }deg)`;
  }
});
