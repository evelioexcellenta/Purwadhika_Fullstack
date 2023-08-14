let grades = [4, 73, 67, 38, 33]
//grade dibawah 40 fail


// function rounding(grades){
//     let rounded = []
//     for (let i=1;i<=grades[0]; i++){
//         if (grades[i]<38) {
//             rounded.push(grades[i])
//         }else if(grades[i]%5==3){
//             rounded.push(grades[i]+2)
//         }else if(grades[i]%5==4){
//             rounded.push(grades[i]+1)
//         }else rounded.push(grades[i])
//     }
//     return rounded
// }

function rounding(grades) {
    let rounded = []
    for (let i=0;i<=grades.length; i++){
        if (grades[i]<38) {
            rounded.push(grades[i])
        }else if(grades[i]%5==3){
            rounded.push(grades[i]+2)
        }else if(grades[i]%5==4){
            rounded.push(grades[i]+1)
        }else rounded.push(grades[i])
    }
    return rounded

}


rounding(grades)


console.log (rounding(grades))


console.log (38%5)