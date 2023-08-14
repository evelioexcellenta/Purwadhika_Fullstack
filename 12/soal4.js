// 1=1
// 2=2
// 3=3
// 4=5
// 5=8
// 6=13
// 7=21
// 8=34

let steps = 8

function staircase (steps){
    let lama = 0;
    let baru = 0; 
    let result = 0


    for (let i=1; i<=steps; i++){
        if (i == 1 || i ==2){
            lama = baru
            baru = i
            result = baru
        }
        else {
            result = lama + baru
            lama = baru
            baru = result
        }

    }
    return result
}


// staircase(steps)

console.log(staircase(steps))