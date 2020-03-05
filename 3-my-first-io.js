const fs = require('fs')
const str=fs.readFileSync(process.argv[2])
let arr=str.toString().split('\n')
console.log(arr.length-1)