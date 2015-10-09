
var ApiActions = window.ApiActions = {};

var receiveAllPokemons = ApiActions.receiveAllPokemons = function(pokemons) {
  AppDispatcher.dispatch({
    actionType: PokemonConstants.POKEMONS_RECEIVED,
    item: pokemons
  })


};
