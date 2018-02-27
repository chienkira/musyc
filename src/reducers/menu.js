import * as actionTypes from '../constants/actionTypes'

const initialState = {
  activeMenu: '' ,
  user: null,
  token: localStorage.getItem('token') || null // try to get saved token from local storage
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MENU_SWITCH:
      return switchMenu(state, action)
    case actionTypes.ME_SET:
      return setMe(state, action)
    case actionTypes.LOG_OUT:
      return logout(state, action)
  }
  return state
}

function switchMenu(state, action) {
  const { activeMenu } = action;
  return { ...state, activeMenu };
}

function setMe(state, action) {
  const { user } = action;
  return { ...state, user };
}

function logout(state, action) {
  // reset the store
  let resetState = initialState
  resetState.token = null
  return resetState
}