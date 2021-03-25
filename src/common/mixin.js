import {debounce} from './utils'
import {SCROLLTOP} from './const'

import ScrollToTop from 'components/content/scrollToTop/ScrollToTop'

export const imgLoadedListener = {
  data(){
    return {
      imgListener: null,
      refresh: null
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh,50)
    this.imgListener = () => {
      this.refresh()
    }
    this.$bus.$on('imgLoaded',this.imgListener)
    //console.log(this.$route.path,'刷新')
  }
}

export const scrollToTopMixin = {
  components: {
    ScrollToTop
  },
  data(){
    return {
      showScrollToTop: false
    }
  },
  methods: {
    scrollToTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
    isShowScrollTop(y){
      this.showScrollToTop = y > SCROLLTOP
    }
  }
}
