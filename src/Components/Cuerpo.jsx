import React, { useEffect, useState } from 'react';
import { dataPokemones } from '../Api/api';

const Cuerpo = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const datos = await dataPokemones();
            const pokemonData = await Promise.all(
                datos.results.map(async (pokemon) => {
                    const response = await fetch(pokemon.url);
                    const data = await response.json();
                    return data;
                })
            );
            setPokemon(pokemonData);
        };
        fetchData();
    }, []);


    return (
        <div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pokemon.map((poke) => (
                <li key={poke.id} className="bg-yellow-200 p-4 rounded-lg shadow-md hover:bg-yellow-300">
                    <img src={poke.sprites.front_default} alt={poke.name} className="w-24 h-24 mx-auto" />
                    <h2 className="text-xl font-bold text-center">{poke.name}</h2>
                    <p className="text-sm text-gray-600 text-center">Tipo: {poke.types[0].type.name}</p> <a href={poke.url} className="text-blue-500 hover:underline">Más detalles</a>
                </li>
            ))}
        </ul>
    </div>
    );
}

export default Cuerpo;