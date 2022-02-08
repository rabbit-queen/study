<template>
  <div class="subject">
    <span>{{ num1 }}</span>
    <span>+</span>
    <span>{{ num2 }}</span>
    <span>=</span>
    <input type="number" v-model="sum"/>
    <button @click="btn(ind)">提交</button>
  </div>
</template>

<script>
export default {
    props: ["ind"],
    data () {
        return {
            sum: ""
        }
    },
    // 计算属性
    computed: {
        num1(){
            return Math.floor(Math.random() * 10)
        },
        num2(){
            return Math.floor(Math.random() * 10)
        },
        Tsum(){
            return this.num1 + this.num2
        }
    },
    // 事件属性
    methods: {
        btn(ind){
            let bool = ''
            this.Tsum == this.sum ? bool = true : bool = false
            this.$emit("sum", bool, ind)
        }
    }
};
</script>

<style scoped>
.subject {
  margin: 5px;
  padding: 5px;
  font-size: 20px;
}
.subject span {
  display: inline-block;
  text-align: center;
  width: 20px;
}
.subject input {
  width: 50px;
  height: 20px;
}
</style>