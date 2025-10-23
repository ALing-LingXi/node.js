const  express = require('express')
const app = express()
app.use('/',(req,res,next)=>{
  console.log('我是中间插件');
  res.send("哈哈")
  // next()
})
app.get('/hello',(req,res) => {
  // console.log(req.url);
  
  res.send('已经启动成功了哦')
  // res.sendStatus(404)
  // res.status(404)
  // res.send('你的请求没有问题，但是我要返回一个404做为测试')
})
app.listen(3000,()=>{
  console.log('走你');
  
})