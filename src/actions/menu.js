import * as actionTypes from '../constants/actionTypes'

export function switchMenu(activeMenu) {
  return {
    type: actionTypes.MENU_SWITCH,
    activeMenu
  }
}