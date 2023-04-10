//window onload
function ready(callback) {
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
}

// Name animation
var words = ["JINHUI", "JASON"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 100;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    document.getElementById("myfirstname").innerText = part;
  }, speed);
};

ready(wordflick);

// photo slide
let slideIndex = 0;
function showSlides() {
  let slides = document.getElementsByClassName("photoSlides");
  let dots = document.getElementsByClassName("dot");
  // hide by default
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // auto start over
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // dot
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dotactive", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " dotactive";
  setTimeout(showSlides, 3000);
}
ready(showSlides);

//toggler menu
const getNavToggler = document.querySelector(".nav__toggler");
const getNavMenu = document.querySelector(".nav__menu");
getNavToggler.addEventListener("click", function () {
  getNavMenu.classList.toggle("nav__menu--expanded");
});

function handleNavMenu(item) {
  item.classList.toggle("change");
}
