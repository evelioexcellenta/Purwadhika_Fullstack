function segitigaAngka (height){
    let angka = 1
    for(let i =1; i<=height; i++){
        let result = ""
        for(let j=1; j<=i; j++){
            result += angka.toString().padStart(2, '0') + ' '
            angka++
        }
        console.log(result)
    }
}
segitigaAngka(5)

function fizzBuzz (n){
    let result =""
    for (let i=1; i<=n;i++){
        if(i%3 == 0 && i%5 == 0){
            result += "FizzBuzz "
        }else if (i%5 == 0){
            result += "Buzz "
        }else if(i%3==0 ){
            result +="Fizz "
        }else result += i + " "
    }
    console.log (result)
}
fizzBuzz(15)

function BMI(weight, height){
    let bmi = weight/height
    if (bmi < 18.5){
        return "less weight"
    }else if(bmi>=18.5 && bmi<=24.9){
        return "ideal"
    }else if(bmi>=25.0 && bmi<=29.9){
        return "overweight"
    }else if(bmi>=30.0 && bmi<=39.9){
        return "very overweight"
    }else if(bmi>39.9){
        return "obesity"
    }

}
console.log(BMI(65,170))


function removeOdd(array){
    let newArray
    for (let i=0; i<array.length;i++){  
        newArray.push(i)
    }
}
const array = [1,2,3,4,5,6,7,8,9,10]
console.log()


function splitString(string){
        return string.split(" ");
    }

console.log(splitString("hello world"))