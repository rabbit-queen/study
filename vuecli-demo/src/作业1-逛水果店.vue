<template>
  <div id="app">
    <table class="tb">
      <caption class="title">欢迎光临_vue开发的收银系统_水果店</caption>
      <tr>
        <th>苹果&nbsp;&nbsp;10￥/斤，折扣&nbsp;&lt;8折&gt;</th>
      </tr>
      <tr>
        <td>
          输入你要买的斤数：
          <button @click="del">-</button>
          <input type="text" class="sum" v-model="sum">
          <button @click="add">+</button>
        </td>
      </tr>
      <tr>
        <td>
          <button @click="buy">结账买单~</button>
        </td>
      </tr>
      <tr>
        <td>账单：总价<i class="priceSum">{{ priceSum }}</i>￥元&nbsp;&nbsp;折后价：<i class="priceDiscounted">{{ priceDis }}</i>￥元&nbsp;&nbsp;省了：<i class="priceEconomize">{{ priceEco }}</i>￥元</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sum: '1',
      priceSum: '10',
      priceDis: '8',
      priceEco: '2'
    }
  },
  methods: {
    buy(){
      this.priceSum = 10 * this.sum
      this.priceDis = this.priceSum * 0.8
      this.priceEco = this.priceSum - this.priceDis
    },
    add(){
      this.sum ++
    },
    del(){
      this.sum --
    }
  }
}
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}
.title{
  margin-bottom: 5px;
}
.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}
</style>