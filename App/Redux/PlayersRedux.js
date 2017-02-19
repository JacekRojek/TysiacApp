import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  playersRequest: ['data'],
  playersSuccess: ['payload'],
  playersFailure: null,
  addPlayer: ['player'],
})

export const PlayersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: false,
  payload: null,
  error: null,
  players: [
      {name: 'Dawid', description: 'Wins: 4'},
      {name: 'Marcin', description: 'Wins: 5'},
    ],
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>{
  console.warn("Request")
  state.merge({ fetching: true, data, payload: null })
}

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

export const addPlayer = (state, { player }) => {
  const players = state.players.concat(player)
  return state.merge({ players })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.Players_REQUEST]: request,
  [Types.Players_SUCCESS]: success,
  [Types.Players_FAILURE]: failure,
  [Types.ADD_PLAYER]: addPlayer,
})
