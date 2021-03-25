<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <MainTabBar/>
  </div>
</template>

<script>
import router from './router'

import MainTabBar from 'components/content/mianTabBar/MainTabBar'

export default {
  name: 'App',
  router,
  components: {
    MainTabBar
  }
}
</script>

<style>
	@import 'assets/css/base.css';
</style>
