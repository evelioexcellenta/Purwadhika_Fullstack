let n = 6
result = ""

function staircase(n){
    for (let i=1; i<=n;i++){
        for (let j=n-1; j>=i ;j--){
            result += " "
            
        }

        for (let k=1; k<=i;k++){
            result += "#"
        }
        result += "\n"
    }
    return result
}


staircase(6)
