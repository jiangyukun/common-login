/**
 * Created by jiangyukun on 2016/12/1.
 */

function getActionTypeFn(prefix) {
  return function (type) {
    return prefix + '__' + type
  }
}

function generatorValueFromKey(prefix, obj) {
  let typeFn = getActionTypeFn(prefix)
  Object.keys(obj).forEach(key => obj[key] = typeFn(key))
}

export const APP = {
  LOGIN: null
}

generatorValueFromKey('APP', APP)
