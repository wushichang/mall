<template>
  <div class="goods-list-item" @click="itemClick">
    <!-- load监听图片加载完成 -->
    <!-- <img :src="imgUrl" @load="imgLoaded"/> -->
    <img v-lazy="imgUrl" @load="imgLoaded"/>
    <div class="goods-info">
      <div class="goods-title">{{goodsListItem.title}}</div>
      <span class="goods-price">{{goodsListItem.price}}</span>
      <span class="goods-collect">{{goodsListItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goodsListItem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      imgUrl(){
        return this.goodsListItem.image || this.goodsListItem.show.img
      }
    },
    methods: {
      imgLoaded(){
        // 发射出图片加载完成信号
        this.$bus.$emit('imgLoaded')
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodsListItem.iid)
      }
    }
  }
</script>

<style>
  .goods-list-item {
    width: 48%;
    text-align: center;
    font-size: 12px;
    position: relative;
    padding-bottom: 40px;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;

  }

  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
  }

  .goods-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  }

  .goods-price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-collect {
    position: relative;
  }

  .goods-collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }


</style>
