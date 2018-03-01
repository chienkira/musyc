import * as actionTypes from '../constants/actionTypes'
import * as actions from "./index";

function setMyTracks(myTracks) {
  return {
    type: actionTypes.MY_TRACKS_SET,
    myTracks
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
          dispatch(setMyTracks(data.body.items))
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
    dispatch(fetchStream(window.spotifyApi))
  }
}
