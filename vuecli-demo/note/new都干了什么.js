// 必须要知道每个变量里装的是什么 - 多写注释多打印
// 一定要知道每行代码意思
// 一定要知道代码的执行顺序

// 类：属性和方法模板的集合
function Person(uname, uage, usex) { // this是空白对象
    this.name = uname
    this.age = uage
    this.sex = usex
}

// 所有实例对象共享方法 - 节省内存
Person.prototype.say = function() {}

// 生成对象
let per = new Person('刘德华', 18, '男')
console.log(per); // {name:'刘德华',age:18,sex:'男'}

// 1. new 会创建一个空白对象
// 2. 调用Person执行
// new Person特殊：3. 替换person函数里this的指向为空白对象
// 4. "默认"返回这个this对象到new调用的地方