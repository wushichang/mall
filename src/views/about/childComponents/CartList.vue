<template>
  <div class="cartList">
    <scroll ref="scroll" class="cartList-scroll">
      <cart-list-item v-for="item in cartList" :key="item.iid" :product="item"/>
    </scroll>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  export default {
    name: 'CartList',
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    watch: {
      // 这个地方用刷新我感觉不太好
      // cartList(){
      //   console.log('刷新')
      //   this.$refs.scroll.refresh()
      // }
    }
  }
</script>

<style>
  .cartList {
    height: calc(100vh - 133px)
  }

  .cartList-scroll {
    height: 100%;
  }

</style>
