'use strict';

module.exports = (req,res,next)=>{

console.log('request logger:',req.method, req.path, new Date());

next();
}