/* 静态方法
    1.Promise.resolve() - 创建一个立即完成的 Promise
    2.Promise.reject() - 创建一个立即拒绝的 Promise
    3.Promise.all([...]) - 同时返回多个 Promise 的执行结果
    其中有一个报错，就返回错误
    4.Promise.allSettled([...]) - 同时返回多个 Promise 的执行结果（无论成功或失败）
    {status: 'fulfilled', value: 579}
    {status: 'rejected', reason: '哈哈'}
    5.Promise.race([...]) - 返回执行最快的 Promise（不考虑对错）//记得要捕捉错误，不然真报错
    6.Promise.any([...]) - 返回执行最快的完成的 Promise,考虑对错
 */
Promise.resolve('哈哈哈').then((result) => {
  console.log(result);
})
Promise.reject('哈哈哈').catch((result) => {
  console.log('嘿嘿嘿');
})

function sum(a, b) {
  return new Promise((result, reject) => {
    setTimeout(() => {
      result(a + b)
    }, 3000);
  })
}
/* const result = Promise.all(
 [sum(123,321),
  sum(1,2),
  sum(8,9)]).then((r)=>{console.log(r);
  })
 */
console.log('haha');

Promise.race([sum(123,321),
  Promise.reject('哈哈哈，我™莱纳'),
  sum(1,2),
  sum(8,9)]).then((r)=>{console.log(r);})
  .catch((r)=>{
    console.log(r);
  })

Promise.allSettled(
  [sum(123,321),
  sum(1,2),
  Promise.reject("我TM是莱纳"),
  sum(8,9)]).then((r)=>{console.log(r);
  })
setTimeout(() => {
  console.log('时间到了');
  
}, 3000);