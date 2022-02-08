<template>
    <div class="my_div">
        <img :src="dogImgUrl" alt=""/>
        <p :style="{backgroundColor: colorStr}" @click="btn">{{ dogName }}</p>
    </div>
</template>

<script>
export default {
    props: ["dogImgUrl", "dogName"],
    data () {
        return {
            colorStr: ""
        }
    },
    methods: {
        btn(){
            this.colorStr = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`

            // 1.2 this.$emit("自定义事件名", 值)
            this.$emit("love", this.dogName)
        }
    }
}
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
  float: left;
}

.my_div img {
  width: 100%;
  height: 200px;
}
</style>