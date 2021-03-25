<template>
  <div class="toast" v-show="isShow">
    {{msg}}
  </div>
</template>

<script>
  import {debounce} from 'common/utils.js'
  export default {
    name: 'Toast',
    data(){
      return {
        msg: '',
        isShow: false,
        debouncer: null
      }
    },
    created() {
      this.debouncer = debounce(this.show,200)
    },
    methods: {
      show(msg,timeout = 2000){
        this.msg = msg
        this.isShow = true
        setTimeout(() => {
          this.msg = ''
          this.isShow = false
        },timeout)
      },
      showDebouncer(msg,timeout = 2000){
        this.debouncer(msg,timeout)
      }
    }
  }
</script>

<style scoped>
  .toast {
    color: #fff;
    padding: 6px 8px;
    background-color: rgba(0,0,0,0.6);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
  }
</style>
