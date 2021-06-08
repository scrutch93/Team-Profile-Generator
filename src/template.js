const fs = require("fs")

function templater(arr){
    let text = ``
    for(i=0; i<arr.length; i++){
        text+=`
        My name is ${arr[i].name} and my ID is ${arr[i].id}`
    }

    fs.writeFile("test.html", text, err => {
        if(err) throw err
    })
}

module.exports = templater;