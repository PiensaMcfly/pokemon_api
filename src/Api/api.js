export async function dataPokemones(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const dataPokemon = await response.json();
    return dataPokemon;
}


export async function dataSpecies(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species')
    const dataSpecies = await response.json();
    return dataSpecies;
}

export async function pokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/${name}');
    const pokemon = await response.json();
    return pokemon;
    
}