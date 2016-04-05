/**
 *  @ Author: 智能社-strive
 *  @ Date: 2016/3/27.
 */
const ejs=require('ejs');

var con=ejs.render('<h3><%=a%></h3>',{
    a:12
});

console.log(con);
