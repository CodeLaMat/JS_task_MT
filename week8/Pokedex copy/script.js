const pokemonBox = document.querySelector(".pokemonBox");
const searchBox = document.querySelector(".searchBox");

let pokemonCount = [];

const getPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  const data = await response.json();
  const pokemon = data.results.map((data, index) => ({
    name: data.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));
  displayPokemon(pokemon);
};

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) =>
        `<li class="card"> <img class="card-image" src="${pokeman.image}"/> <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2> </a> </li> `
    )
    .join("");
  pokemonBox.innerHTML = pokemonHTMLString;
};

const selectPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokeman = await response.json();
  displayPokemanPopup(pokeman);
};

const displayPokemanPopup = (pokeman) => {
  console.log(pokeman);
  const type = pokeman.types.map((type) => type.type.name).join(", ");
  const htmlString = `<div class="popup"> <button id="closeBtn" onclick="closePopup()">Close</button> <div class="card"> <img class="card-image" src="${pokeman.sprites["front_default"]}"/> <h2 class="card-title">${pokeman.name}</h2> <p><small>Type: ${type} | Height:</small> ${pokeman.height} | Weight: ${pokeman.weight}</p> </div> </div> `;

  pokemonBox.innerHTML = htmlString + pokemonBox.innerHTML;
};

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};

getPokemon();

searchBox.addEventListener("click", getPokemon);

// .catch((err) => {
//   pokemonBox.innerHTML = `
//   <h4>Pokemon not found 😞</h4>
//   `;
//   console.log("Pokemon not found", err);
// });

//   e.preventDefault();
// }

// pokemonBox.innerHTML = `
// <div>
//   <img
//     src="${data.sprites.other["official-artwork"].front_default}"
//     alt="Pokemon name"
//   />
// </div>
// <div class="pokemonInfos">
//   <h1>${capitalizeFirstLetter(data.name)}</h1>
//   <p>Size: ${data.size}</p>
// </div>`;
