/**
 * Created by jiangyukun on 2017/2/14.
 */

import {get} from '../service/http'
import {APP} from '../constants/types'
import {THREE_PHASE} from '../middlewares/request_3_phase'

const urlPrefix = '/backend/user'

export function login(username, password) {
  return {
    [THREE_PHASE]: {
      type: APP.LOGIN,
      http: () => get(urlPrefix + `/v1/login/${username}/${password}`)
    }
  }
}

export function clearFailureMessage() {
  return {
    type: APP.CLEAR_LOGIN_FAILURE_MESSAGE
  }
}
