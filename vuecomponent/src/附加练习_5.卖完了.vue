<template>
  <div>
    <table>
      <!-- 2. 使用tr组件, 传入需要的数据 -->
      <tr is="myTr" v-for="(item, index) in goodsArr" :key="index"
        :obj="item"
        :index="index"
      ></tr>
    </table>
    <p>All Number:{{ sumNumber }}</p>
  </div>
</template>

<script>
// 如果为0了后面显示卖光了!!!
// 如果库存有值, 后面就不显示卖光了!!!
// 如果库存有值, 累计商品总数量
import MyTr from './practise/MyTr.vue'
export default {
  data () {
    return {
      goodsArr: [
        {
          count: 0,
          goodsName: "Watermelon"
        }, {
          count: 0,
          goodsName: "Banana"
        }, {
          count: 0,
          goodsName: "Orange"
        }, {
          count: 0,
          goodsName: "Pineapple"
        }, {
          count: 0,
          goodsName: "Strawberry"
        }
      ]
    }
  },
  components: {
    MyTr
  },
  computed: {
    sumNumber(){
      return this.goodsArr.reduce((sum, obj) => sum += obj.count * 1, 0)
    }
  }
}
</script>

<style>

</style>