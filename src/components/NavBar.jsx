let buttonPrecedent;
let buttonSuivant;


function NavBar ({pokemonList, pokemonIndex, setPokemonIndex}){
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

    return <nav>
        {buttonPrecedent}
        {buttonSuivant}
    </nav>

}

export default NavBar