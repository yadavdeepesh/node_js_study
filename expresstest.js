const express = require('express');
const app = express();

app.get("", (req, res) => {
    const rawName = Object.keys(req.query).find(key => key.trim() === "name");
    const name = rawName ? req.query[rawName] : "Guest"; // Handle missing name

    res.send(`Hello, ${name}`);
});


app.get("/about", (req, res) => {
    // passing the html code
    const rawName = Object.keys(req.query).find(key => key.trim() === "name");
    const name = rawName ? req.query[rawName] : "Guest"; // Handle missing name
    res.send(`
      <h1> My Name is deepesh yadav </h1>
      <input type ="text" placeholder="username" value ="${name}"/>
      <button>click me</button>
      <a href="/contact">Go to Contact Page </a>
        `);
    // res.send('hello , this is about page');
});

app.get("/contact", (req, res) => {
    // create the links 
    res.send(`<a href="/about">Go to About Page </a>`);

    // res.send('hello , this is contact page');
})

// pasing the json data 
app.get("/help", (req, res) => {
    // res.send('hello , this is contact page');
    // passing the single object 
    // res.send({
    //     name: "Deepesh ",
    //     lastname: "Yadav",
    //     city: "Muzaffarnagar"
    // });
    // passing the multiple object data 
    res.send([
        {
            name: "Deepesh ",
            lastname: "Yadav",
            city: "Muzaffarnagar"
        },
        {
            name: "Shubham ",
            lastname: "Sharma",
            city: "Muzaffarnagar"
        },
        {
            name: "Abhishek ",
            lastname: "Sexena",
            city: "Muzaffarnagar"
        }
        ]);
})
app.listen(5000);