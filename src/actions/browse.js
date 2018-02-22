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
      spotifyApi.getFeaturedPlaylists()
        .then(function(data) {
          dispatch(setFeaturedPlaylists(data.body.playlists.items))
          //to close loader
          dispatch(actions.receiveResponse())
        }, function(err) {
          //to close loader
          dispatch(actions.receiveResponse())
          console.error(err);
        });
    }
  }

  return function (dispatch) {
    dispatch(fetchFeaturedPlaylists(window.spotifyApi))
  }
}
