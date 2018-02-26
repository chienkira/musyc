import * as actionTypes from '../constants/actionTypes'
import * as actions from './index'

export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  }
}

export function playTrack(track) {
  return {
    type: actionTypes.TRACK_PLAY,
    track
  }
}

export function nextTrack(track) {
  return {
    type: actionTypes.TRACK_NEXT,
    track
  }
}

export function prevTrack(track) {
  return {
    type: actionTypes.TRACK_PREV,
    track
  }
}

// async action
export function fetchMyTracks() {
  function fetchStream(spotifyApi) {

    return function (dispatch) {
      //to show loader
      dispatch(actions.callRequest())
      spotifyApi.getMySavedTracks()
        .then(function(data) {
          dispatch(setTracks(data.body.items))
          //to close loader
          dispatch(actions.receiveResponse())
        }, function(err) {
          //to close loader
          dispatch(actions.receiveResponse())
          dispatch(actions.expiredToken())
          console.error(err);
        });
    }
  }

  return function (dispatch) {
    dispatch(fetchStream(window.spotifyApi))
  }
}
