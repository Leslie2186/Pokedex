/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MyTitle from "./components/MyTitle"*/
import { useState } from 'react';
import PokemonCard from './components/PokemonCard'
import './App.css'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


let buttonPrecedent;
let buttonSuivant;

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrecedent = () => {
    setPokemonIndex(pokemonIndex - 1);
  }

  const handleClickSuivant = () => {
    setPokemonIndex(pokemonIndex + 1);
  }

  if(pokemonIndex > 0 && pokemonIndex < pokemonList.length -1){ 
    buttonPrecedent = <button onClick={handleClickPrecedent}>Précédent</button>
    buttonSuivant = <button onClick={handleClickSuivant}>Suivant</button>

  }else if(pokemonIndex === pokemonList.length -1){
    buttonSuivant = null;

  }else{
    buttonSuivant = <button onClick={handleClickSuivant}>Suivant</button>
  }

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {buttonPrecedent}
      {buttonSuivant}
    </div>
  )
}

export default App
