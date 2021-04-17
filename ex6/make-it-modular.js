const mymodule=require('./mymodule')
const directory=process.argv[2];
const ext=process.argv[3];
mymodule( directory,ext,(err,data)=>{
    if(err){console.log(err)}
    else{
data.forEach(element => { console.log(element)
    
});
    }
})