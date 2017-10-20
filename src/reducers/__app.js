/**
 * Created by jiangyukun on 2017/2/14.
 */
import {fromJS, Map} from 'immutable'
import {APP} from '../constants/types'
import * as phase from '../constants/phase'

const initValue = {
  loginSuccess: false,
  failureMessage: ''
}

export function app(state = initValue, action) {
  const iState = fromJS(state)
  return nextState()

  function nextState() {
    let nextIState = iState
    switch (action.type) {
      case APP.LOGIN + phase.SUCCESS:
        nextIState = loginSuccess()
        break

      case APP.LOGIN + phase.FAILURE:
        nextIState = loginFailure()
        break

      case APP.CLEAR_LOGIN_FAILURE_MESSAGE:
        nextIState = clearFailureMessage()
        break
    }
    if (nextIState == iState) {
      return state
    }
    return nextIState.toJS()
  }

  function loginSuccess() {
    return iState.set('loginSuccess', true)
  }

  function loginFailure() {
    return iState.set('failureMessage', action.err)
  }

  function clearFailureMessage() {
    return iState.set('failureMessage', '')
  }
}
