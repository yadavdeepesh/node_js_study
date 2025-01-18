const fs = require('fs');
const path = require('path');
const dirPath =path.join(__dirname,'crud');
console.log(dirPath);
const filePath = `${dirPath}/apple.txt`;
// 1 create the file for using above code 
fs.writeFileSync(filePath,"this is a simple text file");

// 2 read the file 
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// });

// 3 update the file content 
// fs.appendFile(filePath," and file name is apple.txt",(err)=>{
// if(!err) console.log("file is updated");
// })

// 4 rename file name 
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated");
// });

// 5 delete the file for the folder
// fs.unlinkSync(filePath);