// console.log("start exe ");
// setTimeout(() => {
//     console.log("logic exe");
// }, 2000);

// console.log("complete exe");

// show the problem of asynchronous call

let a = 10;
let b = 0;

setTimeout(()=>{
b = 20;
console.log(a+b);
},2000);

console.log(a+b);