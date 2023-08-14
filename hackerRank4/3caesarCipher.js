const s = "middle-Outz"
const k = 2

function caesarCipher(s, k) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetCap = alphabet.toUpperCase()
    let alphabetArr = alphabet.split("")

    // bikin alfabet baru
    let temp = []
    let tempo = []
    let newAlphabet = []

    if (k>alphabetArr.length){
        k = k%alphabetArr.length
    }

    for (let i=0; i<k; i++){
        temp.push(alphabetArr[i])
    }

    for (let i=k;i<alphabetArr.length;i++){
        tempo.push(alphabetArr[i])
    }

    newAlphabet = [...tempo,...temp]
    let capitalNew = newAlphabet.toString()
    capitalNew = capitalNew.toUpperCase().split(",")

    console.log (capitalNew)
    console.log (newAlphabet)
    

    let result = []

    for (let i=0; i<s.length;i++){
        if (alphabet.indexOf(s[i])!== -1){
            result.push(newAlphabet[alphabet.indexOf(s[i])])
        }else if (alphabetCap.indexOf(s[i])!== -1){
            result.push(capitalNew[alphabetCap.indexOf(s[i])])
        }else {
            result.push(s[i])
        }
    }
    
    // for (let i=0; i<s.length; i++){
    //     for (let j=0; j<alphabetArr.length; j++){
    //         if (s[i]==alphabetArr[j]){
    //             result.push(newAlphabet[j])
    //             break
    //         }else 
    //         if (s[i]==alphabetCap[j]){
    //             result.push(capitalNew[j])
    //             break
    //         } 
    //         else
    //         if (s[i] == symbol[j] || s[i] ==number[j]){
    //             result.push(s[i])
    //             // break
    //         }
    //     }
    // }
    
    result = result.join("")

    return result
}


console.log(caesarCipher(s,k))

// let temp = []
//     let tempo = []
//     let result = []

//     if (n>arr.length){
//         n = n%arr.length
//         console.log (n)
//     }

//     for (let i=0; i<n; i++){
//         temp.push(arr[i])
//     }

//     for (let i=n;i<arr.length;i++){
//         tempo.push(arr[i])
//     }

//     result = [...tempo,...temp]

//     return result