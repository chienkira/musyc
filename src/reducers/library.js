import * as actionTypes from '../constants/actionTypes'

const initialState = {
  myTracks: [],
  myPlaylists: [],
  myAlbums: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MY_TRACKS_SET:
      return setMyTracks(state, action)
    case actionTypes.LIBRARY_PLAYLISTS_DATA_SET:
      return setLibraryPlaylists(state, action)
  }
  return state
}

function setMyTracks(state, action) {
  const {myTracks} = action
  return { ...state, myTracks }
}

function setLibraryPlaylists(state, action) {
  const {libraryPlaylists} = action
  return { ...state, myPlaylists: libraryPlaylists}
}
