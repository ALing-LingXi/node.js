/* 
    ES 模块化
*/

// 向外部导出内容
// export 向外部暴露内容
export let a = 10
export const b = 20
export const  c = ()=>{console.log('哈哈');
}
console.log('哈哈');

export default function fn(){
    console.log('我是默认值');
    
}