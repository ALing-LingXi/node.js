/* const promise = new Promise((resolve,reject)=>{
  resolve('哈哈哈'),reject("出错了")
})
promise.then((result)=>{console.log(result);
},(resaon)=>{
console.log(resaon);
})
 */
class MyPromise{
  #state=0
  #callback
  constructor(executor){
    executor(this.#resolve.bind(this))
  }
  #result
  #resaon
  #resolve(num1){
    if(this.#state===0)
    this.#result = num1
    this.#state = 1
    queueMicrotask(()=>{
      this.#callback&&this.#callback(this.#result)
    })
  }
  then(onFulfilled,onRejected){
    if(this.#state===0){
      this.#callback = onFulfilled
    }
    else{
    queueMicrotask(()=>{onFulfilled(this.#result)})
    }
  }
}
/* const mypromise = new MyPromise((resolve,reject)=>{

   setTimeout(() => {
    resolve("孙悟空")
  }, 3000); 
  resolve("孙悟空")

})
mypromise.then((result)=>{
  console.log("结果1",result);
}
)
mypromise.then((result)=>{
  console.log("结果",result);
}
)
console.log(123241);
 */


console.log("=== 测试异步resolve时的覆盖问题 ===")
const mypromise2 = new MyPromise((resolve,reject)=>{
  setTimeout(() => {
    resolve("异步结果")
  }, 1000)
})

// 这些then调用时，state还是0（pending）
mypromise2.then((result)=>{
  console.log("第一个回调执行:", result)
})

mypromise2.then((result)=>{
  console.log("第二个回调执行:", result)  
})

mypromise2.then((result)=>{
  console.log("第三个回调执行:", result)
})

console.log("同步代码结束")