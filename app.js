// const amount =12
// if (amount <10){
//     console.log("small number")
// }
// else{
//     console.log("This is a large number")
// }
// console.log("this is my fist node app")
// console.log(__dirname)
// setInterval(() => {
//     console.log("Hello Jay")
// }, 1000);
// modules in node
// const sayHi=(name)=>{
//     console.log(`Hello there${name} `)
// }
// sayHi('Jay')
// const jay="jay";
// const jigar="Jigar"
// module.exports={jay}
// const greet=require("./new1");
// greet('jay')
// module.exports.items=['item1','item2']
// const person={
//     name:"jay"
// }
// module.exports.singlePerson=person;
// const num2=5;
// const num1=10;
// addvalue=()=>{
//     console.log(`The sum is : ${num1+num2}`)
// }
// addvalue()
// const os =require('os')
// info about current user
// const user=os.userInfo()
// console.log(user)
// method return the system uptime in seconds
// console.log(`The sysem uptime is ${os.uptime()}seconds`);

// const currentOs={
//     name:os.type(),
//     relese:os.release(),
//     totalmem:os.totalmem()
// }
// console.log(currentOs)
// const path=require('path');
// console.log(path.sep)
// console.log(path.base)       
// const {readFileSync,writeFileSync}=require('fs');
// const first =readFileSync("./content/First.txt",'utf-8');
// // console.log(first)
// writeFileSync("./content/Second.txt",`Here is the result: ${first}`);
// const {readFile,writeFile}=require('fs')
// readFile("./content/First.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err)
//         return

//     }
//     const first =result
//     readFile("./content/First.txt","utf-8",(err,result)=>{
//         if(err){
//             console.log(err)
//             return
    
//         }
//     const second=result;
//     writeFile(
//         './content/ans.txt',`Here is the result:${first},${second}`,(err,result)
//     )
// //     })
// const http=require('http');
// const server=http.createServer((req,res)=>{
// if(req.url==='/')
// {
//     res.end('welcome  to our Home page')
// }
// // res.write('Welcome to our Home page');
// // res.end()   
// if(req.url==='/about')
// {
//     res.end('Here is a short history')
// }
// res.end(`<h1>OOps!</h1>
// <p>can't find the page</p>`)
// })
// server.listen(5000);
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)