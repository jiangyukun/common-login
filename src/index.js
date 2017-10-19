import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'

import './css/index.scss'
import App from './App'

import errorMiddleware from './middlewares/handle_error'
import phaseMiddleware from './middlewares/request_3_phase'
import * as reducers from './reducers/'


const allReducers = combineReducers(reducers)

const store = createStore(allReducers, {}, applyMiddleware(errorMiddleware, phaseMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
