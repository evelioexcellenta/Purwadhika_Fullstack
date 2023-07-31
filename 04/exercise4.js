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