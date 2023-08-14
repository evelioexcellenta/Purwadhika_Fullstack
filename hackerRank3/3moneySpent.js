let b= 10 //budget
let keyboards = [3,2]
let drives = [5,2,8]

function getMoneySpent (keyboards, drives, b){
    let result = 0
    let sum=0
    for (let i=0; i<keyboards.length; i++){{
        for (let j=0; j<drives.length; j++){
            sum = keyboards[i]+drives[j]
            // console.log (sum)
            if (sum<=b && sum>result){
                result = sum
            }
            if (result == 0){
                result= -1
            }
        }
    }}

    console.log (result)
    return result
}


getMoneySpent (keyboards, drives,b)