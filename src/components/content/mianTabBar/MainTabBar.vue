<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/home1.png"/>
        </template>
        <template #tabbar-img-active>
          <img src="~assets/img/tabbar/home2.png"/>
        </template>
        <template #tabbar-title>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/category1.png"/>
        </template>
        <template #tabbar-img-active>
          <img src="~assets/img/tabbar/category2.png"/>
        </template>
        <template #tabbar-title>
          <div>栏目</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/about">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/find-1.png"/>
        </template>
        <template #tabbar-img-active>
          <img src="~assets/img/tabbar/find-2.png"/>
        </template>
        <template #tabbar-title>
          <div>关于</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile">
        <template #tabbar-img>
          <img src="~assets/img/tabbar/user1.png"/>
        </template>
        <template #tabbar-img-active>
          <img src="~assets/img/tabbar/user2.png"/>
        </template>
        <template #tabbar-title>
          <div>档案</div>
        </template>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBarBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
