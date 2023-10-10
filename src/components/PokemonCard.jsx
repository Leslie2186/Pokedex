import PropTypes from "prop-types";

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

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc : PropTypes.string
    }).isRequired,
}

export default PokemonCard;