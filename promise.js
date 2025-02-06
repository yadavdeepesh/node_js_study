// how to using promise in js

let a = 20;
let b = 0;

// setTimeout(()=>{
//     b=30;
// })
// console.log(a+b);

// the above code is one problem  do not pass the updated value in b..

// solve this issue using  promise in node.js

// the below code is solve the issue 

let watingdata = new Promise((resolve , reject )=>{
    setTimeout(()=>{
        resolve(30);
    },3000);
});
console.log("this is code solve the problem issue ...........");

watingdata.then((data)=>{
  console.log(a+data);
});




