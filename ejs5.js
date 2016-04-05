/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const ejs=require('ejs');


/*
ejs.renderFile('ejs_tpl/1.ejs',{a:12},(err,data)=>{
    console.log(data);
});
*/
/*
ejs.renderFile('ejs_tpl/4.html',{arr:['apple','banana','pear']},function(err,data){
    console.log(data);
});*/

ejs.renderFile('ejs_tpl/5.html',{a:'<span>'},function(err,data){
    console.log(data);
});




















