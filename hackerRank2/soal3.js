let k = 1
let n = 4
let arr = [1,2,3,4]

function pairs(n,k,arr){
    let result =0
    let temp = 0
 
    for (let i=0; i<n; i++){
        for (let j=0; j<n;j++){
            temp = arr[i] -  arr[j]
            if (temp == k){
                result += 1
            }
        }
    }
    return result
}

console.log(pairs(n,k,arr))