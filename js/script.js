// Header
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "5px";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("header nav");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("awer");
});


const button = document.getElementById("btn");
const drop = document.getElementById("myDropdown");

button.addEventListener("click", function () { 
  drop.classList.toggle("show");
})

const button2 = document.getElementById("btn1");
const drop2 = document.getElementById("myDropdown1");

button2.addEventListener("click", function () { 
  drop2.classList.toggle("show");
})

const button3 = document.getElementById("btn2");
const drop3 = document.getElementById("myDropdown2");

button3.addEventListener("click", function () { 
  drop3.classList.toggle("show");
})