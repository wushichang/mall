<template>
  <div class="cart-list-item">
    <div class="item-check-button">
      <check-button :checked="product.checked" @click.native="checkBtnClick"/>
    </div>
    <img class="product-img" :src="product.image"/>
    <div class="product-info">
      <div class="info-title">{{product.title}}</div>
      <div class="info-desc">{{product.desc}}</div>
      <div class="info-price-count">
        <span>￥{{product.price}}</span>
        <span class="product-count">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  export default{
    name: 'CartListItem',
    props: {
      product: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      checkBtnClick(){
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style>
  .cart-list-item {
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #eee;
  }

  .item-check-button {
    align-self: center;
  }

  .product-img {
    width: 80px;
    height: 100px;
    padding: 5px;
    border-radius: 10px;
  }

  .product-info {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .info-title, .info-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }

  .info-title {
    font-size: 17px;
  }

  .info-price-count > span:first-child {
    color: var(--color-tint);
  }


  .product-count {
    float: right;
    margin-right: 5px;
  }


</style>
