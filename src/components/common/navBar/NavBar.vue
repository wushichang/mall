<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="center">
      <slot name="center"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>

</script>

<style>

  .nav-bar {
    width: 100%;
    height: 44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    box-shadow: 0 1px 1px rgb(100,100,100,.2);
    /* 使用better-scroll后 这个已经不需要了 */
    /* position: fixed;
    top: 0;
    z-index: 9; */
  }

  .left,.right {
    width: 60px;
  }

  .center {
    flex: 1;
  }

</style>
