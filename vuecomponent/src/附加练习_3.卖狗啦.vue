<template>
  <div>
    <!-- 2. 铺设数据 -->
    <Dog v-for="(obj, index) in arr" :key="index"
    :dogImgUrl="obj.dogImgUrl"
    :dogName="obj.dogName"
    ></Dog>
  </div>
</template>

<script>
// 把数据循环用组件显示铺设
import Dog from './practise/Dog3.vue'
export default {
  data () {
    return {
      // 1. 准备数据
      arr: [
        {
          dogImgUrl:
          "http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg",
          dogName: "博美",
        },
        {
          dogImgUrl:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1224576619,1307855467&fm=26&gp=0.jpg",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
          "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2967740259,1518632757&fm=26&gp=0.jpg",
          dogName: "金毛",
        },
        {
          dogImgUrl:
          "https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c",
          dogName: "哈士奇",
        },
        {
          dogImgUrl:
          "https://img2.baidu.com/it/u=4180434904,3753672097&fm=26&fmt=auto",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl:
          "https://img1.baidu.com/it/u=2479665273,4122167503&fm=26&fmt=auto",
          dogName: "萨摩耶",
        },
      ]
    }
  },
  components: {
    Dog
  }
}
</script>

<style>

</style>