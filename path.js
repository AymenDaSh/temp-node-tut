const path = require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
const filePath1 = path.join('/content/test.txt')
const base = path.basename(filePath1)
console.log(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'content','test.txt');
console.log(absolute)

