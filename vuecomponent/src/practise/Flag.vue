<template>
  <span class="left" :class="{undo: pUndo, right: pRight, error: pError}">{{ ind }}:{{ state }}</span>
</template>

<script>
export default {
    props: ["state", "ind"],
    computed: {
        pRight(){
            return this.state === "正确" ? true : false
        },
        pError(){
            return this.state === "错误" ? true : false
        },
        pUndo(){
            return this.state === "未完成" ? true : false
        }
    }
};
</script>

<style scoped>
.left{
    margin-right: 10px;
}
.right {
  color: green;
}
.error {
  color: red;
}
.undo {
  color: #ccc;
}
</style>