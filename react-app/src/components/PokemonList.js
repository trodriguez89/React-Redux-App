import React, { useEffect } from 'react';
import Pokemon from "./Pokemon";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { getPoke } from "../actions/pokemonAction";

const PokemonList = props => {


    return (
        <div>
            <h1>List of Pokemon</h1>
            <button onClick={props.getPoke}>Retrieve Pokemon!</button>
            <button>Next List of Pokemon!</button>
            {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
            {props.pokemon.map(item => (
                <Pokemon pokemon={item} />
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps, { getPoke })(PokemonList);