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
const mypromise = new MyPromise((resolve,reject)=>{

/*   setTimeout(() => {
    resolve("孙悟空")
  }, 3000); */
  resolve("孙悟空")

})
mypromise.then((result)=>{
  console.log(result);
}
)
console.log(123241);
