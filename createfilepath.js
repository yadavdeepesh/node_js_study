const fs = require('fs');
const path = require('path');
// fs.writeFileSync("testcode.txt","this is the text file adding by deepesh");// create the file 
// fs.unlinkSync("testcode.txt");// remove the file 
const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

// for(i=0;i<5;i++){
//     // fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file ");
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"a simple text file ");
// }

// read the file content 

fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is "+item);
    })
})