const express = require("express")
const path = require("path")
const address = path.resolve(__dirname, "public")
const address2 = path.resolve(__dirname, "views")
let STUDENTS = [
  {
    name: "悟空", age: "18", gender: "男"
  },
  {
    name : "猪八戒",age: "28",gender:"男"
  }
]
const app = express()
app.set("view engine", "ejs")
app.set("views", address2)
app.use(express.urlencoded())
app.use(express.static(address))
app.get("/students", (req, res) => {
  // 希望用户在访问students路由时，可以给用户返回一个显示有学生信息的页面
  /* 
      html页面属于静态页面，创建的时候什么样子，用户看到的就是什么样子
          不会自动跟随服务器中数据的变化而变化

      希望有这么一个东西，他呢长的像是个网页，但是他里边可以嵌入变量，
          这个东西在node中被称为 模板

      在node中存在有很多个模板引擎，都各具特色，ejs

      ejs是node中的一款模板引擎，使用步骤：
          1.安装ejs
          2.配置express的模板引擎为ejs
              app.set("view engine", "ejs")
          3.配置模板路径
              app.set("views", path.resolve(__dirname, "views"))

          注意，模板引擎需要被express渲染后才能使用
  */

  //  res.render() 用来渲染一个模板引擎，并将其返回给浏览器
  // 可以将一个对象作为render的第二个参数传递，这样在模板中可以访问到对象中的数据
  // res.render("students", { name: "孙悟空", age: 18, gender: "男" })
  // <%= %>在ejs中输出内容时，它会自动对字符串中的特殊符号进行转义 &lt;
  //    这个设计主要是为了避免 xss 攻击
  // <%- %> 直接将内容输出
  // <% %>  可以在其中直接编写js代码，js代码会在服务器中执行
  res.render("students", {STUDENTS})
})
app.post("/stM",(req,res)=>{

  res.send("修改成功")
})

//没有找到该路径则返回404
app.use((req, res) => {
  res.status(404)
  res.send("您的页面已经被外星喵子劫持")
})
app.listen(3000)