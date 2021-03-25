<template>
  <div class="nav-tab">
    <div
    class="nav-tab-item"
    v-for="item,index in titles"
    :class="{active: currentIndex === index}"
    @click="clickTab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavTab',
    props: {
      titles: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      clickTab(index){
        this.currentIndex = index
        this.$emit('navTabClick',index)
      }
    }
  }
</script>

<style>
  .nav-tab {
    height: 40px;
    line-height: 40px;
    display: flex;
    background-color: #fff;
    font-size: 14px;
    text-align: center;
  }

  .nav-tab-item {
    flex: 1;
  }

  .nav-tab-item span {
    padding: 4px;
  }

  .active {
    color: var(--color-height-text);
  }

  .active span {
    border-bottom: 3px solid var(--color-tint);
  }

</style>
