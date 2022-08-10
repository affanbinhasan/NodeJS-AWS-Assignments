//2. program to read file and show content into the console

var fs = require('fs');

let content = fs.readFileSync('test.txt','utf8')

console.log(content)

