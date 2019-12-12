import React, { useEffect } from 'react';
import Pokemon from "./Pokemon";
import { connect } from "react-redux";

import { getPoke } from "../actions/pokemonAction";

const PokemonList = props => {


    return (
        <div>
            <h1>List of Pokemon</h1>
            <button onClick={props.getPoke}>Retrieve Pokemon!</button>
            {props.pokemon.map(item => (
                <Pokemon pokemon={item} />
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
    }
}

export default connect(mapStateToProps, { getPoke })(PokemonList);