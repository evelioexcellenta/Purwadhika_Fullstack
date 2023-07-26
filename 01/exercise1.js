//Evelio Excellenta
//exercise 1 - day 1

//rectangle
let panjang = 5;
let lebar = 6;
let luas;

luas = panjang * lebar;
keliling = (panjang+lebar) *2;

console.log ("\nPersegi dengan Panjang=" + panjang + "cm dan Lebar=" + lebar + "cm :")
console.log("\tluas persegi = " + luas + " cm");
console.log("\tkeliling persegi = " + keliling + " cm \n");


//circle
let radius = 7;
const PI = 3.14;
let diameter, circumference, area;

diameter = 2*radius;
circumference = 2* PI * radius;
area = PI * radius * radius;

console.log ("\nLingkaran dengan radius=" + radius +"cm :")
console.log ("\tdiameter lingkaran = " + diameter + " cm");
console.log ("\tkeliling lingkaran = " + circumference + " cm");
console.log ("\tluas lingkaran = " + area + + " cm\n");

//triangle
let angle1 = 50;
let angle2 = 100;
let angle3;

angle3 = 180 - angle1 - angle2;

console.log ("\nSegitiga dengan sudut " + angle1 + " derajat & "+ angle2 + " derajat:")
console.log ("\tsudut ketiga = " + angle3 + " derajat\n")


//difference between dates
let myDate = new Date (); //tanggal hari ini
let newYear = new Date ("2024-01-01"); //tanggal tahun baru 2024
let selisihWaktu, selisihHari; //variabel perbedaan waktu
let oneDay = 1000*60*60*24; //millisecond ke hari

selisihWaktu = newYear.getTime() - myDate.getTime();  //mengambil waktu dalam milisecond
selisihHari = Math.round (selisihWaktu/oneDay) ; //

//selisihHari = (newYear - myDate)/oneDay;

console.log("selisih waktu hingga tahun baru 2024 adalah : ")
console.log("\t" + selisihWaktu + " millisecond atau " + selisihHari + " hari \n" ); //hasil akhir selisih waktu


//konversi hari ke tahun,bulan, dan hari
let jumlahHari  = 400;
let year        = 365;
let month       = 30;

let tahun = Math.floor(jumlahHari / year);
let bulan = Math.floor((jumlahHari % year) / month);
let hari  = Math.floor((jumlahHari % year) % month);

console.log ("hasil konversi " + jumlahHari + " hari :");
console.log ("\t" + tahun + " tahun, " + bulan + " bulan, " + hari + " hari \n")