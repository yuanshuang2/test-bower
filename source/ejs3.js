/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const ejs=require('ejs');


ejs.renderFile('ejs_tpl/1.html',{a:12},function(err,data){
    console.log(data);
});
