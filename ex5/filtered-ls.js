
var fs = require("fs");
var path = require('path');
var ext= process.argv[3];
    fs.readdir(process.argv[2],(err,list)=>{
        if (err) {
        console.log(err)}
        else{          
         list.filter((el)=> path.extname(el).includes(ext)).forEach((el)=>
              console.log(el))
        }
    }
    )   
 

   
