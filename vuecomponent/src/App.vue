<template>
  <div>
    <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" v-model="isAll"/> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <MyCart v-for="(obj, index) in goodList" :key="index + ' '"
        :name="obj.name"
        :price="obj.price"
        :num="obj.num"
        :ind="index"
        @delPrice="delPrice"
        @addPrice="addPrice"
        @sec="secF"
        @changeAll="changeAll"
        @changeP="changeP"
        ></MyCart>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">  
            <!-- {{ allPrice }} -->
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
// 导入组件
import MyCart from './practise/MyCart.vue'
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
      // 添加的临时变量
      parrList: [],
      pobjList: {}
    };
  },
  // 注册组件
  components: {
    MyCart
  },
  // 事件
  methods: {
    delPrice(index){
      if(this.goodList[index].num < 1){
        return
      }
      this.goodList[index].num --
    },
    addPrice(index){
      this.goodList[index].num ++
    },
    secF(index){
      this.goodList.splice(index, 1)
    },
    // 小选状态 （全选影响不了小选）有误！！！！！！！！！！
    changeAll(checkbox, index){
      this.goodList[index].checked = checkbox
    },
    // 单商品的总价格 有误！！！！！！！！！！！
    changeP(allpirce, index){
      // this.goodList[index].push(aPirce, allpirce)
      this.pobjList = {id: index, aPirce: allpirce}
      this.parrList.push(pobjList)
    }
  },
  // 计算属性
  computed: {
    // 全选
    isAll: {
      set(val){
        this.goodList.forEach(obj => obj.checked = val)
      },
      get(){ 
        return this.goodList.every(obj => obj.checked === true)
      }
    },
    // allPrice(){
    //   this.goodList.reduce()
    // }
  }
};
</script>

<style>
</style>