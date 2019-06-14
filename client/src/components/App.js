import React from 'react';
import Search from './Search.js';
import PokemonList from './PokemonList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //pokemon = []
    };
  }
  

  render() {
    return (
    <div>
      <Search onChange={} />
      <PokemonList pokemon={this.props.pokemon} />
    </div>
    )
  }
};

export default App; 