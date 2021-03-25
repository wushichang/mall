<template>
  <div class="check-button" :class="{active: checked}">
    <img src="~assets/img/cart/tick.svg" />
  </div>
</template>

<script>
  export default {
    name: 'CheckButton',
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .check-button {
    border: 2px solid #EEEEEE;
    border-radius: 50%;
    align-self: center;
  }

  .check-button> img {
    display: block;
    width: 20px;
    height: 20px;
  }

  .active {
    background-color: var(--color-tint);
    border: 2px solid var(--color-tint);
  }
</style>
