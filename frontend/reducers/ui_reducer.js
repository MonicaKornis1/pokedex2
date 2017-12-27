import { RECIEVE_POKEMON } from '../actions/pokemon_actions';

const uiReducer = (oldState={},action) => {
  let newState = {};
  switch (action.type) {
    case RECIEVE_POKEMON:
      return action.pokemon.pokemon.id;
    default:
      return oldState;
  }
};

export default uiReducer;
