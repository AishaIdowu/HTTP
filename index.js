const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/contact", (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  //    DATABASE STUFF
  res.status(201).send(`Thank you ${req.body.name}`);
});

app.post('/login', (req, res)=>{
    if(!req.header('x-auth-token')) {
        return res.status(400).send('No token');
    }
    if(req.header('x-auth-token') !== '123456') {
        return res.status(401).send('Not Authorized');
    }
    res.send('Logged in')
});

app.put('/post/:id', (req,res) => {
    // DATABASE STUFF
    res.json({
        id: req.params.id,
        title: req.body.title
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
