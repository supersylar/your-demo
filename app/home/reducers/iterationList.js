import {
  MY_ITERATION_LIST_INIT
} from '../constants/ActionTypes'

const initialState = {
  iterationListData: [
    {
      name: 'iteration 1',
      id: 10001
    }
  ]
}

const changeIterationData = (state = initialState.iterationListData, action) => {
  return state;
}

const iterationList = (state = initialState, action) => {
    return state
}

export default iterationList