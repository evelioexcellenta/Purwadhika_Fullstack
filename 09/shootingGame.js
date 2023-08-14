class ShootingGame {
    constructor (player1, player2){
        this.player1 = {}
        this.player2 = {}

    }

    getRandomItem(){
        let item
        let randomHealth =  Math.floor(Math.random() * (0 - 1 + 1) + min)
        randomHealth == 0 ? this.health += 0 : this.health += 10
        let randomPower =  Math.floor(Math.random() * (0 - 1 + 1) + min)
        randomPower == 0 ? this.power += 0 : this.power += 10 

    }

    start(){
        while (player1!=0 || player2 !=0){

        }
    }
}


class Player1 {
    constructor(){
        this.name = name
        this.health = 100
        this.power = 10
    }

    hit(power){
        this.health -= power
    }
    
    useItem(item){
        ShootingGame.getRandomItem()
    }

    showStatus(){
        
    }

}

class Player2 {
    constructor(){
        this.name = name
        this.health = 100
        this.power = 10
    }

    hit(power){
        this.health -= power
    }
    
    useItem(item){
        ShootingGame.getRandomItem()
    }

    showStatus(){
        
    }

}