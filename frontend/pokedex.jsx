import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon, requestPokemon , recievePokemon} from './actions/pokemon_actions.js';
import { fetchAllPokemon, fetchPokemon} from './util/api_util.js';
import configureStore from './store/store';
import { selectAllPokemon } from './reducers/selectors';
import Root from './components/root';


window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon;
window.requestAllPokemon = requestAllPokemon;
window.selectAllPokemon = selectAllPokemon;
window.fetchPokemon = fetchPokemon;
window.requestPokemon = requestPokemon;
window.recievePokemon = recievePokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

//an event listener from DOMContentLoaded
