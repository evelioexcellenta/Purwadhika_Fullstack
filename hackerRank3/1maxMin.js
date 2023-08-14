//https://www.hackerrank.com/contests/jcwdol011q3/challenges

let arr = [10,4,1,2,3,4,10,20,30,40,100,200]
let k = 4

function maxMin (k, arr){
    let temp = []
    let sum = 0
    let prev = Infinity

    arr = arr.sort((a,b)=>a-b)
    console.log(arr)

    for (let i = 0; i<arr.length; i++){
        // temp = arr.slice(i,i+k)
        // if (temp.length<k){
        //     break
        // }else {

        sum = Math.abs(arr[i+k-1]-arr[i])
        if (sum < prev){
            prev = sum
        }
        console.log (temp)
        // }
        
    }

    console.log (prev)
    return prev

}


// function maxMin(k, arr) {
//     arr.sort((a,b)=>a-b);
//     let min=arr[k-1]-arr[0];
//     for(let i=1;i<arr.length;i++){
//         let dif=arr[i+k-1]-arr[i];
//         if(min>dif){
//             min=dif;
//         }
//     }
//     return min;
//    }
maxMin(k,arr)
// console.log(maxMin(k,arr))

