import { combineReducers } from 'redux'
import iterationList from './iterationList'
import myList from './myList'

export default combineReducers({
  iterationList,
  myList
})