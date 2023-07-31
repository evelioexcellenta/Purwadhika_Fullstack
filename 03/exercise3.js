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
let uang = 5000000
let strUang = uang.toString()
let formatR = ""
let format = ""
let j=1
for (let i=strUang.length-1; i>=0; i--){
    formatR += strUang[i]
    if (j%3 === 0 &&  j!= strUang.length){
        formatR += "."
    }
    j++
}
for (let i=formatR.length-1; i>=0; i--){
    format += formatR[i]
}
console.log(`\nhasil konversi format ${uang} ke Rp = Rp${format}.00`)

//5. remove string yang dicari
let stringAsal = "Hello World";
let searchString = "ell";
let hasilDel = stringAsal.split(searchString).join("")
console.log (`\nmenghilangkan ${searchString} dari ${stringAsal} = ${hasilDel}`)


//6. bikin setiap kata diawali kapital
let kalimat = "hello world"
let splitKalimat = kalimat.split(" ")
let result = []

for (let i=0; i<=splitKalimat.length-1; i++){
    result += splitKalimat[i][0].toUpperCase()
    for (let j=1; j<splitKalimat[1].length; j++){
        result += splitKalimat[i][j]
    }
    result += " "
}
console.log(`\nmengganti setiap awal kata ${kalimat} menjadi kapital : ${result} `)


//7. reverse string
let stringR = "Hello World"
let reversed = ""

for (let i=stringR.length-1; i>=0; i--){
    reversed += stringR[i]
}
console.log(`\nmemutar balik ${stringR} : ${reversed}`)

//8. Tuker lower ke upper dan sebaliknya
let string8 = "The QuiCk BrOwN Fox"
let tuker = ""

for (let i=0; i<string8.length; i++){
    if(string8[i] === string8[i].toUpperCase()){
        tuker += string8[i].toLocaleLowerCase()
    }else tuker += string8[i].toUpperCase()
}
console.log(`\nmenukar ${string8} dari lower ke upper dan sebaliknya : ${tuker}`)

//9. cari yang terbesar dari 2 angka
let angka1 = 100
let angka2 = 50

if (angka1 > angka2){
    console.log(angka1, `lebih besar dari`, angka2)
}else console.log(angka2, `lebih besar dari`, angka1)


//10. sort 3 angka 
let number1 = 2
let number2 = 1
let number3 = 3

console.log (`\nurutkan bilangan berikut :`, number1, number2, number3)

if (number1 > number2 && number1 > number3 && number2 >number3){
    console.log(number1, ">", number2, ">", number3)
}else if (number1 > number2 && number1 > number3 && number3 >number2){
    console.log(number1, ">", number3, ">", number2)
    
}else if (number2 > number1 && number2 > number3 && number1 >number3){
    console.log(number2, ">", number1, ">", number3)
}else if (number2 > number1 && number2 > number3 && number3 >number1){
    console.log(number2, ">", number3, ">", number1)
}

else if (number3 > number1 && number3 > number2 && number1 >number2){
    console.log(number3, ">", number1, ">", number2)
}else if (number3 > number1 && number3 > number2 && number2 >number1){
    console.log(number3, ">", number2, ">", number1)
}


//11. 1 jika string, 2 jika angka, 3 jika tipe lain
let input = 312412;

switch (typeof input){
    case "string" :
        console.log("1")
        break
    case "number" :
        console.log("2")
        break
    default : 
        console.log("3")
        break
}


//12. sensor
let sensor = "a"
let sentence = "an apple a day keeps the doctor away"
let hasilSensor = ""

for (let i=0; i<=sentence.length-1; i++){
    if (sentence[i]== sensor){
        hasilSensor += "*"
    }else hasilSensor += sentence[i]
    
}

console.log (hasilSensor)
