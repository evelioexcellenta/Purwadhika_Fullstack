let a = [4,6,5,3,3,1]


// function pickingNumbers(a) {
//     let result = []
//     let pengurangan = 0
//     let temp = []
//     let tempo = []
//     a= a.sort((a,b)=>a-b)

//     for (let i=0; i<a.length; i++){
//         for (let j=0 ; j<a.length; j++){
//             if (a[i]<=a[j]){
//                 pengurangan =  Math.abs(a[i]-a[j])
//             }else pengurangan = Infinity
//             if (pengurangan <=1){
//                 temp.push(a[j])
//                 // console.log(temp)
//             }else {
//                 tempo = temp
//                 temp = []
//                 // console.log(tempo)
//                 if (tempo.length>=result.length){
//                     result =tempo
//                     console.log(result)
//                 }
//             }
//         }
//     }

//     return result.length
// }


function pickingNumbers(a) {
        let result = []
        let temp = []
        a= a.sort((a,b)=>a-b)
    
        for (let i=0; i<a.length; i++){
            temp= [a[i]]
            for (let j=i+1 ; j<a.length; j++){
                if (Math.abs(a[i]-a[j]) <=1){
                    temp.push(a[j])
                    console.log(temp)
                }else break 

                if (temp.length>result.length){
                    result =temp
                    console.log(result)
                }
                
            }
        }
    
        return result.length
    }




//pickingNumbers(a)
console.log(pickingNumbers(a))