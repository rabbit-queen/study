<template>
  <div>
      <ul>
          <li v-for="item in myArr" :key="item">{{ item }}</li>
      </ul>
      <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            myArr: ["帅哥", "美女", "程序猿"],
        }
    },
    methods: {
        btn(){
            // 头部到尾部
            // // 头部数据加入到末尾
            // this.myArr.push(this.myArr[0])
            // // 再把头部的数据删除掉
            // this.myArr.shift()

            // 尾部到头部
            this.myArr.unshift(this.myArr[this.myArr.length - 1])
            this.myArr.pop()
        }
    }
}
</script>

<style>

</style>