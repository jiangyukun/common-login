/**
 * Created by jiangyukun on 2017/2/14.
 */

import {get} from '../service/http'
import * as types from '../constants/types'
import * as phase from '../constants/phase'

export function login(name, pswd) {

}

export function clearFailureMessage() {
  return {
    type: types.CLEAR_LOGIN_FAILURE_MESSAGE
  }
}
