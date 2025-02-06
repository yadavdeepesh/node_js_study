const http = require('http');

// function datacontrol(req,res){
//     res.write("<h1>Hello This is Deepesh Yadav normal function </h1>");
//     res.end();
// }
// create the server using normal function 
// http.createServer(datacontrol).listen(4500);

// create the server using fat arrow function 
// http.createServer((req,res)=>{
//     res.write("<h1>Hello This is Deepesh Yadav</h1>");
//     res.end();
// }).listen(4500);

//convert normal function to fat arrow  function

// const datacontrol = (req,res) => {
//     res.write("<h1>Hello This is Deepesh Yadav normal function222 </h1>");
//     res.end();
// }

// http.createServer(datacontrol).listen(4500);


// this fat arrow function pass to the create server directly 

http.createServer((req,res) => {
    res.write("<h1>Hello This is Deepesh Yadav normal function222334 </h1>");
    res.end();
}).listen(4500);

function test(a){// normal function 
return a*10;
}

// create same  code  using fat arrow function 

const test2 = (a) =>{
    return a*10;

}
console.log(test2(5));