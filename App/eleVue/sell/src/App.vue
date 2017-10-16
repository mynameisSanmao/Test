<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">详情</div>
    </div>
    <div class="content">
    </div>
  </div>
</template>

<script>
  import headers from './components/header/header.vue'
  export default {
    components: {
      'v-header': headers
    }
  }
</script>

<style>
  .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .tab-item{
    flex: 1;
    text-align: center;
  }
</style>
