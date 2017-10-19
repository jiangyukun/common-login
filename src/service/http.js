/**
 * Created by jiangyukun on 2016/11/26.
 */

import {context} from '../constants/constants'

function preHandle(url, option) {
  if (process.env.NODE_ENV != 'dev') {
    url = context + url
  }
  option = option || {}
  const body = option.body

  option = {
    ...option,
    credentials: 'include',
    headers: {
      'ajax': 'ajax',
      'Accept': 'application/json;charset=utf-8',
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(body)
  }

  return {url, option}
}

function method(type) {
  return function (url, option) {
    option = option || {}
    option.method = type
    let handleArg = preHandle(url, option)

    return new Promise((resolve, reject) => {
      fetch(handleArg.url, handleArg.option).then(response => {
        if (response.status == 200) {
          return response.json()
        }
        return Promise.resolve({
          status: -1, rspMsg: 'HTTP: ' + response.status
        })
      }).then(result => {
        try {
          if (result['statusCode'] == 0) {
            resolve(result['data'])
          } else {
            reject(result['statusMessage'])
          }
        } catch (err) {
          throw err
        }
      }).catch(err => reject(err))
    })
  }
}

export let get = method('GET')
export let post = method('POST')
export let put = method('PUT')
export let patch = method('PATCH')
export let DELETE = method('DELETE')
export let head = method('HEAD')

export default function http(url, option) {
  let handleArg = preHandle(url, option)

  return fetch(handleArg.url, handleArg.option)
}
