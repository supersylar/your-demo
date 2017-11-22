import * as types from '../constants/ActionTypes'
/*
 * action 创建函数
 */

export function changeMyListFilter(status) {
  return { type: types.CHANGE_MY_LIST_FILTER, status }
}

export function changeMyListData(status) {
  return { type: types.CHANGE_MY_LIST_DATA, status }
}

export function myListInit(status) {
  return { type: types.MY_LIST_INIT, status }
}

export function myIterationListInit(status) {
  return { type: types.MY_ITERATION_LIST_INIT, status }
}