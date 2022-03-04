var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
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

function myFunction() { 
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) { 
  if (!event.target.matches('.subnavbnt')) { 
    var dropdowsn = document.getElementsByClassName("subnav-content")
    var i;
    for (i = 0; i < dropdowsn.length; i++) { 
      var openDropdowns = dropdowsn[i];
      if (openDropdowns.classList.contains('show')) { 
        openDropdowns.classList.remove('show');
      }
    }
  }
}
