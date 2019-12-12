import React from "react";
import Loader from "react-loader-spinner";
import Image from "../images/real-poke.jpg"
import styled from "styled-components";

const DivStyle = styled.div`
    border: 1px solid black;
    height: 350px;
    width: 350px;
    margin-top: 20px;
`

const Pokemon = props => {
    return (
        <DivStyle>
            {props.isFetching && (<Loader type="Puff" color="#00BFFF" height={100} width={100} />)}
            <img src={Image} />
            <h2>{props.pokemon.name}</h2>
        </DivStyle>
    );
}

export default Pokemon;