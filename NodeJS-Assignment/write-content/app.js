//write a nodeJS program tat creates a txt file with the text passed as a parameter
//question no. 4 and 10 are same

const fs = require('fs')

let cli_text = process.argv.slice(2).toString()

fs.writeFileSync('writeContent.txt',cli_text)
console.log('The file was saved')