class ShootingGame {
    constructor (player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    getRandomItem(){
        const items = ['health', 'power']
        const rand = Math.ceil(Math.random()*1)

        if (items[rand]==='health'){
            return{
                health: Math.ceil(Math.random()*9),
                power:0
            }
        }else {
            return{
                power : Math.ceil(Math.random()*9),
                health : 0
            }
        }


        return {
            health :0,
            power :0
        }
    }


    start(){
        isFinish = false

        while (!isFinish){
            console.log("===== Player Status =====")
            this.player1.showStatus()
            this.player2.showStatus()

            console.log ("===== Get Random Item =====")
            this.player1.useItem(this.getRandomItem())
            this.player2.useItem(this.getRandomItem())

            console.log ("===== Shooting =====")
            this.player1.hit(this.player2.power)
            this.player2.hit(this.player1.power)

            console.log("===== Player Status After Shooting =====")
            this.player1.showStatus()
            this.player2.showStatus()

            if (this.player1.health <= 0 || this.player1.health <= 0){
                isFinish = true
            }
        }
    }
}


class Player {
    constructor (name){
        this.name = name
        this.health = 100
        this.power = 10
    }

    hit (power){
        this.health = this.health - power
    }

    useItem(item){
        if(item.health>0){
            this.health = this.health + item.health
        }else {
            this.power += item.power
        }
    }

    showStatus(){
        console.log (this.name, " => ", {this.health})
    }
}