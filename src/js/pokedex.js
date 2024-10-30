const pokemonName = document.querySelector(".pokemon__name");
const pokemonID = document.querySelector(".pokemon__number");
const pokemonImage = document.querySelector(".pokemon__image");
const form = document.querySelector(".form");
const input = document.querySelector(".input__search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");

let searchPokemon = 1;

//CONECTAR E CAPTURAR AS INFORMAÇÕES DA POKIAPI

const fetchpokemon = async (pokemon) => {
    const APIResponde = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponde.status === 200){
        const data = await APIResponde.json();

return data
    }



 
};

const renderPokemon = async (pokemon) => {

    pokemonName.textContent = 'loading. . .';
    pokemonID.textContent = '😶';
    pokemonImage.src = 'https://i.pinimg.com/originals/0a/50/6f/0a506fe0f6c211128cf1ed370655c6a1.gif'

const data = await fetchpokemon(pokemon);

    console.log(data);

    if (data) {
        //quand der certo
        
        pokemonName.innerHTML = data.name;
        pokemonID.innerHTML = data.id;
        pokemonImage.src = data.sprites.versions["generation-v"]["black-white"].front_default;
        input.value = ""
        searchPokemon = data.id;

    } else {
        //quando der errado
        pokemonID.textContent = ""
        pokemonName.textContent = "not found :c"
        pokemonImage.src = 'https://i.pinimg.com/originals/80/e1/8d/80e18df0ed0ad872ac1a003d543d9613.gif'
        pokemonImage.Style.width = '35%';
    }
    
    

    
   
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value.toLowerCase())
});

buttonPrev.addEventListener ("click", () => {

    if (searchPokemon > 1) {

           searchPokemon -= 1;

    renderPokemon(searchPokemon)
    }
 
});

buttonNext.addEventListener ("click", ()=> {
    
   searchPokemon = searchPokemon += 1;

    renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);