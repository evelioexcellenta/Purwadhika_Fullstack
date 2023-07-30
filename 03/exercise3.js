//1. display the multiplication table of a given integer
let inputAngka = 9;
let hasilKali;
for (let i=1; i<=10; i++){
    hasilKali = inputAngka * i
    console.log(`${inputAngka} x ${i} = ${hasilKali}`)
}

//2. cek apakah string palindrome
let string = "racecar";
let panjangString = string.length
let palindrome = true;

for (let i = 1; i<panjangString/2 ; i++){
    if (string[i] !==string[panjangString-1-i]){
        palindrome = false
    }else palindrome = true
}

if (palindrome == true){
    console.log (`${string} palindrome`)
}else console.log (`${string} bukan palindrome`)

//cara guru 
let str = "kasur rusak"
let isPalindrome = ""

for (let i=str.length ; i>=0 ;i--){
    isPalindrome = isPalindrome + str[i];
}
console.log(isPalindrome == str ? "palindrome" : "not palindrome")


//3. konversi cm to km
let cm = 5000000
let km = cm / 100000;

console.log (`${cm} cm sama dengan ${km} km`)


//4. angka ke format mata uang Rp
// let uang = 50000
// let strUang = uang.toString()
// let format = ""
// for (let i=strUang.length; i<0; i++){

// }



// for (let i=10; i<=uang; i=i*10){
//     console.log (i)
// }




//5. remove string yang dicari
let stringAsal = "Hello World";
let searchString = "ell";
let hasilDel = stringAsal.split(searchString).join("")

console.log (`menghilangkan ${searchString} dari ${stringAsal} = ${hasilDel}`)

// for (let i=0; i<needle.length; i++){
//     needle[i] = haystack[i]
//     pembanding = pembanding + haystack[i]
//     if (pembanding = needle){
//         console.log(pembanding)
//         break
//     }

// }


//6. bikin setiap kata diawali kapital
let kalimat = "hello world"
let splitKalimat = kalimat.split(" ")
let result = ""

for (let i=0; i<=kalimat.length; i++){
    
}

//7. reverse string


//8. 


//12. sensor
// let sensor = "a"
// let sentence = "an apple a day keeps the doctor away"
// let hasilSensor = ""
// for (let i=0; i>=sentence.length; i++){
//     if (sentence[i] = sensor){
//         hasilSensor = 
//     }
     
// }