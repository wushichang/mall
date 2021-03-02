<template>
  <div class="tabbar-item" @click="tabbarItemClicked">

    <div v-if="!isActive">
      <slot name="tabbar-img"></slot>
    </div>
    <div v-else>
      <slot name="tabbar-img-active"></slot>
    </div>

    <div class="title" :style="titleColor">
      <slot name="tabbar-title"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: {
        type: String
      },
      textColor: {
        type: String,
        default: '#ff3b3b'
      }
    },
    data(){
      return {

      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) != -1
      },
      titleColor(){
        return this.isActive? {color: this.textColor} : {}
      }
    },
    methods: {
      tabbarItemClicked(){
        this.$router.replace(this.path)
      }
    }

  }
</script>

<style>
  .tabbar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }

  .tabbar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }


  .tabbar-item .title {
    font-size: 14px;
  }


</style>
