import * as actionTypes from '../constants/actionTypes'

const initialState = {
  myTracks: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MY_TRACKS_SET:
      return setMyTracks(state, action)
  }
  return state
}

function setMyTracks(state, action) {
  const {myTracks} = action
  return { ...state, myTracks }
}
