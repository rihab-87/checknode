
const fs = require('fs')
var data=fs.readFileSync(process.argv[2])
const str = data.toString()
console.log( (str.split('\n').length)-1)