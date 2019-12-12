import React, { useEffect } from 'react';
import Pokemon from "./Pokemon";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

import { getPoke, nextPoke } from "../actions/pokemonAction";

import styled from "styled-components";

const DivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`

const PokemonList = props => {

    return (
        <div>
            <h1>List of Pokemon</h1>
            <button onClick={props.getPoke}>Retrieve Pokemon!</button>
            <button onClick={() => props.nextPoke(props.nextUrl)}>Next List of Pokemon!</button>
            <DivStyle>
                {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
                {props.pokemon.map(item => (
                    <Pokemon pokemon={item} isFetching={props.isFetching}/>
                ))}
            </DivStyle>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        isFetching: state.isFetching,
        nextUrl: state.nextUrl

    }
}

export default connect(mapStateToProps, { getPoke, nextPoke })(PokemonList);