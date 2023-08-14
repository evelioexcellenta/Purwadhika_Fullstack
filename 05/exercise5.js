//1. cari min, max, average
const numbers = [5,2,6,1,8,3]


function withSort(array){
    let temp
    let sum =0, average =0
    for (let i=0;i<array.length;i++){
        for(let j=i+1; j<array.length;j++){
            if(array[i]>array[j]){
                temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
        //untuk average
        sum += array[i]
        average = sum/array.length
    }
    console.log(`nilai minimal : ${array[0]}`)
    console.log(`nilai maximal : ${array[array.length-1]}`)
    console.log(`nilai average : ${average}`)
    return array
}
console.log (withSort(numbers)) //dengan sort


//2. , kata terakhir ditambahkan "dan"




//3. pisahkan string menjadi array kata
let kalimat = "ini adalah exercise ke5 purwadhika"
let needle = " "

let result = []
function splitString(kalimat,needle){
    let temp = ""
    for (let i=0; i<=kalimat.length-1;i++){
        if (kalimat[i]==needle){
            result.push(temp)
            temp= ""

        }else {
            temp += kalimat[i]
        }
    }
    result.push(temp)
    return result
}

console.log(splitString(kalimat, needle))

//4. 