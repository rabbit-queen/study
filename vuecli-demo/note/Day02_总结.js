// 1. vue是什么？
// 渐进式javascript框架
// 渐进式：逐渐使用
// 框架：自己的规则的一套语法

// 2. @vue/cli全局包
// （1）：yarn global add @vue/cli --- 得到bue命令
// （2）：vue create脚手架项目名字 --- 得到一套文件夹+文件的标准工程代码
// （3）：yarn server

// 3. 主要入口：
// src/App.vue - Vue页面的入口
// src/main.js - webpack打包的入口
// public/index.html - 浏览器真正运行的html文件

// 4. 单.vue文件写法
// 好处：独立作用域
// 注意：template标签内只能有一个根标签

// 5. 插值表达式
// 表达式：变量 或 常量+运算符组成的，每个表达式原地都有结果
// 语法：{{ 表达式 }}
// 作用：把值显示在标签夹着的地方

// 6. MVVM设计模式
// 设计模式：一个被常人所知所用，代码经验的总结，代码分层来思考编写，构架
// MVVM是什么？
// M：model - 数据层        （vue变量）
// V：view - 视图层          （标签）
// VM：ViewModel - 视频数据层   （vue.js源码）
// MVVM工作过程？
// 数据改变              -> 视图更新
// 视图改变（表单值） -> 数据更新
// MVVM好处？
// 不需要操作DOM，提高开发效率

// 7. 动态属性
// 给原生属性绑定vue的变量值
// 语法：:属性名="vue数据变量"
// 作用：把vue变量赋予给属性使用

// 8. 事件绑定
// 语法：@事件名="methods里的函数名"
// 事件对象：
//     无传参，直接获取
//     有传参，$event
// 事件修饰符：
// .stop .prevent .once .enter .esc

// 9. 表单数据绑定
// 语法： v-model="vue变量"
// 作用：表单value属性 - vue变量
// 注意：暂时"只能"用在表单标签上
// （重要）:
// v-model用在复选框：
// vue变量 - 非数组 - 复选框checked状态(true/false)
// vue变量 - 数组 - 复选框value
// 修饰符：.number .trim .lazy

// 10. v-text和v-html区别
// v-text：把值当做"普通"字符串显示
// v-html：把值当做"标签"来解析

// 11. v-if和v-show
// 语法：v-if="vue变量"  v-show="vue变量"
// 作用：控制标签显示/隐藏 true/false
// 区别：
// v-show (隐藏：display：none)
// v-if (隐藏：从dom上移除)

// 12. v-for
// 语法：
//      v-for="(值变量名, 索引变量名) in 目标结构" - 循环产生所在的标签结构(带子)
//      v-for="值变量名 in 目标结构"
// 使用：
//      谁循环给谁绑
// 注意：
//      v-for的临时变量不能用到范围之外
// 目标结构：
//  数组 / 对象 / 数字 / 字符串...