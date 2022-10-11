const header = document.querySelector("header");
const backButton = document.querySelector("#backToTop");
const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");
let links = document.querySelectorAll("nav ul li a");
const closeButton = document.querySelector(".closeBtn");
const overlay = document.querySelector(".overlay");
const modalButton = document.querySelector("#modalButton");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add("bg");
    backButton.style.display = "block";
  } else {
    header.classList.remove("bg");
    backButton.style.display = "none";
  }
};

const getToTop = () => {
  console.log("clicked");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (const link of links) {
    link.addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

const modal = () => {
  overlay.classList.toggle("visible");
};

backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
modalButton.addEventListener("click", modal);
closeButton.addEventListener("click", modal);
