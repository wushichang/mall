export default {
  cartLength(state){
    return state.cartList.length
  },
  cartList(state,getters){
    return state.cartList
  }

}
