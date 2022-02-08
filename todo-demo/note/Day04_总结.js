// 1. 组件概念
// 什么：封装复用的一个vue实例
// 提现：.vue文件 - 标签，样式， js
// 好处：独立作用域，便于复用

// 2. 组件_基础使用
// （1）：创建组件（.vue文件）
// （2）：引入组件（import 变量名 from '组件文件路径'）
// （3）：注册组件（全局 - Vue.component("组件名", 组件对象变量名)）
//               （局部 - components: {"组件名": 组件对象变量名}）
// （4）：使用组件 把组件名当做标签使用即可
// 注意：组件文件名/ 组件名 都以"大写"英文开头
// 运行：组件标签换成对应封装的真实标签显示

// 3. scoped原理
// 添加：当前组件的标签身上都加了，data-v-hash值属性
// 选择器获取：data-v-hash属性选择器

// 4. 组件通信
// 场景：.vue文件 -> 传值 另.vue文件里
// 关系：父子关系（被引入的是子）
// 父 -> 子
// （1）：子组件 - props变量
// （2）：父组件内 - <子组件 变量名="值"/>

// 父 <- 子
// （1）：父组件内 - <子组件 @自定义事件名="父methods函数"/>
// （2）：子组件 - this.$emit("自定义事件名", 值)

// 5. 跨组件通信
// 场景：没有引入关系的2个vue组件
// 解决：EventBus - 事件总线
// 具体步骤：
// （1）：创建空白vue对象  只负责这3个活($on, $emit, $for)
// （2）：接收方：引入这个vue对象，$on("事件名", 函数体)
// （3）：传递方：引入这个vue对象，$emit("事件名", 传值)

// 6. todo案例
// 明确：你要封装的.vue文件（到底是一块页面，还是一段标签组件）
// 页面：数据穿进去
// 一段：外面重复循环

// 拿到项目
// （1）：需求 - 页面什么样子，要什么效果 - 目标
// （2）：先静态 - 标签骨架+css          - 静态
// （3）：铺数据 - 本地/接口-铺页面       - 铺页面
// （4）：交互 -
// 从用户触碰网页开始，先完成一小步...
// 思路断了：用户接下来在页面应该要什么...
//  思路：用户回车新增任务
//  编码：对应技术完成 - 50%（多练习多敲击）
//  改错：根据错误提示，收集有用信息，多打印，多思考代码执行顺序