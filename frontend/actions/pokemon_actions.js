import  { fetchAllPokemon, fetchPokemon } from '../util/api_util.js';

export const RECIEVE_ALL_POKEMON = 'RECIEVE_ALL_POKEMON';
export const RECIEVE_POKEMON = 'RECIEVE_POKEMON';

export const receiveAllPokemon = (pokemon) => {
  return {
    type: RECIEVE_ALL_POKEMON,
    pokemon

  };
};

export const recievePokemon = (pokemon) => {
  return {
    type: RECIEVE_POKEMON,
    pokemon
  };
};
//action creator return an action object


export const requestAllPokemon = () => (dispatch) => {
  return fetchAllPokemon().then((pokemon) =>
    dispatch(receiveAllPokemon(pokemon))
  );
};
//thunk action creator that will dispatch the action recieveALLPokemon if we are able to successfully fetch all the pokemon from the database

export const requestPokemon = (id) => (dispatch) => {
  return fetchPokemon(id).then((pokemon) =>
     dispatch(recievePokemon(pokemon))
  );
};
