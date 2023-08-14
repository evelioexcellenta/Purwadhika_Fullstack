class Product {
    static warehouse = []
    constructor() {
        this.name  = ""
        this.price = 0
        
    }

    set setName(name){
        this.name = name
    }

    get getName(){
        return this.name
    }

    set setPrice(price){
        this.price = price
    }
}


class Transaction {
    constructor(){
        this.keranjang = [] //cart
        this.total = 0
    }



    addToCart (name,qty){
        for (let item of Product.warehouse){
            if (name == item.name){
                let hargaTotal = item.price * qty
                let order = {...item, quantity : qty, total : hargaTotal}
                this.keranjang.push(order)
                this. total = this.total + hargaTotal
                return
            }
            
        }
        console.log("barang tidak ada di warehouse kami")
    }

    showTotal (){
        return this.total
    }

    checkOut(){
        Object.freeze(this);
        return this
    }
}

// warehouse management
let product1 = new Product()
product1.setName = "Botol Air"
product1.setPrice = 3000
// console.log(product1)

let product2 = new Product()
product2.setName = "Roti Bakar"
product2.setPrice = 40000
// console.log(product1)

Product.warehouse.push(product1,product2)
// console.log (Product.warehouse)


// transaction
let trans1 = new Transaction()
trans1.addToCart("Botol Air", 3)
console.log("trans 1 : ", trans1)

let trans2 = new Transaction()
trans2.addToCart("Roti Bakar", 7)
trans2.addToCart("Botol Air", 2)
console.log("trans 2 : ", trans2)
