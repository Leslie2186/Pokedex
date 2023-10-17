import PropTypes from "prop-types";
import './PokemonCard.css';

function PokemonCard(props) {

    return <figure className="containerCard">
            {props.pokemon.imgSrc ? <img src={props.pokemon.imgSrc} alt={props.pokemon.name}/> : <p>???</p>}

        <figcaption>
            {props.pokemon.name}
        </figcaption>
    </figure>;

}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc : PropTypes.string
    }).isRequired,
}

export default PokemonCard;