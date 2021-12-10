<template>
  <div>
    <!-- 2. 值 -> 标签原生属性上 -->
    <!-- 语法：v-bind:原生属性名="vue变量" -->
    <a v-bind:href="url">点击去百度</a>
    <!-- 语法：原生属性名="vue变量" -->
    <img :src="imgUrl" />
  </div>
</template>

<script>
export default {
  // 1. 准备变量
  data(){
    return{
      url: 'http://www.baidu.com',
      imgUrl: 'https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg'
    }
  }
}
</script>

<style>

</style>