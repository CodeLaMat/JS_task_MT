const pokemonBox = document.querySelector(".pokemonBox");
const searchBox = document.querySelector(".searchBox");

const generations = [
  { limit: 151, offset: 0 },
  { limit: 100, offset: 151 },
  { limit: 135, offset: 251 },
  { limit: 107, offset: 386 },
  { limit: 151, offset: 0 },
  { limit: 135, offset: 251 },
  { limit: 107, offset: 386 },
  { limit: 151, offset: 0 },
];

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
    generation: data.versions,
    type: data.type,
    // We need to put put data to local storage local.Storage.setItem("data", )
    // we use promise.all
  }));
  displayPokemon(pokemon);
};

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) =>
        `<li class="card"> <img class="card-image" src="${pokeman.image}"/> <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2> </a> <h4>${pokeman.generation}</h4> <p>${pokeman.type}</p></li> `
    )
    .join("");
  pokemonBox.innerHTML = pokemonHTMLString;
};

const selectPokemon = async (name) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokeman = await response.json();
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
