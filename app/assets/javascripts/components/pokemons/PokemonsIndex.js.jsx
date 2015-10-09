/* global React */
(function() {
  'use strict';

  window.PokemonsIndex = React.createClass({
    getInitialState: function () {
      return {
        pokemons: []
      };
    },

    componentDidMount: function(){
      window.PokemonStore.addPokemonsIndexChangeListener(this.onChange);
      window.ApiUtil.fetchAllPokemons();
    },

    componentWillUnmount: function(){
      window.PokemonStore.removePokemonsIndexChangeListener(this.onChange);
    },

    onChange: function() {
      this.setState({ pokemons: window.PokemonStore.all()});
    },
    render: function () {
      return (
        <div>
          POKEMON
          <ul>
            { this.state.pokemons.map(function (pokemon) {
              return <PokemonIndexItem pokemon={pokemon} key={pokemon.id}/>
            }) }
          </ul>
        </div>
      );
    }
  });
}());
