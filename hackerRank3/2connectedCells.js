let matrix = [[1, 1, 1, 0], [0, 1, 1, 0], [0, 0, 1, 0], [1, 0, 0, 0]]



function connectedCell(matrix) {
    let count = 0
    let rows = matrix.length;
    let cols = matrix[0].length;

    for(let i=0; i<rows; i++){
        for (let j=0; j<cols; j++){
            if (matrix[i][j]===1){
                count = Math.max(count,dfs(i,j))
            }
        }
    }

    function dfs (i,j){
        if(i<0 || j<0 ||i>=rows || j>= rows || matrix[i][j]=== 0){
            return 0
        }
        matrix[i][j]=0
        let size = 1
        for(let row = i-1; row <= i+1; row++){
            for(let col =j-1; col <= j+1; col++){
                if(row !== i || col !== j){
                    size += dfs(row,col)
                }
            }
        }
        return size
    }

    return count
}



connectedCell(matrix)

