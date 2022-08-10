//calculate sum of intergers from other file

const fs = require('fs')

let data = fs.readFileSync('data.txt','utf8')

let sum_of_content = (data) =>{
    let list = [data.split(',')][0]
    let sum = 0

    for(var i = 0;i<list.length;i++){
        sum += parseInt(list[i])
    }

    return sum
}

console.log(sum_of_content(data))