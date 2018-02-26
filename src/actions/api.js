import * as actionTypes from '../constants/actionTypes'

export function callRequest() {
  return {
    type: actionTypes.API_CALL_REQUEST
  }
}

export function receiveResponse() {
  return {
    type: actionTypes.API_RECEIVE_RESPONSE
  }
}

export function expiredToken() {
  return {
    type: actionTypes.API_TOKEN_EXPIRED
  }
}

export function onCloseModalError() {
  return {
    type: actionTypes.CLOSE_MODAL_ERROR
  }
}
