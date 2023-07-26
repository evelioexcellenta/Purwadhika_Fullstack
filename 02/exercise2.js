//Evelio Excellenta
//Exercise 2 - Day 2

//celcius to fahrenheit
let celcius = 50;
let fahrenheit = (celcius * 9/5) + 32
console.log (`\n${celcius} derajat celcius sama dengan ${fahrenheit} derajat fahrenheit`)

//check odd or even
let angka = 5;
if (angka%2 == 0){
    console.log(`${angka} adalah bilangan genap`)
}else console.log (`${angka} adalah bilangan ganjil`)

//check prime number
let prime = true
if (angka<2){
    prime = false
}
if (angka >= 2 ){
    for (let i=2; i<angka; i++){
        if (angka % i === 0 ){
            prime = false
        }
    }
} else prime = true

console.log(`${angka} adalah ${prime} bilangan prima`)


//cari jumlah 1 hingga n
let hasilJumlah = 0;
for (let i = 1; i<=angka; i++){
    hasilJumlah = hasilJumlah + i;
}
console.log(`penjumlahan 1 hingga ${angka} = ${hasilJumlah}`)

//cari faktorial n!
let hasilFaktor = 1;
for (let i = angka; i>=1 ; i--){
    hasilFaktor = hasilFaktor * i;
}
console.log (`${angka} faktorial adalah ${hasilFaktor}`)

// let hasilFaktor = angka;
// for (let i = 1; i<angka; i++){
//     hasilFaktor = hasilFaktor * i;
// }
// console.log (`${angka} faktorial adalah ${hasilFaktor}`)

//fibonacci
let a=0, b=1, c=0;
console.log (`fibonacci ${angka} adalah sebagai berikut`)
for (let i = 0 ; i<angka; i++){
    a=b;
    b=c;
    c=a+b;
    console.log (c)
}
