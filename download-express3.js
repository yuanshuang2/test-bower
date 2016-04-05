/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const express=require('express');

var app=express();

app.listen(8081);

app.get('/',function(req,res){
    res.download('404.jpg','1111.jpg');
});















