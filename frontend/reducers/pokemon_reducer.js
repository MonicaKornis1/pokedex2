import { RECIEVE_ALL_POKEMON, RECIEVE_POKEMON} from '../actions/pokemon_actions';

const pokemonReducer = (oldState=  {}, action) => {
  let newState = {};
  switch (action.type) {
    case RECIEVE_ALL_POKEMON:
      return action.pokemon;
    case RECIEVE_POKEMON:
      return action.pokemonAndItems.pokemon;
    default:
      return newState;
  }
};

export default pokemonReducer;
