function NavBar ({pokemonList, pokemonIndex, setPokemonIndex}){

    const changeIndex = (index) => {
      setPokemonIndex(pokemonIndex = index);
    }

    return <nav>
        {pokemonList.map((pokemon, index) => (
          <button key={pokemon.name} onClick={() => changeIndex(index)}>
            {pokemon.name}
          </button>
        ))}
    </nav>

}

export default NavBar