import React, { useEffect, useState } from 'react'
import { dataPokemones } from '../Api/api';


const Cuerpo = () => {
    const [pokemon, setPokemon] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const datos = await dataPokemones();
            setPokemon(datos.results);
        }
        fetchData();
    }, []);

    return (
        <div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pokemon.map((pokemon) => (
                    
                    <li key={pokemon.name} className="bg-yellow-200 p-4 rounded-lg shadow-md hover:bg-yellow-300">
                    <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
                    <h2 className="text-xl font-bold text-center">{pokemon.name}</h2>
                    <p className="text-sm text-gray-600 text-center">Tipo: {pokemon.type}</p>
                    <a href={pokemon.url}>Ir</a>
                  </li>
                )
                )}
            </ul>
        </div>
    );
}

export default Cuerpo;