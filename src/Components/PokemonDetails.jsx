import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import '../App.css';


function PokemonDetails() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle the error appropriately, e.g., display an error message
            }
        };
        fetchPokemon();
    }, [id]);

    return (
        <div className="pokemon-card">
          <Link to="/">
            <button className="link">Volver a la lista</button>
          </Link>
          <img className="pokemon-image" src={pokemon?.sprites.front_default} alt={pokemon?.name} />
          <div className="pokemon-info">
            <h2 className="pokemon-name">{pokemon?.name}</h2>
            <p className="pokemon-type">Tipo: {pokemon?.types[0]?.type?.name}</p>
            <div className="pokemon-abilities">
              <h3>Habilidades</h3>
              <ul>
                {pokemon?.abilities?.map((ability) => (
                  <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
            <div className="pokemon-stats">
              <h3>Estadísticas</h3>
              {/* Aquí puedes mostrar las estadísticas del Pokémon, por ejemplo, usando una tabla */}
            </div>
            <div className="pokemon-description">
              <h3>Descripción</h3>
              {/* Aquí puedes agregar una breve descripción del Pokémon */}
            </div>
          </div>
        </div>
      );
    };


export default PokemonDetails;
