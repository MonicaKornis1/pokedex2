import React from 'react';
import PokemonIndexContainer from './pokemon_index_container';
import PokemonIndexItem from './pokemon_index_item';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    return (
    <div>
      <ul>
        {
          this.props.pokemon.map( poke => {
            return (<PokemonIndexItem key={poke.id} pokemon={poke}/>);
            }
          )
        };
      </ul>
    </div>
    );
  }
}

export default PokemonIndex;
