function PokemonCard(props) {
    
    let imagePokemon;

    if(props.pokemon.imgSrc){
      imagePokemon = <img src={props.pokemon.imgSrc}/>;
    }else{
        imagePokemon = <p>???</p>;
    }

    return <figure>
        {imagePokemon}
        <figcaption>{props.pokemon.name}</figcaption>
    </figure>;
}

export default PokemonCard;