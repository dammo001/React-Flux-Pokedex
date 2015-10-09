/* global React */

window.Index = React.createClass({
  getInitialState: function(){
    alert("initial")
    return {};
  },
  render: function(){
    console.log("rendering INDEx")
    return (
      <div>
        <div className="pokemon-index">
          <PokemonsIndex/>
        </div>
      </div>
    );
  }

});
