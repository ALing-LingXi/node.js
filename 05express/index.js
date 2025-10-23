/* 
    目前，服务器代码修改后必须要重启，
        我们希望有一种方式，可以自动监视代码的修改
        代码修改以后可以自动重启服务器

    要实现这个功能，我们需要安装一个模块 nodemon
        使用方式：
            1. 全局安装
                npm i nodemon -g
                yarn global add nodemon
                    - 同yarn进行全局安装时，默认yarn的目录并不在环境变量中
                    - 需要手动将路径添加到环境变量中
                - 启动：
                    nodemon  // 运行index.js
                    nodemon xxx // 运行指定的js

            2. 在项目中安装
                npm i nodemon -D
                yarn add nodemon -D

                - 启动
                    npx nodemon
*/



const path = require('path')
const address = path.resolve(__dirname,'./public')
// 1.引入express模块
const express = require('express')
//2.创建服务器实例
const app = express()
//增加路由器，设置静态资源
//express.static()里面要传我们设置静态文件的路径
// 如果有index文件默认找它
app.use(express.static(address))
//引入请求体
app.use(express.urlencoded())

const USERS = [
    {
        username: "admin",
        password: "12345",
        nickname: "超级管理员"
    },
    {
        username: "sunwukong",
        password: "123456",
        nickname: "齐天大圣"
    }
]
//3.创建路由 
app.get('/',(req,res)=>{
  console.log('我™莱纳');
  
  res.send("我已经响应你的要求,我™莱纳,你人呢团长,你给我等着呼！")
})
app.get('/login',(req,res)=>{
    console.log(req.query);
    console.log(req.query.username);
    console.log(req.query.password);
    res.send("登录成功")
})
app.post('/login',(req,res)=>{
    console.log(req.body.username);
    console.log(req.body.password);
    res.send("响应完毕")
})
app.post('/register',(req,res)=>{
    const {username,password,repwd,nickname}= req.body
    const user = USERS.find((item)=>{
        return item.username===username&& item.nickname===nickname
    })
    if(!user){
        USERS.push({username,password,repwd,nickname})
        res.send("注册成功")
    }
    else{
        res.send("用户名或昵称已经存在")
    }
})
//判断用户名是否存在
const user = 
//4.启动服务器
app.listen('3000')