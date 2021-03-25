import {ADD_COUNT,ADD_CART_LIST} from './mutation-types'

export default {
  [ADD_COUNT](state,payload){
    payload.count++
  },
  [ADD_CART_LIST](state,payload){
    state.cartList.push(payload)
  }
}
