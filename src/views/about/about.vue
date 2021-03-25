<template>
  <div>
    <nav-bar class="cart-nav-bar" #center>
      <!-- 购物车({{$store.getters.cartLength}}) -->
      <!-- 常规的是上面那样 下面是用mapGetters -->
      购物车({{myCartLength}})
    </nav-bar>
    <cart-list />
    <cart-list-counter />
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'

  import CartList from './childComponents/CartList'
  import CartListCounter from './childComponents/CartListCounter'

  // 使用vuex的mapGetters将store中的getters方法放到组件局部的计算属性中
  import {mapGetters} from 'vuex'
  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      CartListCounter
    },
    computed: {
      // ...mapGetters(['cartLength']) // 数组写法 还有对象写法
      ...mapGetters({
        myCartLength: 'cartLength'
      })
    }
  }
</script>

<style>
  .cart-nav-bar {
    background-color: var(--color-tint);
    font-weight: bold;
    color: #fff;
    position: relative;
    z-index: 9;
  }
</style>
