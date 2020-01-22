import * as apiUtil from "../util/api_util"

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON"

export const receiveAllPokemon = pokemon => ({
    type: receiveAllPokemon,
    pokemon
})

export const fetchAllPokemon = () => {
    return apiUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
}

window.receiveAllPokemon = receiveAllPokemon;
window.fetchAllPokemon = fetchAllPokemon;