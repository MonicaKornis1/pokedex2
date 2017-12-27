import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return(
    <div>
        <li>
          <Link to={`/pokemon/${pokemon.id}`}>
            {pokemon.name}
          <img src={pokemon.image_url} style={{width:"3%", height:"3%"}}/>
          </Link>
        </li>
    </div>
  );
};

export default PokemonIndexItem;
