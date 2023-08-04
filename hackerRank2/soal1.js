let input = "02:05:45PM"

function timeConversion(s) {
    let temp = ""
    let jam = parseInt(s[0] + s[1])
    let menit = s[3] + s[4]
    let detik = s[6] + s[7]
    let result = ""

    if (s[8] == "P"){
        temp = String (jam + 12)
        if (temp == 24){
            temp = "12"
        } 
    }

    if (s[8] == "A"){
        temp = String (jam)
        if (temp == 12) {
            temp = "00"
        }

    }
    
    if (temp.length == 1){
        result = `0${temp}:${menit}:${detik}`
    }else{
        result = `${temp}:${menit}:${detik}`
    }

    
    return result

}


console.log(timeConversion(input))