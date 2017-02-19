import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  playersRequest: ['data'],
  playersSuccess: ['payload'],
  playersFailure: null,
  addPlayer: ['player'],
  deletePlayer: ['id'],
  selectPlayer: ['id'],
  choosePlayer: ['id'],
  resetPlayer: null,
})

export const PlayersTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  selectedPlayer: {name: 'Dawid', description: 'Wins: 4', id: 1},
  data: null,
  fetching: false,
  payload: null,
  error: null,
  players: [
      {name: 'Dawid', wins: 4, id: 1, score: 0, selected: true},
      {name: 'Marcin', wins: 5, id: 2, score: 0, selected: true},
    ],
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>{
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

export const deletePlayer = (state, { id }) => {
  const players = state.players.filter(o => o.id !== id)
  return state.merge({ players })
}

export const selectPlayer = (state, { id }) => {
  const selectedPlayer = state.players.find(o => o.id === id)
  return state.merge({ selectedPlayer })
}

export const choosePlayer = (state, { id }) => {
  const playersArray  = state.players
  const isSelected = playersArray.find(o => o.id === id).selected
  const players = playersArray.update(
        playersArray.findIndex(function(item) { 
          return item.id === id; 
        }), function(item) {
          return item.set("selected", !isSelected);
        }
      ); 
  return state.merge({ players })
}

export const resetPlayer = (state, { id }) => {
  return state.merge({ players: [] })
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
  [Types.DELETE_PLAYER]: deletePlayer,
  [Types.SELECT_PLAYER]: selectPlayer,
  [Types.CHOOSE_PLAYER]: choosePlayer,
  [Types.RESET_PLAYER]: resetPlayer,
})
