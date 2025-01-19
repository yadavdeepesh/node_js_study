let a = 20;
let b = 0;

let watingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);

});
watingData.then((data)=>{
    b = data;
    console.log(`sum of a and b ${a + b}`);
});
