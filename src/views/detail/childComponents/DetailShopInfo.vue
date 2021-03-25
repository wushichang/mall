<template>
  <div class="shop-info">
    <div class="shop-info-top">
      <img class="logo" :src="shop.logo" />
      <span class="name">{{shop.name}}</span>
    </div>
    <div class="shop-info-middle">
      <div class="middle-item middle-left">
        <div>
          <div class="sells-count">{{shop.sells | sellsFilter}}</div>
          <div class="sells-count-text">总销量</div>
        </div>
        <div>
          <div class="sells-goods">{{shop.goods}}</div>
          <div class="sells-goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-item middle-right">
        <table>
          <tr v-for="item,index in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShopInfo',
    props: {
      shop: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      sellsFilter(val) {
        return Math.floor(val / 1000) / 10 + '万'
      }
    }
  }
</script>

<style>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-info-top {
    display: flex;
    align-items: center;
  }

  .shop-info-top .logo {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, .1);
  }

  .shop-info-top .name {
    margin-left: 10px;
  }

  .shop-info-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .middle-item {
    flex: 1;
  }

  .middle-left {
    color: #333;
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0, 0, 0, .1);
  }

  .sells-count,
  .sells-goods {
    font-size: 18px;
  }

  .sells-count-text,
  .sells-goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .middle-right table {
    /* width: 120px; 老师的是120px 但是我的一直出不来 */
    width: 140px;
    margin-left: 30px;
  }

  .middle-right table td {
    padding: 5px 0;
  }

  .middle-right .score {
    color: #5ea732;
  }

  .middle-right .score-better {
    color: #f13e3a;
  }

  .middle-right .better span{
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .middle-right .better-more span{
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
  }

  .shop-bottom .enter-shop {
    display: inline-block;
    width: 150px;
    line-height: 30px;
    height: 30px;
    text-align: center;
    font-size: 14px;
    background-color: #f2f5f8;
    border-radius: 10px;
  }
</style>
