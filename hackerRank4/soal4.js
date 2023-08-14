const A = [3, 2, 1]

function larrysArray(A){
    let bentar = []
    let bentar1 = []
    let hasil ="no"

    for (let i=0; i<A.length; i++){
        if (A[i]>A[i+1]){
            for(let j=0;j<1;j++){
                bentar = A.slice(i,i+3)
                bentar1 = sorting(bentar)
                // if (bentar1 === A){
                //     return "NO"
                // }
            }
            // console.log(bentar1)

            bentar=[]

        }
        
    }


    function sorting(A){
        let temp = []
        let tempo = []
        let result = []
        let hasil = []
        let n = 2


        for (let j=0; j<=n; j++){
            for (let i=0; i<n; i++){
                temp.push(A[i])
            }
        
            for (let i=n;i<A.length;i++){
                tempo.push(A[i])
            }
            result = [...tempo,...temp]
            // console.log(result)
            temp = []
            tempo = []
            n-=1
    
            if (result[0]<result[1]<result[2]){
                hasil = result
                
            }
        }
        console.log(A)
        if (hasil == []){
            return A
        }else return hasil
    
        // return hasil
    }
    
    

    // for (let i=0; i<A.length; i++){

    // }

    // function abc_to_cab (C){

    // }

    // function abc_to_bca (B){

    // }

}


// larrysArray(A)
console.log( larrysArray(A))