import axios from "axios";

export const FETCH_POKE_START = "FETCH_POKE_START";
export const FETCH_POKE_SUCCESS = "FETCH_POKE_SUCCESS";
export const FETCH_POKE_FAILURE = "FETCH_POKE_FAILURE";

export const getPoke = () => dispatch => {
    dispatch({type: FETCH_POKE_START});
    axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
        console.log(response);
        dispatch({ type: FETCH_POKE_SUCCESS, payload: response.data.results})
    })
    .catch(error => {
        console.log(error);
        dispatch({type: FETCH_POKE_FAILURE, payload: error.response})
    })
}