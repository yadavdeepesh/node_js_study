const app = require('./app');
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());
console.log("usimg filter function ");
const arr = [2,3,4,5,6,7,8,9];
// console.log(arr[0]);

let result = arr.filter((item)=>{
    return item<8;
});
console.log(result);


