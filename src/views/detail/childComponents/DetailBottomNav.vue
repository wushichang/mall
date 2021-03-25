<template>
  <div class="detail-bottom-nav">
    <div class="average">
      <div class="average">
        <span class="service"></span>
        <div>客服</div>
      </div>
      <div class="average">
        <span class="shop"></span>
        <div>店铺</div>
      </div>
      <div class="average">
        <span class="collect"></span>
        <div>收藏</div>
      </div>
    </div>
    <div class="average">
      <span class="average addToCart" @click="addToCart">加入购物车</span>
      <span class="average takeOrder">购买</span>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'DetailBottomNav',
    methods: {
      addToCart(){
        this.$emit('addToCart')
      }
    }
  }
</script>

<style>
  .detail-bottom-nav {
    background-color: #fff;
    height: 49px;
    position: relative;
    display: flex;
    text-align: center;
  }

  .detail-bottom-nav>div {
    display: flex;
  }
  .average {
    flex: 1;
  }

  .service, .shop, .collect {
    width: 24px;
    height: 24px;
    display: inline-block;
    background-image: url(~assets/img/detail/detail_bottom.png);
    background-size: 100%;
    background-repeat: no-repeat;
  }

  .service {
    background-position: 0 -56px;
  }

  .shop {
    background-position: 0 -104px;
  }

  .collect {
    background-position: 0 4px;
  }

  .addToCart, .takeOrder {
    line-height: 49px;
  }

  .addToCart {
    background-color: #ffe817;
  }

  .takeOrder {
    color: #fff;
    background-color: #f69;
  }


</style>
