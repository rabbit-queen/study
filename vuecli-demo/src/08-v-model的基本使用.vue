<template>
  <div>
    <!-- 
    	v-model:是实现vuejs变量和表单标签value属性, 双向绑定的指令
    -->
    <div>
      <span>用户名:</span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" v-model="pass" />
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            username: '',
            pass: ''
        }
    }
}
</script>

<style>

</style>