/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const express=require('express');

var app=express();

app.listen(8081);

//app.get(地址,fnCb);

app.get('/',function(req,res){
    res.send('这是主页');
});
app.get('/a.html',function(req,res){
    res.send('这是A页面');
});
app.get('/b.html',function(req,res){
    res.send('这是B页面');
});
















