// 1. webpack有什么用？
// 打包整合压缩转译你的代码

// 2. webpack本质上？
// 第三方的包，需要下到当前工程里

// 3. webpack基础使用
// （1）：初始化package.json-
// （2）：yarn add webpack webpack-cli -D
// （3）：package.json里配置自定义命令{"build":"webpack"}
// （4）：（重要）编码 - 所有的代码都要和 "入口" 有直接或间接引入关系才会被webpack一起打包

// 4. webpack默认的入口和出口
// 入口：src/index.js
// 出口：dist/main.js

// 5. webpack相关的配置
// webpack.config.json
// entry - 入口
// output - 出口

// 6. （重要）编写的代码是开发环境 - 运行的都是打包后的代码

// 下面都（重要）
// 7. webpack-插件：更多的功能
// html-webpack-plugin（自动生成html文件-自动引入打包后的一切）
// （重要）webpack默认只能识别js文件

// 8. webpack-加载器：处理更多类型
// css-loader：解析css文件
// style-loader：把css插入到DOM上去
// less-loader: 把less文件转成css
// 静态资源：webpack5版本，内置的处理方案 在rules里配置type: 'asset'
// 小于8KB(1B=8bit)图片文件，转成base64字符串打包进js中
// 大于8KB图片文件，直接输出到dist下直接引用
// 针对字体文件 - type：'asset/resource'（直接输出到dist下）
// babel-loader：webpack配合babel.js对js语法降级处理

// 9. webpack-dev-server
// webpack"开发"服务器 - 自动打包 - 自动更新到浏览器上显示（不会打包进dist下而是内存中）