<template>
  <!-- 注意了 ref用在组件上 获取的是组件对象   但是用在普通标签上 获取的就是该元素 -->
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll: null
      }
    },
    mounted() {
      // 不使用.wrapper的原因是class = 'wrpper'可能会重复 就有可能导致 querySelector方法取的对象有问题
      this.scroll = new BScroll(this.$refs.wrapper,{
        probeType: this.probeType, // 0是没有 1是延迟 2是没有拖拽后自己动一动的监听 3就是啥都有了
        pullUpLoad: this.pullUpLoad,
        observeDOM: true, // 不加这个滑动不了
        click: true
      })

      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', position => this.$emit('scroll',position))
      }

      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }

    },
    methods: {
      // 这些方法可能有时候 子组件实力都没有加载完成就被调用了 所以用个 this.scroll加个保险
      scrollTo(x,y,time = 50){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        // 重新计算scroll 对象 scrollHeight属性
        this.scroll && this.scroll.refresh()
      },
      getScollY(){
        return this.scroll ? this.scroll.y : 0
      }
    }
  }
</script>

<style>
</style>
