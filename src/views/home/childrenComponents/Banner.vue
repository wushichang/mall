<template>
  <swiper>
    <swiper-item v-for="item,index in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoaded"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: 'Banner',
    props: {
      banner: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        imgIsLoaded: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoaded(){
        if(!this.imgIsLoaded){
          this.$emit('navTabImgLoaded')
          this.imgIsLoaded = true
        }
      }
    }
  }
</script>

<style>

</style>
