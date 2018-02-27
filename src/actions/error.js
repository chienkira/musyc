import * as actionTypes from '../constants/actionTypes'

export function onErrorOccurred(message) {
  return {
    type: actionTypes.ERROR_OCCURRED,
    message
  }
}

export function expiredToken() {
  return {
    type: actionTypes.API_TOKEN_EXPIRED
  }
}


export function onCloseModalError() {
  return {
    type: actionTypes.CLOSE_ERROR_MODAL
  }
}
