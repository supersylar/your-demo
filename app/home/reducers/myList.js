import {
  FilterStatus,
  MY_LIST_INIT,
  CHANGE_MY_LIST_FILTER,
  CHANGE_MY_LIST_DATA
} from '../constants/ActionTypes'

const initialState = {
  myListFilter: {
    status: FilterStatus.MY_LIST
  },
  myListData: [
    {
      name: 'cool1',
      id: 1
    },
    {
      name: 'cool2',
      id: 2
    },
    {
      name: 'cool3',
      id: 3
    }
  ]
}

const changeMyListFilter = (state = initialState.myListFilter, action) => {

  switch (action.type) {
    case CHANGE_MY_LIST_FILTER:
      const { status } = action
      return { status }
    default:
      return state
  }
}

const changeMyListData = (state = initialState.myListData, action) => {
  switch (action.type) {
    case CHANGE_MY_LIST_DATA:
      const { myListData } = action
      return [ ...myListData ]
    default:
      return state
  }
}

const initData = (state, action) => {
  return state
}

const myListReducer = (state = initialState, action) => {
  switch (action.type) {
    case MY_LIST_INIT:
      return initData(state, action);
    default:
      return {
        myListFilter: changeMyListFilter(state.myListFilter, action),
        myListData: changeMyListData(state.myListData, action)
      }
  }
}

export default myListReducer