
import superagent from 'superagent'
import setting from '../settings'
const server = setting.server
export const userLogin = function ({ dispatch, state }, _id) {
  //第一个参数为store dispatch为store解构得来
  //可以发送http请求后再dispatch分发事件
  dispatch('login', _id)
  // dispatch('login', user)
}