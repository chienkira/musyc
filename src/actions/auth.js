import {setTracks} from '../actions/track'
import * as actionTypes from '../constants/actionTypes'

export function auth() {

  function setMe(user) {
    return {
      type: actionTypes.ME_SET,
      user
    };
  }

  return function (dispatch) {
    dispatch(fetchMe(window.spotifyApi))
    dispatch(fetchStream(window.spotifyApi))
  }
  
  function fetchMe(spotifyApi) {
    return function (dispatch) {
      spotifyApi.getMe()
        .then(function (data) {
          dispatch(setMe(data.body))
        }, function (err) {
          console.error(err)
        })
    }
  }
  
  function fetchStream(spotifyApi) {
    return function (dispatch) {
      spotifyApi.getMySavedTracks()
        .then(function(data) {
          dispatch(setTracks(data.body.items))
        }, function(err) {
          console.error(err);
        });
    }
  }

}