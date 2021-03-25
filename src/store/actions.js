import {ADD_COUNT,ADD_CART_LIST} from './mutation-types'

export default {
  addToCartAction({state,commit},payload){
    return new Promise((resolve,reject) => {
      let product = state.cartList.find(({iid}) => iid === payload.iid)
      if(product){
        commit(ADD_COUNT,product)
        resolve('商品数量+1')
      }else {
        payload.count = 1
      payload.checked = true
        commit(ADD_CART_LIST,payload)
        resolve('加入购物车成功')
      }
    })
  }
}
