//1. 
const object1 = {a:1, b:2}
const object2 = {a:1, b:3}

function bandingkan (object1,object2){
    let perbandingan = {}
    for (let key in object1){
        if (object1[key] === object2[key]){
            return true
        }
    }
}

console.log (bandingkan(object1,object2))


//2. 
const obj1 = {a:1, b:2}
const obj2 = {a:1, c:3}

function intersection(obj1,obj2){
    let result ={}
    for (let key in obj1){
        if (obj1[key] === obj2[key]){
            result[key] = obj1[key]
        }
    }
    return result
}

console.log(intersection(obj1, obj2))