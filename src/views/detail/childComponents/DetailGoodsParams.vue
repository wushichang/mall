<template>
  <div class="goods-params" v-if="Object.keys(goodsParams).length > 0">
    <table>
      <tr class="rule-tr" v-for="item,index in goodsParams.rule.tables[0]" :key="index">
        <td class="rule-td" v-for="iitem,iindex in item" :key="iindex">{{iitem}}</td>
      </tr>
    </table>

    <table class="params-info">
      <tr v-for="item,index in goodsParams.info.set" :key="index">
        <td class="set-td-key">{{item.key}}</td>
        <td class="set-td-value">{{item.value}}</td>
      </tr>
    </table>

    <div v-if="goodsParams.image.length > 0">
      <img class="goods-params-img" :src="goodsParams.image" />
    </div>

  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsParams',
    props: {
      goodsParams: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
  .goods-params {
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-params table {
    width: 100%;
    border-collapse: collapse;
  }

  .goods-params table tr {
    height: 42px;
  }

  .goods-params table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .params-info {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .set-td-key {
    width: 95px;
  }

  .set-td-value {
    color: #eb4868;
  }

  .goods-params-img {
    width: 100%;
  }

</style>
