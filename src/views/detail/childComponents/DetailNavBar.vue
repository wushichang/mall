<template>
  <nav-bar>
    <template #left>
      <div  @click="back" >
        <img class="backImg" src="~assets/img/common/back.svg"/>
      </div>
    </template>
    
    <template #center>
      <div class="titles">
        <div v-for="item,index in titles" :key="index"
          class="title-item" :class="{active: currentIndex === index}"
          @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  export default {
    name: 'DetailNavBar',
    data(){
      return {
        currentIndex: 0,
        titles: ['商品','参数','评论','推荐']
      }
    },
    components: {
      NavBar
    },
    methods: {
      back(){
        this.$router.back()
      },
      itemClick(index){
        this.currentIndex = index
        this.$emit('themeItemClick',index)
      }
    }
  }
</script>

<style>
  .backImg {
    vertical-align: text-bottom;
  }

  .titles {
      display: flex;
  }

  .title-item {
    flex: 1;
  }

  .active {
    color: var(--color-height-text);
  }
</style>
