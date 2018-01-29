var express=require('express');

var app=express();

app.get('/123',(req,res)=>{
    res.send({
       name:"Rashika",
        tech:["React JS",
                "Node JS"]
    });

});
app.post('/view',(req,res)=>{
    console.log("post");
    res.send({
       name:"Rashika"
   });
});
app.listen('3001');