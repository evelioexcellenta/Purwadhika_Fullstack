let a = [1,2,3]
let b = [3,2,1]


function compareTriplets(a,b){
    let alice = 0
    let bob =0
    let result
    for (let i=0; i<a.length; i++){
        if (a[i] > b[i]){
            alice += 1
        }else if (a[i] < b[i]) {
            bob += 1
        }
    }
    // result = `${alice} ${bob}`
    result = [alice, bob]
    return result
}

console.log (compareTriplets(a,b))
