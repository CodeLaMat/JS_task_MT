const header = document.querySelector('header');
const backButton = document.querySelector('#backToTop');
const mobButton = document.querySelector('#mobileButton');
const nav = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add('bg');
    backButton.style.display = 'block';
  } else {
    header.classList.remove('bg');
    backButton.style.display = 'none';
  }
};

const getToTop = () => {
  console.log('clicked');
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  if (nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
    document.body.style.overflow = '';
  } else {
    nav.classList.add('responsive');
    document.body.style.overflow = 'hidden';
  }
};

for (const link of links) {
  link.addEventListener('click', mobMenu);
}

backButton.addEventListener('click', getToTop);
mobButton.addEventListener('click', mobMenu);