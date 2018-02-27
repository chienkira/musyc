import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isFetching: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
      return { ...state, isFetching: true }
    case actionTypes.API_RECEIVE_RESPONSE:
      return { ...state, isFetching: false }
    case actionTypes.CLOSE_ERROR_MODAL:
      // just remove expired token from local storage
      localStorage.removeItem('token')
      // no update the store
      return state
  }
  return state
}
