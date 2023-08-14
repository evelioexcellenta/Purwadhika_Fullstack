// function doTask (task,time){
//     return new Promise ((resolve, reject) => {
//         let isError = false
//         console.log("doing "+ task + " ... ")
//         setTimeout(() => {
//             if (isError){
//                 reject ("task "+ task +" error ")
//             }else { 
//                 resolve ("task "+ task +" success ")
//             }
//         }, time*1000);
       
        
//     })
// }

// function withoutAsyncAwait() {
//     console.log("task 1")
//     doTask(2,0)
//     .then ((res)=>{
//         console.log (res)
//     })
//     .catch((err)=> {
//         console.log ("res dari catch => ", err)
//     })
//     .finally(()=>{
//         console.log("finish")
//     })
//     console.log ("task 3")
// }

// withoutAsyncAwait();


function doTask (task,time){
    return new Promise ((resolve, reject) => {
        let isError = false
        if (task == 3){
            isError = true;
        }
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

async function withAsyncAwait() {  //async await mensinkronuskan proses asinkronus
    try {
        console.log("task 1")
        await doTask(2,3)
        await doTask(3,4)
        await doTask(4,4)
        console.log("task 3")
    } catch(err){
        console.log(err)
    }    
}

// withAsyncAwait();

//throw
function tryThrow (){
    let isFalse = true
    try {
        console.log("task 1 processing ...")
        if (isFalse){
            throw "terjadi error"
        }
        console.log("task 2 processing ...")
    }catch (err){
        console.log(err)
    }
}

// tryThrow()
//klo ga pke try catch error
// function tryThrow2 (){
//     let isFalse = true
   
//         console.log("task 1 processing ...")
//         if (isFalse){
//             throw new Error ("terjadi error")
//         }
//         console.log("task 2 processing ...")
    
// }

// tryThrow2()

//pertanyaan galih
// async function coba(){
//     try {
//         await doTask(3,2).catch((err)=>{
//             console.log("kesini?")
//         })
//     } catch (error){
//         console.log ("dari catch try =>", error)
//     }
// }

// coba()