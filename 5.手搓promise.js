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
  constructor(executor){
    executor(this.#resolve.bind(this))
  }
  #result
  #resaon
  #resolve(num1){
    if(this.#state===0)
    this.#result = num1
    this.#state = 1
  }
  then(onFulfilled,onRejected){
    onFulfilled(this.#result)
  }
}
const mypromise = new MyPromise((resolve,reject)=>{
resolve("孙悟空")
resolve("猪八戒")

})
mypromise.then((result)=>{
  console.log(result);
}
)
