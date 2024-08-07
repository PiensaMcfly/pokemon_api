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
            <ul className='listItem'>
                {pokemon.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
                
                ))}
            </ul>
        </div>
    );
}

export default Cuerpo;