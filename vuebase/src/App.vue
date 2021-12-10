<template>
  <div>
    <div v-for="(item, ind) in arr" :key="ind" style="display: inline-block; margin-right: 10px">
      <input type="checkbox" v-model="checkNumArr" :value="item" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素, 累加的值和为: {{ theSum }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkNumArr: [], //  保存用户选中的数字
    }
  },
  computed: {
    theSum(){
      return this.checkNumArr.reduce((sum, arr) => {
        return sum += arr
      }, 0)
    }
  }
}
</script>

<style>

</style>