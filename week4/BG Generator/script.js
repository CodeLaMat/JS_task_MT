// Define all the requried variables
const form = document.querySelector('#bgGenerator')
const firstColor = document.querySelector('.first');
const secondColor = document.querySelector('.second');
const direction = document.querySelectorAll('input [name="arrow"]');

let text = document.querySelector ('p')

const selectedGradient = (event) => {

  event.preventDefault();
  let selectedValue;
  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }

  let gradient = `linear-gradient(${selectedValue}, ${firstColor.value}, ${secondColor.value})`;

  document.body.style.backgroundImage = gradient;
  text.textContent = gradient + ';';
};

  form.addEventListener("change", selectedGradient);


