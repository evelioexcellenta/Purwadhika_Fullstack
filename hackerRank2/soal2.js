let arr = [7, 69, 2, 221, 8974]


//jawaban sendiri 
function miniMaxSum (arr){
    let sumTotal = 0
    let max = -Infinity
    let min = Infinity
    let sumFour = []

    for (let i=0; i<arr.length; i++){
        sumTotal += arr[i]
    }
    for (let i=0; i<arr.length;i++){
        sumFour.push(sumTotal - arr[i])
        if (sumFour[i]>max){
            max = sumFour[i]
        }
        if (sumFour[i]<min){
            min = sumFour[i]
        }
        
    }
    let result = (`${min} ${max}`)

    return result

}


// jawaban pembahasan
// function miniMaxSum(arr){
//     let max = arr.reduce((a,b) => a+b) - arr[0]
//     let min = arr.reduce((a,b) => a+b) - arr[0]
    
//     for (let item of arr){

//     }
// }


console.log(miniMaxSum(arr))

