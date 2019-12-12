import {FETCH_POKE_START, FETCH_POKE_SUCCESS, FETCH_POKE_FAILURE} from "../actions/pokemonAction";

const initialState = {
    pokemon: [],
    isFetching: false,
    error: "",
    nextUrl: "https://pokeapi.co/api/v2/pokemon/"

}

export const pokemonReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_POKE_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_POKE_SUCCESS:
            return {
                ...state,
                pokemon: action.payload.results,
                nextUrl: action.payload.next,
                isFetching: false,
                error: ""
            }
        case FETCH_POKE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}