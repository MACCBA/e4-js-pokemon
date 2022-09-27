const baseURL= `https://pokeapi.co/api/v2/pokemon/`;
const idInput =document.getElementById('theID');
const pokemonContainer=document.getElementById('pokemoncontainer');
const pokemones = async (id) => {
    try {
        const response = await fetch (baseURL+id);
        const pokemon = await response.json();
        console.log(pokemon);
        renderpokemon(pokemon);

    } catch (error) {
        alert (`NO HAY POKEMON CON ESE ID`);
    }
}

const renderpokemon =pokemon => {
  const imgen =pokemon.sprites.other.home.front_default;
  const tipo =pokemon.types[0].type.name;

const {name, height, weight}=pokemon;
pokemonContainer.innerHTML= 
`
    <div class='card'>
        <h1> ${name} </h1>
        <img src="${imgen}" />
        <h2> Tipo : ${tipo}</h2>
        <h2> Altura:${height/10} mts</h2>
        <h2> Peso: ${weight/10} kg</h2>
    </div> 
    
`
}

poke.addEventListener('submit', e => {
   
    e.preventDefault();
   const valor=idInput.value;
   console.log(valor);
   if (valor > 0 ){
    pokemones(valor);
   }
   else{
    alert(`ingrese un numero`);
   }
    idInput.value='';

  
    
});