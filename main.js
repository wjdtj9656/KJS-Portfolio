"use strict";
// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});
//Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});
//Handle Scrolling when tapping contactMe
const contactMe = document.querySelector(".home__contact");
console.log(contactMe);
contactMe.addEventListener("click", (event) => {
  scrollIntoView("#contact");
});

//Make home slowly fade to transparent as the window scroll down
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//show skill
const showBack = document.querySelector(".showBack");
const skillBack = document.querySelector(".skillBack");
const skillRightArrowBack = document.querySelector(".skillArrowRightBack");
const skillDownArrowBack = document.querySelector(".skillArrowDownBack");
showBack.addEventListener("click", () => {
  if (skillBack.style.display === "block") {
    skillRightArrowBack.style.display = "inline";
    skillDownArrowBack.style.display = "none";
    skillBack.style.display = "none";
  } else {
    skillRightArrowBack.style.display = "none";
    skillDownArrowBack.style.display = "inline";
    skillBack.style.display = "block";
  }
});
const showFront = document.querySelector(".showFront");
const skillFront = document.querySelector(".skillFront");
const skillRightArrowFront = document.querySelector(".skillArrowRightFront");
const skillDownArrowFront = document.querySelector(".skillArrowDownFront");
showFront.addEventListener("click", () => {
  if (skillFront.style.display === "block") {
    skillRightArrowFront.style.display = "inline";
    skillDownArrowFront.style.display = "none";
    skillFront.style.display = "none";
  } else {
    skillRightArrowFront.style.display = "none";
    skillDownArrowFront.style.display = "inline";
    skillFront.style.display = "block";
  }
});
const showTools = document.querySelector(".showTools");
const skillTools = document.querySelector(".skillTools");
const skillRightArrowTools = document.querySelector(".skillArrowRightTools");
const skillDownArrowTools = document.querySelector(".skillArrowDownTools");
showTools.addEventListener("click", () => {
  if (skillTools.style.display === "block") {
    skillRightArrowTools.style.display = "inline";
    skillDownArrowTools.style.display = "none";
    skillTools.style.display = "none";
  } else {
    skillRightArrowTools.style.display = "none";
    skillDownArrowTools.style.display = "inline";
    skillTools.style.display = "block";
  }
});

//show Arrow UP button when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

//Handle click on the arrow-up button
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
