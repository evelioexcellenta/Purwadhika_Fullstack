// let huruf = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let arr = ['so**me %$of $y(o)u m%$ay% @d#@ie*',"bu&t% its o^nly sac#rifice i@am wil(ling) t$o ma*&ke"]

function clearSentence(arr){
    let huruf = "abcdefghijklmnopqrstuvwxyz"
    let angka = "1234567890"
    let others = " .,?!"
    let result = ""

    for (let i=0; i<arr.length;i++){
        let stringBaru = ""
        for(let j=0; j<arr[i].length;j++){
            if (huruf.split("").findIndex((item) => item === arr[i][j].toLowerCase()) !=-1 || 
                angka.split("").findIndex((item) => item === arr[i][j]) !=-1 ||
                others.split("").findIndex((item) => item === arr[i][j]) !=-1 )
                {
                stringBaru += arr[i][j]
            }
        }
        result += stringBaru
    }
    console.log (typeof(result))
    return result
}


// function clearSentence(arr){
//     let result =[]
//     for (let i=0; i<arr.length; i++){
//         arr[i]=`${arr[i]}`
//     }
//     let str = arr.join(' ').replace(/[^a-zA-Z0-9'" ]/g, '')
//     result.push(str)
//     return result
// }



console.log (clearSentence(arr))

//iexplorer
// function clear_sentence(arr) {
//     if (Array.isArray(arr)) {
//         return arr.map(sentence => sentence.replace(/[^a-zA-Z0-9\s!?,.]/g, ''));
//     } else if (typeof arr === 'string') {
//         return arr.replace(/[^a-zA-Z0-9\s!?,.]/g, '');
//     } else {
//         return "invalid data";
//     }
// }
