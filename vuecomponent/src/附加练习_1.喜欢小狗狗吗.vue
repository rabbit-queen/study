<template>
  <div>
    <Dog></Dog>
    <Dog></Dog>
  </div>
</template>

<script>
// 1. 铺设
// 1.1 引入组件
import Dog from './practise/Dog1.vue'
// 1.2 注册 使用
export default {
  components: {
    Dog
  }
}
</script>

<style>

</style>