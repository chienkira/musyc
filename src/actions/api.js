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