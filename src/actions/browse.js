import * as actionTypes from '../constants/actionTypes'
import * as actions from './index'

export function setFeaturedPlaylists(featuredPlaylists) {
  return {
    type: actionTypes.FEATURED_PLAYLIST_SET,
    featuredPlaylists
  }
}

// async action
export function onFetchFeaturedPlaylists() {
  function fetchFeaturedPlaylists(spotifyApi) {

    return function (dispatch) {
      //to show loader
      dispatch(actions.callRequest())
      spotifyApi.getFeaturedPlaylists({
        country: 'JP'
      })
        .then(function(data) {
          dispatch(setFeaturedPlaylists(data.body.playlists.items))
          //to close loader
          dispatch(actions.receiveResponse())
        }, function(err) {
          //to close loader
          dispatch(actions.receiveResponse())
          if (err.statusCode === 401) {
            dispatch(actions.expiredToken())
          } else {
            dispatch(actions.onErrorOccurred(err.message))
          }
        });
    }
  }

  return function (dispatch) {
    dispatch(fetchFeaturedPlaylists(window.spotifyApi))
  }
}

export function onSelectPlaylist(activePlaylist) {
  function fetchTracksOfPlaylist(spotifyApi) {

    return function (dispatch) {
      //to show loader
      dispatch(actions.callRequest())
      spotifyApi.getPlaylistTracks(
        activePlaylist.owner.id,
        activePlaylist.id
        )
        .then(function(data) {
          const tracks = data.body.items
          // set active playlist
          dispatch(setActivePlaylist(activePlaylist, tracks))
          //to close loader
          dispatch(actions.receiveResponse())
        }, function(err) {
          //to close loader
          dispatch(actions.receiveResponse())
          if (err.statusCode === 401) {
            dispatch(actions.expiredToken())
          } else {
            dispatch(actions.onErrorOccurred(err.message))
          }
        });
    }
  }

  return function (dispatch) {
    dispatch(fetchTracksOfPlaylist(window.spotifyApi))
  }
}

export function setActivePlaylist(activePlaylist, tracksOfActivePlaylist) {
  return {
    type: actionTypes.FEATURED_PLAYLIST_SELECT,
    activePlaylist,
    tracksOfActivePlaylist
  }
}

export function onBackToListOfPlaylist() {
  return {
    type: actionTypes.FEATURED_PLAYLIST_CLEAR_SELECT
  }
}