<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>

    <nav-tab
    v-show="showNavTab"
    ref="navTabCopy"
    class="nav-tab"
    :titles="['流行','新款','精选']"
    @navTabClick='navTabClick'/>

    <!-- probyType 假如不用v-bind 3会默认为字符串 这样就不好了 -->
    <scroll class="scroll"
    ref="scroll"
    :probe-type="3"
    :pull-up-load="true"
    @scroll="scroll"
    @pullingUp="pullingUp">
      <banner :banner="banner" @navTabImgLoaded="navTabImgLoaded"/>
      <recommend :recommend="recommend"/>
      <choiceness/>
      <nav-tab ref="navTab" :titles="['流行','新款','精选']" @navTabClick='navTabClick'/>
      <goods-list :goods-list= "showGoods"/>
    </scroll>
    <!-- 直接监听组件根元素原生点击事件 .navtive就可以做到 -->
    <scroll-to-top @click.native="scrollToTop" v-show="showScrollToTop"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import NavTab from 'components/content/navTab/NavTab'
  import GoodsList from 'components/content/goodlist/GoodsList'
  import ScrollToTop from 'components/content/scrollToTop/ScrollToTop'

  import Banner from './childrenComponents/Banner'
  import Recommend from './childrenComponents/Recommend'
  import Choiceness from './childrenComponents/Choiceness'

  import {imgLoadedListener} from 'common/mixin'


  import {
    multidata,
    getHomeGoods
  } from 'network/home'

  import {debounce} from 'common/utils'

  export default {
    mixins: [imgLoadedListener],
    data() {
      return {
        banner: [],
        recommend: [],
        goods: {
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        showScrollToTop: false,
        navTabOffsetTop: 0,
        showNavTab: false,
        scrollY: 0 //记录滚动的位置
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    components: {
      NavBar,
      Scroll,
      NavTab,
      GoodsList,
      Banner,
      Recommend,
      Choiceness,
      ScrollToTop
    },
    created() {
      this.multidata()

      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    mounted(){
      // 使用防抖函数进行包装
      // const refresh = debounce(this.$refs.scroll.refresh,50)

      // // 监听图片是否加载完成 去拿子组件的数据最好不要在created中去调用，假如子组件挂载慢一点就很容易出问题
      // this.$bus.$on('imgLoaded',() => {
      //   // 每加载一次就刷新，显然是不允许的 所以使用防抖函数 debounce
      //   //this.$refs.scroll.refresh()
      //   refresh()
      // })
      
      // 使用了mixin 之后 上面的代码不需要了

    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.scrollY,0)
    },
    deactivated(){
      this.scrollY = this.$refs.scroll.getScollY()
      // 取消监听
      this.$bus.$off('imgLoaded',this.imgListener)
    },
    methods: {
      multidata() {
        multidata().then(res => {
          //console.log(res)
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        }).catch(err => {
          console.log('error', err)
        })
      },

      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          // ...这个是数组的结构 如[1,2,3] => 1,2,3  push()方法刚好是添加一个或者多个
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          // 完成下拉加载更多
          this.$refs.scroll.finishPullUp()
        }).catch(err => {
          console.log(err)
        })
      },

      navTabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.navTab.currentIndex = index
        this.$refs.navTabCopy.currentIndex = index

      },
      scrollToTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      scroll(position){
        // 判断是否显示回到顶部组件
        this.showScrollToTop = Math.abs(position.y) > 1000
        // 判断是否显示navTab组件
        this.showNavTab = Math.abs(position.y) > this.navTabOffsetTop

      },
      pullingUp(){
        this.getHomeGoods(this.currentType)
      },
      navTabImgLoaded(){
        // 获取组件的元素 offsetTop值是只读的 然后此处的offsetTop值是不准确的 因为在mounted函数中不能确定子组件是否完全渲染
        this.navTabOffsetTop = this.$refs.navTab.$el.offsetTop
      }

    }

  }
</script>

<style>
  #home {
    /* scroll 使用绝对定位后就不需要这个把内容挤下去了 */
    /* padding-top: 44px;
    box-sizing: border-box; */
    position: relative;
    height: 100vh;

  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .nav-tab {
    /* 在使用better的时候 这个属性已经失效了 */
    /* position: sticky;
    top: 44px;
    z-index: 9; */
    position: relative;
    z-index: 9;
    top: -1px; /* 属实没搞懂为什么会有一个1px的间隔 */
  }

  .scroll {
    overflow: hidden;
    position: absolute;
    top: 44px;/* 设置成44竟然有空隙，我真的服 */
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
