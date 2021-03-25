<template>
  <div class="cart-list-counter">
    <div class="counter-left">
      <check-button checked="" :checked="isSelectAll" @click.native="checkBtnClick"/>
      <span>全选</span>
    </div>
    <div class="counter-center">
      <span>合计</span>
      <span>￥{{totalPrice}}</span>
    </div>
    <div class="price-count" @click="takeOrder">
      <span>去计算({{checkedCount}})</span>
    </div>
  </div>
</template>


<script>
  import CheckButton from 'components/content/checkButton/CheckButton'

  import {mapGetters} from 'vuex'

  export default {
    name: 'CartListCounter',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice(){
        const totalPrice = this.cartList.filter(({checked}) => checked)
        .reduce((total,{price,count}) =>{
          return total + price*count
        },0).toFixed(2)
        // 不想用toFixed 这个会四舍五入 但是假如59.00去像下面这样弄的话，就搞不定了， 没有办法 所以我就这么搞
        // console.log((Math.floor(59.00 * 100))/100)
        return (Math.floor(totalPrice * 100)/100).toFixed(2)
      },
      checkedCount(){
        return this.cartList.filter(({checked}) => checked)
        .reduce((total,{count}) => total + count ,0)
      },
      isSelectAll(){
        // 这个可以不用写false 可以!checked 因为这样false的东西return不出去
        return Boolean(this.cartList.length) && this.cartList.every(({checked}) => checked)
      }
    },
    methods: {
      checkBtnClick(){
        const isSelectAll = this.isSelectAll
        // 记得对象这里 充满了智慧 forEcah中用对象 这个地方别用结构了 结构就不能实现效果了 常量 和 对象
        this.cartList.forEach(item => item.checked = !isSelectAll)
      },
	  takeOrder(){
		  const length = this.cartList.filter(({checked}) => checked).length
		  if(length === 0 || this.cartList.length === 0){
			  this.$toast.showDebouncer('请至少选择一款商品')
		  }
	  }
    }

  }
</script>

<style scoped>
  .cart-list-counter {
    position: relative;
    z-index: 9;
    height: 40px;
    background-color: #eee;

  }

  .cart-list-counter,.counter-left {
    display: flex;
    align-items: center;
  }

  .counter-left {
    width: 72px;
    margin-left: 8px;
  }

  .counter-left > span {
    margin-left: 4px;
  }

  .counter-center {
    flex-grow: 1;
    padding-left: 24px;
  }

  .price-count {
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: var(--color-height-text);
    color: #fff;
  }
</style>
