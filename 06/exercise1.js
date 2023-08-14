
function calculateData (students){
    let result = {
        score : {
            lowest : students[0].score,
            highest : students[0].score,
            average : 0
        },
        age : {
            highest : (new Date() - students[0].age)/31536000000,
            lowest : (new Date() - students[0].age)/31536000000,
            average :0
        }
    }

    let totalScore = 0
    let totalAge = 0

    for (let i=0; i<students.length; i++){
        let year = (new Date()- students[i].age)/31536000000
        if (students[i].score > result.score.highest){
            result.score.highest = students[i].score
        }
        if (students[i].score < result.score.lowest){
            result.score.lowest = students[i].score
        }

        if (year > result.age.highest){
            result.age.highest = students[i].age
        }
        if (year < result.score.lowest){
            result.age.highest = year
        }

        totalScore += students[i].score
        totalAge += year
    }

    result.score.average = totalScore /students.length;
    result.age.average = totalAge /students.length;


    return result
}


let students = [
    {
        name : "Evelio Excellenta",
        email : "velioexcel@gmail.com",
        age : new Date("2002-09-04"),
        score : 90
    },
    {
        name : "Dharma Nurvianto",
        email : "dnpbnp@gmail.com",
        age : new Date("2002-07-02"),
        score : 80
    },
    {
        name : "Arlen",
        email : "arlen@gmail.com",
        age : new Date("2000-04-03"),
        score : 50
    }
]

console.log(calculateData(students))