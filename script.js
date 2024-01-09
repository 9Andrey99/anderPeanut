"use strict";

location.replace("https://anderpeanut.andrey9909.repl.co")

/* -- Load Stage -- */

var modal = document.getElementById("myModal");

var loader = document.querySelector(".loader");

window.onload = function() {
  modal.style.display = "block";
  loader.style.display = "block";

  setTimeout(function() {
    modal.style.display = "none";
    loader.style.display = "none";
    modal.style.opacity = 0;
  }, 600);
};

/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const wait = ms => {
  let now = new Date().getTime();
  let end = now + ms;

  while (now < end) {
    now = new Date().getTime();
  }
}

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "after";

  nextSlide.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
    nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

  currentSlide.dataset.status = "before";

  nextSlide.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

wait(1000); handleRightClick(); wait(1000); handleRightClick(); wait(2000); handleRightClick();
setInterval(handleRightClick, 2000)

/* -- Mobile Nav Toggle -- */

const nav = document.querySelector("nav");

const handleNavToggle = () => {
  nav.dataset.transitionable = "true";

  nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
}

window.matchMedia("(max-width: 800px)").onchange = e => {
  nav.dataset.transitionable = "false";

  nav.dataset.toggled = "false";
};
