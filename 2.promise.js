/* Promise
    Promise 可以帮助我们解决异步中的回调函数的问题
    Promise 就是一个用来存储数据的容器
    它拥有着一套特殊的存取数据的方式
    这个方式使得它里边可以存储异步调用的结果 
  创建promise时，构造函数需要一个函数作为参数
  promise构造函数的回调函数，它会在创建promise时调用，调用时会有两个参数传递进去
*/

// resolve 和 reject 是两个函数，通过这两个函数可以向Promise中存储数据
// resolve在执行正常时存储数据，reject在执行错误时存储数据
// reject("哈哈")
// 通过函数来向Promise中添加数据，好处就是可以用来添加异步调用的数据


/* 从Promise中读取数据
可以通过Promise的实例方法then来获取Promise中存储的数据
then需要两个回调函数作为参数，回调函数用来获取Promise中的数据 
通过resolve储存的数据，会调用第一个函数返回
通过reject储存的数据或者出现异常的时候，会调用第二个函数返回
*/


/* Promise中维护了两个隐藏属性：
  PromiseResult
    -用来存储数据
  PromiseState
    -记录Promise的状态（三种状态）
    pending（进行中）
    fulfilled（完成）通过resolve存储数据时
    rejected（拒绝，出错了）出错了或通过reject存储数据时
  state只能修改一次，修改以后永远不会再变 
  
  流程
  当Promise创建时，PromiseState初始值为pending。
    当通过resolve存储数据时：PromiseState 变为fulfilled（完成）
      PromiseResult 变为存储的数据
  当通过reject存储数据或出错时：PromiseState 变为rejected（拒绝，出错了）
    PromiseResult 变为存储的数据或异常对象

    当我们通过then读取数据时，相当于为Promise设置了回调函数：
    -如果PromiseState变为fulfilled，则调用then的第一个回调函数来返回数据
    -如果PromiseState变为rejected，则调用then的第二个回调函数来返回数据*/
// 将变量名从 Promise 改为其他名称，比如 promise
const promise = new Promise((resolve, reject) => {
  // resolve('ahha')
  reject('报错咯')  // 这行不会执行，因为resolve已经改变了状态
})

promise.then(
  (result) => {
    console.log(result) // 输出: ahha
  },
  (reason) => {
    console.log(reason) // 不会执行
  }
)

const promise2 = new Promise((result,reject)=>{
  result('我是正确运行时产生的结果')
  reject("我是错误运行时才会产生的结果")
})
console.log(promise2);

const promise3 = new Promise((result,reject)=>{
 setTimeout(()=>{
  reject('我是错的哦 ')
 },3000)
})
promise3.then((result)=>{
  console.log(result);
},(reason)=>{
  console.log(reason);
})
console.log('----------');
console.log(promise3);

// finally():无论数据储存正常与否，finally总是会执行
const promise5 = new Promise((result,reject)=>{
  result('我是正确运行时产生的结果')
  reject("我是错误运行时才会产生的结果")
})
promise5.finally(()=>{
  console.log('没人能够阻挡我的步伐');
  
})
/* catch() 用法和then类似，但是只需要一个回调函数作为参数
catch()中的回调函数只会在Promise被拒绝时才调用
catch() 相当于 then(null, reason => {})
catch() 就是一个专门处理Promise异常的方法

then()找的是正确的数据
 */
promise3.catch(()=>{
  console.log('捕捉报错');
  
})
