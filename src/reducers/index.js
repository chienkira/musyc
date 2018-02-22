import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import api from './api'
import menu from './menu'
import track from './track'
import browse from './browse'

export default combineReducers({
  api,
  menu,
  track,
  browse,
  routing: routerReducer
})