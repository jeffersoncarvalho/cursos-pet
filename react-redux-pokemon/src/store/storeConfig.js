import {createStore, combineReducers} from 'redux'

import pokemonIdReducer from './reducers/pokemonId'

const reducers = combineReducers(
    {
        pokemonId: pokemonIdReducer
    } // os reducers
) //combine reducers

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig