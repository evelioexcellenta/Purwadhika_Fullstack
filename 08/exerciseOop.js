


class Animal {
    name 
    age  
    isMammal 

    constructor (name, age, isMammal){
        this.name = name
        this.age = age
        this.isMammal = isMammal
    }


}



class Rabbit extends Animal {
    constructor(){
        super()
        this.isMammal = true
    }

    eat(){
        return (`${this.name} sedang makan`)
    }
}

class Eagle extends Animal {
    constructor(name , age, isMammal){
        super(name , age, false)
        this.isMammal = false
    }

    fly(){
        return (`${this.name} sedang terbang`)
    }
}


let myRabbit = new Rabbit()
myRabbit.name = "labi"
myRabbit.age = 2


let myEagle = new Eagle("elo", 4)

console.log (myRabbit)
console.log (myEagle)