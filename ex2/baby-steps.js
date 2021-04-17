console.log(process.argv.splice(2).reduce(((a,el)=> a+Number(el)),0))
