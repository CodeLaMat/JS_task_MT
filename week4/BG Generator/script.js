const form = document.querySelector("#bgGenerator");

let firstColor = document.querySelector(".color1");
let secondColor = document.querySelector(".color2");
let direction = document.querySelectorAll('input[name="arrow"]');

let text = document.querySelector("p");

const setGradient = (event) => {
  event.preventDefault();
  let selectedValue;
  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }

  let gradient = `linear-gradient(${selectedValue}, ${firstColor.value}, ${secondColor.value})`;
  console.log(gradient);

  document.body.style.backgroundImage = gradient;
  text.textContent = gradient + ";";
};

form.addEventListener("change", setGradient);
