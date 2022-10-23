const poke_container = document.getElementById("poke_container");
const pokeSearch = document.querySelector("#search");
const buttons = document.querySelectorAll(".button");
const title = document.querySelector(".title");
const pokemons_number = 649;

const colors = {
  fire: "#FDDFDF",
  grass: "#4FDED4",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#23d5d4",
  fairy: "#67eaff",
  poison: "#98d7a5",
  bug: "#f8d5a6",
  dragon: "#34b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5E6",
};
const main_types = Object.keys(colors);

let displayedPokes = [];

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};

// Fetching the full Pokeman data
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const pokemon = await response.json();
  createPokemonCard(pokemon);
  displayedPokes.push(pokemon);

  console.log(pokemon);
  return displayedPokes;
};

// Getting the icon of each type
const typeIcns = (type) => {
  switch (type) {
    case "fairy":
      return "https://upload.wikimedia.org/wikipedia/commons/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg";
    case "dark":
      return "https://upload.wikimedia.org/wikipedia/commons/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg";
    case "ghost":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg";
    case "grass":
      return "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg";
    case "dragon":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg";
    case "bug":
      return "https://upload.wikimedia.org/wikipedia/commons/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg";
    case "electric":
      return "https://upload.wikimedia.org/wikipedia/commons/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg";
    case "fire":
      return "https://upload.wikimedia.org/wikipedia/commons/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg";
    case "fighting":
      return "https://upload.wikimedia.org/wikipedia/commons/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg";
    case "flying":
      return "https://upload.wikimedia.org/wikipedia/commons/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg";
    case "ground":
      return "https://upload.wikimedia.org/wikipedia/commons/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg";
    case "ice":
      return "https://upload.wikimedia.org/wikipedia/commons/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg";
    case "normal":
      return "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg";
    case "poison":
      return "https://upload.wikimedia.org/wikipedia/commons/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg";
    case "psychic":
      return "https://upload.wikimedia.org/wikipedia/commons/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg";
    case "rock":
      return "https://upload.wikimedia.org/wikipedia/commons/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg";
    case "steel":
      return "https://upload.wikimedia.org/wikipedia/commons/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg";
    case "water":
      return "https://upload.wikimedia.org/wikipedia/commons/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg";
    default:
      return "#";
  }
};

// Creating pokeman cards for each pokemon
function createPokemonCard(pokemon) {
  const pokemonBox = document.createElement("div");
  pokemonBox.classList.add("pokemon");
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) >= 0);
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const cardColor = colors[type];
  let pokeInnerHTML = "";
  pokemonBox.style.backgroundColor = cardColor;
  if (pokemon.types.length > 1) {
    pokeInnerHTML = ` <div class="container">
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              pokemon.id
            }.svg" alt="${name}" />
        </div>
        <div class="info">
            <span class="number">#${pokemon.id
              .toString()
              .padStart(3, "0")}</span>
            <h3 class="name">${name}</h3> 
            <img class="typeImg" src="${typeIcns(
              pokemon.types[0].type.name
            )}" alt="pokemonType" />
            <img class="typeImg" src="${typeIcns(
              pokemon.types[1].type.name
            )}" alt="pokemonType" />
        </div>
        </div>
    `;
  } else {
    pokeInnerHTML = `<div class="container">
    <div class="img-container">
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        pokemon.id
      }.svg" alt="${name}" />
  </div>
  <div class="info">
      <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
      <h3 class="name">${name}</h3> 
      <img class="typeImg" src="${typeIcns(
        pokemon.types[0].type.name
      )}" alt="pokemonType" />
        </div>
        </div>
    `;
  }
  pokemonBox.innerHTML = pokeInnerHTML;

  poke_container.appendChild(pokemonBox);
}

// clearing the card fir each sorting
const clearCard = () => {
  const pokeCards = document.querySelectorAll(".pokemon");
  let clearedCards = [];
  for (let i = 0; i < pokeCards.length; i++) {
    const pokeCard = pokeCards[i];
    clearedCards = [...clearedCards, pokeCard];
  }
  clearedCards.forEach((deletedCard) => deletedCard.remove());
};

// Defining generations manually
const allPoke = () => {
  const foundAll = displayedPokes.filter((pokemon) => pokemon.id > 1);
  clearCard();
  foundAll.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen1 = () => {
  const foundGen1 = displayedPokes.filter((pokemon) => pokemon.id <= 151);
  clearCard();
  foundGen1.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen2 = () => {
  const foundGen2 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 67 && pokemon.id <= 188
  );
  clearCard();
  foundGen2.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen3 = () => {
  const foundGen3 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 20 && pokemon.id <= 121
  );
  clearCard();
  foundGen3.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen4 = () => {
  const foundGen4 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 122 && pokemon.id <= 199
  );
  clearCard();
  foundGen4.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen5 = () => {
  const foundGen5 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 200 && pokemon.id <= 287
  );
  clearCard();
  foundGen5.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen6 = () => {
  const foundGen6 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 288 && pokemon.id <= 400
  );
  clearCard();
  foundGen6.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen7 = () => {
  const foundGen7 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 401 && pokemon.id <= 519
  );
  clearCard();
  foundGen7.forEach((pokemon) => createPokemonCard(pokemon));
};
const pokeGen8 = () => {
  const foundGen8 = displayedPokes.filter(
    (pokemon) => pokemon.id >= 520 && pokemon.id <= 649
  );
  clearCard();
  foundGen8.forEach((pokemon) => createPokemonCard(pokemon));
};

buttons.forEach((button) => {
  if (button.value === "all") {
    button.addEventListener("click", allPoke);
  } else if (button.value === "1") {
    button.addEventListener("click", pokeGen1);
  } else if (button.value === "2") {
    button.addEventListener("click", pokeGen2);
  } else if (button.value === "3") {
    button.addEventListener("click", pokeGen3);
  } else if (button.value === "4") {
    button.addEventListener("click", pokeGen4);
  } else if (button.value === "5") {
    button.addEventListener("click", pokeGen5);
  } else if (button.value === "6") {
    button.addEventListener("click", pokeGen6);
  } else if (button.value === "7") {
    button.addEventListener("click", pokeGen7);
  } else if (button.value === "8") {
    button.addEventListener("click", pokeGen8);
  }
});

// Searching the pokemon
const searchPokemon = () => {
  poke_container.innerHTML = "";
  title.innerHTML = "Search result...";
  let searchPoke = pokeSearch.value;

  const pokeFilter = displayedPokes.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchPoke);
  });
  for (const poke of pokeFilter) {
    createPokemonCard(poke);
  }

  if (pokeFilter.length == 0) {
    title.innerHTML = "Could not find any pokemon with that name";
  }
};
pokeSearch.addEventListener("input", searchPokemon);
fetchPokemons();
