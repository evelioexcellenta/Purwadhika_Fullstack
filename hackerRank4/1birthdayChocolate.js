const s = [2,2,1,3,2]
const d = 4 //target
const m = 2 //penjumlahan dari m angka

function birthday (s,d,m) {
    let ways = 0
    let temp =[]
    let sum = 0
    for (let i = 0; i<s.length; i++){
        temp = s.slice(i,i+m)
        sum = temp.reduce((a,b) => a+b)
        if (sum==d){
            ways += 1
        }
    }
    return ways
    
}

birthday(s,d,m)