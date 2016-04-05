/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const express=require('express');

var app=express();

app.listen(8081);

//app.get(地址,fnCb);

app.get('/',function(req,res){
    console.log('有人访问主页了');

    /*res.write('123');
    res.end();*/
    //res.send('123');
    res.send({a:1,b:2});
});
















