<template>
  <div v-if="Object.keys(goods).length>0" class="base-info">
    <div class="base-info-title">
      {{goods.title}}
    </div>
    <div class="info-price">
      <span class="new-price">{{goods.realPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[0].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img class="img" :src="goods.services[index].icon" />
        <span>{{goods.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {

    }
  }
</script>

<style>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .base-info-title {
    font-size: 16px;
    color: #222;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .new-price {
    font-size: 24px;
    color: var(--color-height-text);
  }

  .info-price .old-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-height-text);
    border-radius: 8px;
    margin-left: 5px;
    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -5px;
  }

  .info-other {
    font-size: 13px;
    line-height: 30px;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    /* position: relative;
    top: 2px; */
    /* 我感觉可以这样 */
    vertical-align: text-bottom;
  }
</style>
