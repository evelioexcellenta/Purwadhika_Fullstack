const arr = [[11,2,4],[4,5,6],[10,8,-12]]

function diagonalDifference (arr){
    let sum = 0
    let diag1 = 0
    let diag2 = 0 

    for (let i=0, j=arr.length-1; i< arr.length, j>=0; i++, j--){
        diag1 += arr[i][i]
        diag2 += arr[i][j]
                   
    }
    
    sum = Math.abs(diag1-diag2)

    return sum
}


diagonalDifference(arr)

// function calculateDiagonals(matrix){
//     var n = matrix.length;
//     var diag1 = 0;
//     var diag2 = 0;
//     for(var i=0; i<n; i++){
//         for(var j=0; j<n; j++){
//             // an element from the main diagonal
//             if(i === j) { 
//                 diag1 += matrix[i][j];
//             }
//             // an element from the counterdiagonal
//             if(i + j === n - 1){
//                 diag2 += matrix[i][j];
//             }
//         }
//     }
//     return Math.abs(diag1 - diag2);
// }

// console.log(calculateDiagonals(arr))
