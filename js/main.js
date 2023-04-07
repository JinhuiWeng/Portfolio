// Name animation

function ready(callback) {
  if (document.readyState != "loading") callback();
  else if (document.addEventListener)
    document.addEventListener("DOMContentLoaded", callback);
}

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


//toggler menu
const getNavToggler = document.querySelector(".nav__toggler");
const getNavMenu = document.querySelector(".nav__menu");
getNavToggler.addEventListener("click", function () {
  getNavMenu.classList.toggle("nav__menu--expanded");
});

function handleNavMenu(item) {
  item.classList.toggle("change");
}
