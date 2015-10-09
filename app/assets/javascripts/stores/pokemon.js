/* global PokemonConstants, AppDispatcher, EventEmitter */

(function() {
  'use strict';
  var _pokemons = [];
  var resetPokemons = function (pokemons) {
    _pokemons = pokemons;
  };

  // Why is 'this' undefined?

  window.PokemonStore = $.extend({}, EventEmitter.prototype, {

    all: function () {
      return _pokemons.slice();
    },

    addPokemonsIndexChangeListener: function(callback) {
      this.on("INDEX_CHANGE", callback);
    },

    removePokemonsIndexChangeListener: function(callback) {
      this.removeEventListener("INDEX_CHANGE", callback);
    },

    pokemonsIndexChanged: function() {
      this.emit("INDEX_CHANGE");
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch(payload.actionType) {
        case(PokemonConstants.POKEMONS_RECEIVED):
          resetPokemons(payload.item);
          window.PokemonStore.pokemonsIndexChanged();
          break;
      }
    })

  });
})();
