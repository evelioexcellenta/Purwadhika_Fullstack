let str = 'Pig latin is cool !'

function pig (str){
    let newStr = str.split(" ")
    let temp = ""
    console.log(newStr)

    for (let i=0; i<newStr.length; i++){
        // console.log (newStr[i].length)
        for (let j=0; j<newStr[i].length; j++){
            // console.log (newStr[i].length)
            // console.log (j)
            // temp += newStr[i][j]
            if (j == newStr[i].length-2){
                temp += "a"
                // console.log (temp)

            } else if (j == newStr[i].length-1){
                temp += "y"
            }
            
            else temp += newStr[i][j]
            console.log (temp)
        }
    }console.log (temp)
    // for (let i=0; i<str.length; i++){
    //     console.log(str[i])
    //     for(let j=0; j<str.length; j++){
    //         console.log(str[j])
    //     }
    // }
}


pig(str)