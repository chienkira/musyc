import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import track from './track'
import menu from './menu'

export default combineReducers({
  menu,
  track,
  routing: routerReducer
})