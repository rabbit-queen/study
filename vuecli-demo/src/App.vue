<template>
  <div>
    <h3>请选择你喜欢的栏目</h3>
    <ul class="like">
      <li v-for="(item, index) in arr" :key="item">
        <input type="checkbox" @click="checkbox(index)">{{item}}
      </li>
    </ul>
    <ul class="add">
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"]
    }
  },
  methods: {
    checkbox(index){
      $('.add').append('<li>{{this.arr[index]}}</li>')
    }
  }
}
</script>

<style>
.like{
  display: flex;
}
.like>li{
  margin-left: 10px;
  list-style: none;
}
.like>li:nth-child(1){
  margin-left: -40px;
}
</style>