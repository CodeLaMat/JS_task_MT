// Define all the requried variables
const form = document.querySelector('#bgGenerator')
const firstColour = document.querySelector('.first');
const secondColour = document.querySelector('.second');
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

  let gradient = `linear-gradient(${selectedValue}, ${firstColour.value}, ${secondColour.value})`;
  console.log(gradient);

  document.body.style.backgroundImage = gradient;
  text.textContent = gradient + ';';
};

    
  form.addEventListener("change", selectedGradient);


