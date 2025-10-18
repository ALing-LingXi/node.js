
//为了解决不同运行条件或者不同操作系统所造成的路径不同问题，下面便是最好的方案
const path = require('node:path')
// console.log(path);
const result = path.resolve(__dirname,'./hello.js')
 console.log(path);


 /* 
    fs （File System）
        - fs用来帮助node来操作磁盘中的文件
        - 文件操作也就是所谓的I/O，input output
        - 使用fs模块，同样需要引入
*/
const fs = require('node:fs').promises
console.log(fs);


//readFileSync() 同步的读取文件的方法，会阻塞后边代码的执行
// 当我们通过fs模块读取磁盘中的数据时，读取到的数据总会以Buffer对象的形式返回
// Buffer是一个临时用来存储数据的缓冲区

// const buf = fs.readFileSync(path.resolve(__dirname,'./hello.js'))
// console.log(buf);

// readFile() 异步的读取文件的方法
/*   fs.readFile(path.resolve(__dirname,'./hello.js'),(err,buffer)=>{
    if(err){
      console.log('出错了');
    }
    else{
      console.log(buffer.toString());
    }
  }) */

  /*   
        Promise版本的fs的方法
    */
    // fs.readFile(path.resolve(__dirname, "./hello.js"))
    //     .then(buffer => {
    //         console.log(buffer.toString())
    //     })
    //     .catch(e => {
    //         console.log("出错了~")
    //     })


    //添加文件
    // fs.appendFile(path.resolve(__dirname,'./hello123,js',)
/*     const fs1 = require('node:fs').promises
    fs1.appendFile(
    path.resolve(__dirname, "./hello123.txt"),
    "林歌真帅"
).then(r => {
    console.log("添加成功")
}) */