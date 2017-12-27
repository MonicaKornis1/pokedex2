import { RECIEVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (oldState={}, action) => {
  let newState = {};
  switch (action.type) {
    case RECIEVE_POKEMON:
      return action.pokemon.items;
    default:
      return oldState;
  }
};

export default itemsReducer;
