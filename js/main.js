/*
--------------------------------------------------
Advantages Circles loading
--------------------------------------------------
*/

let advantageCircle = document.querySelectorAll(".circular-loader");
let advantageValue = document.querySelectorAll(".loader-value");

let dimensionEle = document.getElementById("dimension");
let animated = false;
// function to start loading
function startLoading(ele, index, type, value, end) {
  let startLoading = setInterval(
    () => {
      value++;
      advantageValue[index].textContent = `${value} ${type}`;
      ele.style.background = `conic-gradient(
        #02e0b8 ${type == "Hour" ? value * 15 : value * 4}deg,
        #fff ${type == "Hour" ? value * 15 : value * 4}deg)`;
      if (value === end) {
        clearInterval(startLoading);
      }
    },
    type == "Hour" ? 150 : 35
  );
}

// looping on the circles and add this functionality
function addLoaderEffect() {
  advantageCircle.forEach((circle, i) => {
    startLoading(
      circle,
      i,
      advantageValue[i].dataset.type,
      0,
      +advantageValue[i].dataset.num
    );
  });
  animated = true;
}

//implement the loader animaiton once we reach dimensions picture
window.addEventListener("scroll", () => {
  let imageTopOffset = dimensionEle.offsetTop;
  let imageOffsetHeight = dimensionEle.offsetHeight;
  let windowHeight = this.innerHeight;
  let scrollTop = this.scrollY;
  if (scrollTop > imageTopOffset + imageOffsetHeight - windowHeight) {
    !animated ? addLoaderEffect() : "";
  }
});

/*
--------------------------------------------------
Product Active Info
--------------------------------------------------
*/
let listItems = document.querySelectorAll(".info-section-list-item");
let infoSections = document.querySelectorAll(".product-info");

let activeSection = "facts";

// adding click functionality
function listItemsClickHandler(e) {
  listItems.forEach((item, i) => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
  activeSection = e.currentTarget.dataset.type;
  showActiveSection();
}

// function to show the active Info Section depending on click
function showActiveSection() {
  infoSections.forEach((sec) => {
    sec.classList.remove("active");
  });
  infoSections.forEach((sec) => {
    if (sec.classList.contains(activeSection)) {
      sec.classList.add("active");
    }
  });
}
// adding click function on every list item
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    listItemsClickHandler(e);
  });
});

/*
--------------------------------------------------
Live Demo Video Pop-up
--------------------------------------------------
*/
let playButton = document.getElementById("play-video");
let popUp = document.querySelector(".video-pop-up");
let closePop = document.querySelector(".close");

// function to add click Event and show video popUp
function controlPopup() {
  if (this === playButton) {
    popUp.classList.add("play");
  } else popUp.classList.remove("play");
}
playButton.addEventListener("click", controlPopup);
closePop.addEventListener("click", controlPopup);

/*
--------------------------------------------------
Scroll top button
--------------------------------------------------
*/

let scrollTop = document.getElementById("scroll-top");

// check while scrolling if we've reached the min height or not to show or hide the button
window.addEventListener("scroll", () => {
  if (this.scrollY > 1500) {
    scrollTop.classList.add("active");
  } else scrollTop.classList.remove("active");
});

// add scroll top functionality
scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: "", behavior: "smooth" });
});

/*
--------------------------------------------------
Show mobile nav
--------------------------------------------------
*/

let bars = document.querySelector(".bars");
let links = document.getElementById("links");

// add click handler on bars icon
bars.addEventListener("click", () => {
  links.classList.toggle("active");
});
