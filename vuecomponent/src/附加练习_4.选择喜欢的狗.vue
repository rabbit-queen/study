<template>
  <div>
    <Dog v-for="(obj, index) in arr" :key="index"
    :dogImgUrl="obj.dogImgUrl"
    :dogName="obj.dogName"
    @love="fn"
    ></Dog>
    <hr />
    <p>显示喜欢的狗:</p>
    <ul>
      <li v-for="(item, index) in loveArr" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
// 目标: 用户点击狗狗的名字, 在右侧列表显示一次名字
// 1. 子传父
// 1.1 自定义事件
import Dog from './practise/Dog4.vue'
export default {
  data () {
    return {
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
      ],
      loveArr: []
    }
  },
  components: {
    Dog
  },
  methods: {
    fn(dogName){
      this.loveArr.push(dogName)
    }
  }
}
</script>

<style>

</style>