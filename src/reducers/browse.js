import * as actionTypes from '../constants/actionTypes'

const initialState = {
  featuredPlaylists: [],
  activePlaylist: null,
  tracksOfActivePlaylist: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FEATURED_PLAYLIST_SET:
      return setFeaturedPlaylists(state, action)
    case actionTypes.FEATURED_PLAYLIST_SELECT:
      return setActiveFeaturedPlaylists(state, action)
    case actionTypes.FEATURED_PLAYLIST_CLEAR_SELECT:
      return setClearActiveFeaturedPlaylists(state, action)
  }
  return state
}

function setFeaturedPlaylists(state, action) {
  const {featuredPlaylists} = action
  return { ...state, featuredPlaylists }
}

function setActiveFeaturedPlaylists(state, action) {
  const {activePlaylist, tracksOfActivePlaylist} = action
  return { ...state, activePlaylist, tracksOfActivePlaylist }
}

function setClearActiveFeaturedPlaylists(state, action) {
  return { ...state, activePlaylist: null }
}
