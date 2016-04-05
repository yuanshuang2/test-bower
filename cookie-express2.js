/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const express=require('express');
const cookieParser=require('cookie-parser');

var app=express();

app.listen(8081);

app.use(cookieParser());

app.get('/',function(req,res){
    //console.log(req.cookies);
    //res.cookie('b','12312');

    res.cookie('c','ccc',{path:'/',maxAge:3*24*60*60*1000});

    res.send(req.cookies);
});
















