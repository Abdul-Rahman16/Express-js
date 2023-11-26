const express = require('express');
const fs=require('fs');
const path=require('path');
const app = express();  //creates a server
const port=3000;


const users=JSON.parse(fs.readFileSync('users.json','utf-8')).users;  //fetch only users.

app.get('/', function (req, res) {
  console.log(users);
  res.sendFile(path.join(__dirname, '\index.html'));
});

app.get('/users/:id', function (req, res) {

    const userId=req.query.userId;
    res.send(users.filter((user) =>
        user.id==userId));
    });

    // console.log(req.query);
    //res.send(users);

    app.post('/users',(req,res)=>{

        const user=req.body.user;
        console.log(users.length);
        users.push(user);
        console.log(users.length);
        res.statusCode(201);

        //fetch the request body contains user object
        //add the entry to user array
        //send statuscode=201
    })

//which port server is listening to
app.listen(port, () => {
    console.log(`Server started successfully on ${port}`);
});