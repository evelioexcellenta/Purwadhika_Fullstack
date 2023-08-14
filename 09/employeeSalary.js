class Employee {
    constructor(){
        this.workingHour = 0
    }

    addWorking (hours){
        this.workingHour += hours
    }
}


class FulltimeEmployee extends Employee{
    calculateSalary(){
        let salary = 0
        
            if (this.workingHour<=6) {
                salary = 100000
            }else salary = 75000 

        return this.workingHour * salary
        
    }

}


class ParttimeEmployee extends Employee {

    calculateSalary(){
        let salary = 0
        
            if (this.workingHour<=6) {
                salary = 50000
            }else salary = 30000 

        return this.workingHour * salary
        
    }

    // calculateSalary(){
    //     let salary = 0
    //     for (let i=0 ; i<hours; i++){
    //         if (i<6) {
    //             salary += 50000
    //         }else salary += 30000 * hours
    //     }
        
    // }
}


//mainkan 

let employee1 = new FulltimeEmployee()
employee1.addWorking(6)
console.log(employee1.calculateSalary()) 

