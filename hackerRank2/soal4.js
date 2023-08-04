let n = 31
let arr = [3, 0 ,9, 8 ,5 ,5, 3, 5, 8, 5]

function rotate_number (arr,n){
    let temp = []
    let tempo = []
    let result = []

    if (n>arr.length){
        n = n%arr.length
        console.log (n)
    }

    for (let i=0; i<n; i++){
        temp.push(arr[i])
    }

    for (let i=n;i<arr.length;i++){
        tempo.push(arr[i])
    }

    result = [...tempo,...temp]

    return result
}



console.log(rotate_number(arr,n))