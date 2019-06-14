import React from 'react';
import PokemonListItem from './PokemonListItem';

var PokemonList = (props) => (
  <div id="pokemonList">
    {props.pokemon.map((poke, i) => (
      <PokemonListItem poke={poke} key={i}  />
    )) }  
  </div>




)


export default PokemonList;


