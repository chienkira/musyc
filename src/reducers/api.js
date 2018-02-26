import * as actionTypes from '../constants/actionTypes'

const initialState = {
  isFetching: false,
  errors: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.API_CALL_REQUEST:
      return { ...state, isFetching: true }
    case actionTypes.API_RECEIVE_RESPONSE:
      return { ...state, isFetching: false }
    case actionTypes.API_TOKEN_EXPIRED:
      const {errors} = state
      const newErrors = [ ...errors, {"message": "Token is expired! Please re-login your Spotify account." } ]
      return { ...state, errors: newErrors}
    case actionTypes.CLOSE_MODAL_ERROR:
      // remove expired token from local storage
      localStorage.removeItem('token')
      return { ...state, errors: []}
  }
  return state
}
