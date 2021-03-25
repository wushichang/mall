<template>
  <swiper class="topImages">
    <swiper-item v-for="item,index in topImages" :key="index">
      <img :src="item"/>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default{
    name: 'TopImages',
    props: {
      topImages: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
  .topImages {
    height: 300px;
    overflow: hidden;
  }
</style>
