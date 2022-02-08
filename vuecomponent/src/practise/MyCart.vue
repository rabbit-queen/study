<template>
    <tr>
        <td>
            <input type="checkbox" v-model="checked">
        </td>
        <td>{{ name }}</td>
        <td>{{ price }}</td>
        <td>
            <button @click="del(ind)">-</button>
            {{ num }}
            <button @click="add(ind)">+</button>
        </td>
        <td>{{ isPrice }}</td>
        <td>
            <button @click="secFn(ind)">删除</button>
        </td>
    </tr>
</template>

<script>
export default {
    // 父传子  props变量
    props: ["name", "price", "num", "ind"],
    data () {
        return {
            checked: false
        }
    },
    // 计算属性
    computed: {
        isPrice(){
            return this.price * this.num
        }
    },
    // 事件属性
    methods: {
        // 子传父
        del(ind){
            this.$emit("delPrice", ind)            
        },
        add(ind){
            this.$emit("addPrice", ind)            
        },
        secFn(ind){
            this.$emit("sec", ind)
        },
    },
    // 侦听属性
    watch: {
        // 选中状态的改变
        checked: {
            handler(newVal, oldVal){
                this.$emit("changeAll", newVal, this.ind)
            },
            deep: true, // 深度侦听
            // immediate: true //立即侦听
        },
        // 单商品价格的总价
        isPrice: {
            handler(newVal, oldVal){
                this.$emit("changeP", newVal, this.ind)
            },
            deep: true, // 深度侦听
            immediate: true //立即侦听
        },
    }
}
</script>

<style>

</style>