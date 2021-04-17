fs=require("fs");
path=require("path");

module.exports = function (directory,ext,callback){
    fs.readdir(directory,(err,data)=>{
if (err){callback(err)}
else{
    const filt=data.filter((el)=> (path.extname(el)).includes(ext))
    callback(null,filt)
}

    })

}