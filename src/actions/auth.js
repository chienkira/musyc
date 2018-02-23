import * as actionTypes from '../constants/actionTypes'
import * as actions from './index'

export function auth() {

  function setMe(user) {
    return {
      type: actionTypes.ME_SET,
      user
    };
  }

  return function (dispatch) {
    dispatch(fetchMe(window.spotifyApi))
  }
  
  function fetchMe(spotifyApi) {
    return function (dispatch) {
      spotifyApi.getMe()
        .then(function (data) {
          dispatch(setMe(data.body))
          dispatch(actions.switchMenu('myTracks'))
        }, function (err) {
          console.error(err)
        })
    }
  }

}