<template>
  <div id="detail">
    <detail-nav-bar @themeItemClick="themeItemClick" ref="navBar" class="detail-nav-bar"/>
    <scroll class="detail-scroll" ref="scroll" :probe-type="3" @scroll="scroll">
      <top-image :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoaded="imgLoaded" />
      <detail-goods-params ref="params" :goods-params="goodsParams" />
      <goods-comments ref="comments" :comments="goodsComments" />
      <goods-list ref="recommends" :goods-list="recommends" />
    </scroll>
    <scroll-to-top @click.native = "scrollToTop" v-show="showScrollToTop" />
    <detail-bottom-nav @addToCart="addToCart"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComponents/DetailNavBar'
  import TopImage from './childComponents/TopImages'
  import DetailBaseInfo from './childComponents/DetailBaseInfo'
  import DetailShopInfo from './childComponents/DetailShopInfo'
  import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
  import DetailGoodsParams from './childComponents/DetailGoodsParams'
  import GoodsComments from './childComponents/GoodsComments'
  import GoodsList from 'components/content/goodlist/GoodsList'
  import DetailBottomNav from './childComponents/DetailBottomNav'

  import Scroll from 'components/common/scroll/Scroll'

  import {imgLoadedListener,scrollToTopMixin} from 'common/mixin'
  import {debounce} from 'common/utils'

  import {
    getDetail,
    getRecommends,
    Goods,
    Shop,
    GoodsParams
  } from 'network/detail'

  import { mapActions } from 'vuex'

  export default{
    name: 'Detail',
    mixins: [imgLoadedListener,scrollToTopMixin],
    components: {
      DetailNavBar,
      TopImage,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailGoodsParams,
      GoodsComments,
      GoodsList,
      DetailBottomNav,
      Scroll

    },
    data(){
      return {
        iid: null,
        topImages: [],
        goods: {}, // 假如这个地方写null的话，detailBaseInfo组件会报错
        shop: {},
        detailInfo: {},
        goodsParams: {},
        goodsComments: {},
        recommends: [],
        themePositionArray: [0],
        getThemePositionArray: null,
        themeIndex: 0
      }
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetail()
      this.getRecommends()
      // 这里只是一个赋值的操作，并不会马上执行，所以放在created里面没关系的
      this.getThemePositionArray = debounce(()=>{
         this.themePositionArray = [0]
         this.themePositionArray.push(this.$refs.params.$el.offsetTop)
         this.themePositionArray.push(this.$refs.comments.$el.offsetTop)
         this.themePositionArray.push(this.$refs.recommends.$el.offsetTop)
         // console.log(this.themePositionArray)
      },100)
    },
    destroyed() {
      this.$bus.$off('imgLoaded',this.imgListener)
    },
    methods: {
      // 也有对象和字符串两种表示方法
      ...mapActions(['addToCartAction']),
      getDetail(){
        getDetail(this.iid).then(res => {
          //console.log(res)
          const data = res.result
          // 轮播图
          this.topImages = data.itemInfo.topImages
          // 商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
          // 店铺信息
          this.shop = new Shop(data.shopInfo)
          // 商品详情
          this.detailInfo = data.detailInfo
         // 商品参数
          this.goodsParams = new GoodsParams(data.itemParams.info,data.itemParams.rule)
          // 商品评价
          this.goodsComments = data.rate.list[0] // 暂时就搞一条算了
        }).catch(err => {
          console.log(err)
        })
      },
      imgLoaded(){
        // 这个地方可以使用混入 this.refresh 然后DetailGoodsInfo就可以不用了等图片加载完后再来此处调用刷新了
        //this.$refs.scroll.refresh()
        this.refresh()
        // mounted取的时候可能数据都没加载完成 所以不行 放$nextTick也是这样的 所以最好去监听图片加载
        this.getThemePositionArray()
      },
      getRecommends(){
        getRecommends().then(res => {
          //console.log(res)
          this.recommends = res.data.list
        })
      },
      themeItemClick(index){
        this.$refs.scroll.scrollTo(0,-this.themePositionArray[index],100)
      },
      /**
       * 用一下解构
       */
      scroll({y}){
        const length = this.themePositionArray.length
        y = Math.abs(y)
        for(let i = 0; i < length; i++){
          // if(this.themeIndex != i &&((i < length-1 && y >= this.themePositionArray[i] && y < this.themePositionArray[i+1])
          //  || (i === length -1 && y >= this.themePositionArray[i]))){
          //   this.themeIndex = i
          //   this.$refs.navBar.currentIndex = i
          //   // console.log(i)
          // }
          if(this.themeIndex != i && (y >= this.themePositionArray[i] && y < (this.themePositionArray[i+1] || Number.MAX_VALUE))){
            this.themeIndex = i
            this.$refs.navBar.currentIndex = i
            // console.log(i)
          }
        }

        // 是否显示回到顶部
        this.isShowScrollTop(y)

      },
      addToCart(){
        const product = {
          image: this.topImages[0],
          title: this.goods.title,
          desc: this.goods.desc,
          price: this.goods.realPrice,
          iid: this.iid
        }
        // vuex的action mutations actions都可以导入
        // this.$store.dispatch('addToCartAction',product).then(res => {
        //   console.log(res)
        // })

        this.addToCartAction(product).then(res => {
          this.$toast.show(res)

        })

      }

    }
  }
</script>

<style>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .detail-scroll {
    height: calc(100% - 93px);
    position: relative;
  }
</style>
