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

