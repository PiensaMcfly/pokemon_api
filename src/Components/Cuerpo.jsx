import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cuerpo = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonData = response.data.results;
        const detailedData = await Promise.all(
          pokemonData.map(async (pokemon) => {
            const detailResponse = await axios.get(pokemon.url);
            return detailResponse.data;
          })
        );
        setPokemon(detailedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately, e.g., display an error message
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        <div className='divider'></div>
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pokemon.map((poke) => (
          <li key={poke.id} className="bg-yellow-200 p-4 rounded-lg shadow-md hover:bg-yellow-300">
            <img src={poke.sprites.front_default} alt={poke.name} className="pokemon-image" />
            <h2 className="pokemon-name">{poke.name.toUpperCase()}</h2>
            <p className="pokemon-type">Tipo: {poke.types[0].type.name}</p>
            <Link to={`/pokemon/${poke.id}`} className='link'>{poke.name}</Link>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Cuerpo;
