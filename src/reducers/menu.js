import * as actionTypes from '../constants/actionTypes'

const initialState = {
  activeMenu: 'yourTracks' ,
  user: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.MENU_SWITCH:
      return switchMenu(state, action)
    case actionTypes.ME_SET:
      return setMe(state, action)
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