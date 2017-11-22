import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import workBenchReducer from '../app/home/reducers'
import boardReducer from '../app/board/reducers'
import detailListReducer from '../app/detail-list/reducers'
import Workbench from '../app/home/container'
import Board from '../app/board/container'
import DetailList from '../app/detail-list/container'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from '../common/components/layout/index.jsx'
import './style.scss'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const reducer = combineReducers({
  workBench: workBenchReducer,
  board: boardReducer,
  detailList: detailListReducer
});

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

// 全局状态机结构
console.log('全局状态机结构', store.getState())

render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Workbench}/>
        <Route path="/board" component={Board}/>
        <Route path="/detailList" component={DetailList}/>
      </Layout>
    </Router>
  </Provider>,
  document.getElementById('container')
)
