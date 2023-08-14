// function doTask (task){
//     return new Promise ((resolve, reject) => {
//         let isError = false
//         console.log("doing "+ task + " ... ")
//         if (isError){
//             reject ("task "+task+" error ")
//         }else { 
//             resolve ("task "+task+" success ")
//         }
//     })
// }

// doTask(1)
// .then((res) => {
//     console.log("res dari then " + res)
// })
// .catch((err)=> {
//     console.log ("res dari catch " + err)
// })

function doTask (task,time){
    return new Promise ((resolve, reject) => {
        let isError = false
        console.log("doing "+ task + " ... ")
        setTimeout(() => {
            if (isError){
                reject ("task "+ task +" error ")
            }else { 
                resolve ("task "+ task +" success ")
            }
        }, time*1000);
       
        
    })
}

// doTask(1,3)
// .then((res) => {
//     console.log("res dari then => " + res)
//     return doTask(2,4)

    // cara salah (call back hell)
    // doTask(2,4).then((res)=> {
    //     console.log (res);
    //     doTask(3,2).then((res)=> {
    //         console.log (res);
    //         doTask(4,2).then((res)=> {
    //             console.log (res);
    //         })
    //     })
    // })

// yang bener v
// })
// .then((res) => {
//     console.log (res);
//     return doTask(3,2)
// })
// .then((res) => {
//     console.log (res);
//     return doTask(4,1)
// })
// .then ((res)=> {
//     console.log (res)
// })

// .catch((err)=> {
//     console.log ("res dari catch => " + err)
// })

// .finally(()=>{
//     console.log ("finish")
// })

//contoh passing promise untuk kedepannya
// function getDataFromServer() {
//     return blabla.get("https://sample/products")    
// }

// getDataFromServer.then((res) => {
//     let data = res
// })

// const newData = data ? data.map((item) => {
//     return displayExoticComponent(item)
// }).componentError("data ga dapet");


function withoutAsyncAwait() {
    console.log("task 1")
    doTask(2,0)
    .then ((res)=>{
        console.log (res)
    })
    .catch((err)=> {
        console.log ("res dari catch => ", err)
    })
    .finally(()=>{
        console.log("finish")
    })
    console.log ("task 3")
}

withoutAsyncAwait();