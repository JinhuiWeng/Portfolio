//window onload
function ready(callback) {
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
}

// Name animation
// flip
let words = ["JINHUI", "JASON"],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 100;
let wordFlick = function () {
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

// slide

let wordSlide = function () {
  //spaning header
  let projectHeaderTitle = document.getElementById("slide-text").innerText;
  let spaned = "";
  for (let i = 0; i < projectHeaderTitle.length; i++) {
    spaned += "<span>" + projectHeaderTitle[i] + "</span>";
  }

  //DOM

  let projectHeader = document.getElementById("slide-text");
  projectHeader.innerHTML = spaned;
  let letters = projectHeader.querySelectorAll("span");
  letters.forEach((letter, i) => {
    letter.style.animationDelay = i * 0.1 + "s";
  });
};

ready(wordFlick);
ready(wordSlide);

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

//toggler and nav menu
const getNavToggler = document.querySelector(".nav__toggler");
const getNavMenu = document.querySelector(".nav__menu");
const getNavItem = document.querySelectorAll(".nav__item");
getNavToggler.addEventListener("click", () =>
  getNavMenu.classList.toggle("nav__menu--expanded")
);

getNavItem.forEach((item) =>
  item.addEventListener("click", () => {
    if (getNavMenu.classList.contains("nav__menu--expanded")) {
      getNavMenu.classList.toggle("nav__menu--expanded");
      getNavToggler.classList.toggle("change");
    }
  })
);

function handleNavMenu(item) {
  item.classList.toggle("change");
}

//Back to top button
const backToTopButton = document.getElementById("back-to-top");

function scrollDownFunction() {
  if (window.pageYOffset > 1800) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}
window.addEventListener("scroll", scrollDownFunction);
backToTopButton.addEventListener("click", () => window.scrollTo(0, 0));
