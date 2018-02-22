import * as actionTypes from '../constants/actionTypes'

const initialState = {
  featuredPlaylists: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FEATURED_PLAYLIST_SET:
      return setFeaturedPlaylists(state, action)
  }
  return state
}

function setFeaturedPlaylists(state, action) {
  const {featuredPlaylists} = action
  return { ...state, featuredPlaylists }
}
