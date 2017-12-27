import configureStore from '../store/store';

export const selectAllPokemon = (state) => {

  return Object.keys(state.entities.pokemon).map( id => {
    return state.entities.pokemon[id];
  });
};
