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

const ButtonStyle = styled.button`
    padding: 10px;
    margin-top: 20px;
    border-radius: 5px;
    background-color: #3d7dca;
    color: white;
    font-family: 'Lilita One', cursive;
    font-size: 20px;
`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 30%;
    margin: auto;
`

const NavStyle = styled.div`
    border: 1px solid #3d7dca;
    background-color: #ffd264;
    padding: 0;
    margin: 0;
    font-family: 'Lilita One', cursive;
`

const PokemonList = props => {

    return (
        <div>
            <NavStyle>
                <h1>Pokemon!</h1>
            </NavStyle>
            <ButtonDiv>
                <ButtonStyle onClick={props.getPoke}>Retrieve Pokemon!</ButtonStyle>
                <ButtonStyle onClick={() => props.nextPoke(props.nextUrl)}>Next List of Pokemon!</ButtonStyle>
            </ButtonDiv>
            <DivStyle>
                {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
                {props.pokemon.map(item => (
                    <Pokemon pokemon={item} isFetching={props.isFetching} />
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