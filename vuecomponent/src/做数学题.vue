<template>
  <div id="app">
    <h2>测试题</h2>
    <Subject v-for="(obj, index) in arr" :key="index" :ind="index" @sum="sumFn"></Subject>
    <div>
      <Flag v-for="(obj, index) in arr" :key="index" :state="obj.state" :ind="index + 1"></Flag>
    </div>
  </div>
</template>

<script>
// 导入组件
import Subject from './practise/Subject.vue'
import Flag from './practise/Flag.vue'
export default {
  data () {
    return {
      arr:[
        {state: "未完成"},
        {state: "未完成"},
        {state: "未完成"},
        {state: "未完成"},
        {state: "未完成"}
      ]  
    }
  },
  // 注册组件
  components: {
    Subject,
    Flag
  },
  // 事件属性
  methods: {
    sumFn(bool, index){
      if(bool){
        this.arr[index].state = "正确"
      }else{
        this.arr[index].state = "错误"
      }
    }
  }
};
</script>

<style>
body {
  background-color: #eee;
}

#app {
  background-color: #fff;
  width: 500px;
  margin: 50px auto;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 2em;
}
</style>