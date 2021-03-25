<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length>0">
    <div class="detail-info-desc">
      <div class="desc-left"></div>
      <div class="desc-content">{{detailInfo.desc}}</div>
      <div class="desc-right"></div>
    </div>
    <template v-for="item,index in detailInfo.detailImage">
      <div class="desc-key" :key="index">
        {{item.key}}
      </div>
      <div :key="index+'-img'">
        <img
        class="detail-img"
        :src="iitem"
        v-for="iitem,iindex in item.list"
        :key="iindex"
        @load="imgLoaded"/>
      </div>
    </template>

  </div>
</template>

<script>
  export default {
    name: 'DetailGoodsInfo',
    props: {
      detailInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data(){
      return {
        // loadedCount: 0,
        // detailImagesLength: 0
      }
    },
    methods: {
      imgLoaded(){
        // if(++this.loadedCount === this.detailImagesLength){
        //   this.$emit('imgLoaded')
        // }
        // 上面的是没有防抖 去统计加载的次数 感觉这样麻烦了 所以使用mixin混入的防抖
        this.$emit('imgLoaded')

      }
    },
    watch: { // 我感觉这里用computed也行
      // detailInfo(info){
      //   this.detailImagesLength = info.detailImage[0].list.length
      // }
    }
  }
</script>

<style>
  .detail-info {
    padding: 20px 0;
    border: 5px solid #f2f5f8;
  }

  .detail-info-desc {
    padding: 0 15px;
  }

  .desc-left,
  .desc-right {
    height: 1px;
    width: 150px;
    background-color: #a3a3a5;
    position: relative;
  }

  .desc-content {
    padding: 15px 0;
  }

  .desc-right {
    float: right;
  }

  .desc-left::before,
  .desc-right::after {
    content: '';
    width: 4px;
    height: 4px;
    background-color: #a3a3a5;
    position: absolute;
    top: -4px;
  }

  .desc-right::after {
    top: 0;
    right: 0;
  }

  .desc-key {
    padding: 15px 0 15px 15px;
    color: #333;
    font-size: 15px;
  }

  .detail-img {
    width: 100%;
  }
</style>
