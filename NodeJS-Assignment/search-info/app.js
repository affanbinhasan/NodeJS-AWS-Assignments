//Search for a term in a file

const fs = require('fs')
let search_term= 'John';

fs.readFile('searchFile.txt', function (err,data){
    let array = [data.toString().split(' ')][0]
    console.log(array)
    if (err) throw err;
    if(data.includes(search_term)){
        let count = 0
        for (var i=0;i<array.length;i++){
            if(search_term === array[i]){
                count+=1
            }
        }
        console.log(count)
    }
})