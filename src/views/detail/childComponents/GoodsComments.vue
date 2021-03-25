<template>
  <div class="comments-info" v-if="Object.keys(comments).length > 0">
    <div class="comment-info-top">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="customer-info">
      <img class="customer-avatar" :src="comments.user.avatar" />
      <span>{{comments.user.uname}}</span>
    </div>
    <div class="info-detail">
      <div class="content">
        {{comments.content}}
      </div>
      <div class="info-other">
        <span>{{comments.created | formatCreated}}</span>
        <span class="style">{{comments.style}}</span>
      </div>
      <div class="photos">
        <img v-for="item, index in comments.images " :key="index" :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import {
    formatDate
  } from 'common/utils'

  export default {
    name: 'GoodsComments',
    props: {
      comments: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      formatCreated(time) {
        let date = new Date(+time * 1000)
        // formatDate(date,'yyyy-MM-dd hh:mm:ss')
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style>
  .comments-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #F2F5F8;
  }

  .comment-info-top {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }

  .customer-info {
    padding: 10px 0 5px;
  }

  .customer-info span {
    margin-left: 4px;
  }

  .customer-avatar {
    width: 42px;
    height: 42px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .info-detail, .info-other {
    margin-top: 10px;
    color: #999;
    font-size: 12px;
  }


  .info-other .style {
    margin-left: 8px;
  }

  .photos {
    margin-top: 10px;
  }

  .photos img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }

</style>
