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
          if (err.statusCode === 401) {
            dispatch(actions.expiredToken())
          } else {
            dispatch(actions.onErrorOccurred(err.message))
          }
        })
    }
  }

}

export function logout() {

  function logout() {
    return {
      type: actionTypes.LOG_OUT
    };
  }

  return function (dispatch) {
    // re-initial access token
    window.spotifyApi && window.spotifyApi.resetAccessToken()
    // remove token from local storage
    localStorage.removeItem('token')

    dispatch(logout())
  }
}