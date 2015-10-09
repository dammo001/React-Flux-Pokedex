/* global ReactRouter, React */

$(function(){
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;


  React.render(
    <Router>
      <Route path= "/" component={window.Index}>
      </Route>
    </Router>,
      document.getElementById('pokedex')
    );

//   React.render(
//     React.createElement(Router),
//     document.getElementById('pokedex')
//   );
});
