<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item,index in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recommend',
    props: {
      recommend: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend {
    display: flex;
    padding: 10px 0 20px;
    font-size: 12px;
    border-bottom: 8px solid #eee;
    text-align: center;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 72px;
    height: 72px;
    margin-bottom: 8px;
  }





</style>
