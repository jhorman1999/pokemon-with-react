
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Pokemons from './components/pagePrincipal';
import InfoPokemon from './components/infoPokemon';
function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Pokemons}></Route>
      <Route path="/pokemon/:name" exact component={InfoPokemon}></Route>
      </Router>
    
    </div>
  );
}

export default App;
