/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const express=require('express');

var app=express();

app.listen(8081);

app.get('/',function(req,res){
    res.setHeader('content-disposition','attachment;filename=111.jpg');
    res.sendFile('404.jpg',{root:__dirname});
});















