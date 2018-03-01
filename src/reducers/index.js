import {combineReducers} from 'redux'
import api from './api'
import menu from './menu'
import track from './track'
import browse from './browse'
import errors from './errors'
import library from './library'

export default combineReducers({
  api,
  menu,
  track,
  browse,
  library,
  errors
})