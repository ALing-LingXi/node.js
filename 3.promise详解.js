//异步计算合的函数

/* function sum(a,b){
  return new Promise((result,reject)=>{
    setTimeout(() => {
      result(a+b)
    }, 3000);
  })
}
sum(123,321)
console.log(sum);
sum(123,321).then((result)=>{
  console.log(result);
},reject=>{}) */

// 2.回调地狱的解决

      // function sum(a,b,cb){
      //   setTimeout(()=>{
      //     cb(a+b)
      //   },3000)
      // }
      // console.log(11111);
      // const result = sum(123,456,(result)=>{
      //   console.log(result);
      //   //如果我们需要这个结果来进行运算就会造成回调地狱
      //   sum(result,7,(result=>{
      //     sum(result,8,(result)=>{
      //       console.log(result);//如果有n个是不是要套n个回调，一坨奥力给
      //     })
      //   }))
      // })

    /*   function sum(a,b){
        return new Promise((result,reject)=>{
          setTimeout(() => {
            result(a+b)
          }, 3000);
        })
      }
      sum(123,321)
      .then((result)=> result+10)
      .then((result)=> result+20)
      .then((result)=>{
        console.log(result);
      }) */



/* Promise 是一个用来存储数据的对象。
由于 Promise 存取方式的特殊性，可以直接将异步调用的结果存储到 Promise 中。
对 Promise 进行链式调用时，后边的方法（then 和 catch）读取的是上一步的执行结果。
如果上一步的执行结果不是当前想要的结果，则跳过当前的方法。
当 Promise 出现异常时，而整个调用链中没有出现 catch，则异常会向外抛出 */

const promise = new Promise((resovle,reject)=>{
  // resovle('哈哈')//跳过了catch
  reject("我给你报个错")//跳过了第一个then
})
promise.then((result)=>{
  console.log(result);
  return "呵呵"
})
.catch((reject)=>{
  console.log(reject);
  return '捕捉异常'
})
.then((result)=>{
  console.log(result);
})