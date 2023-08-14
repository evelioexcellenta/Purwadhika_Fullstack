console.log ("task 1")
console.log ("task 2")
console.log ("task 3")

//asynchronous
// setTimeout(function (){ 
//     console.log("task 1 Done")
// }, 3000)

// setTimeout(function (){ 
//     console.log("task 2 Done")
// }, 4000)

// setTimeout(function (){ 
//     console.log("task 3 Done")
// }, 2000)


//synchronous
// setTimeout(() => {
//     console.log("task 1 Done")
//     return setTimeout(() => {
//         console.log("Task 2 Done")
//         return setTimeout(() => {
//             console.log ("Task 3 Done")
//         }, 2000);
//     }, 4000);
// }, 3000);

//synchronous loop for
// for (let i=1 ; i<=3; i++){
//     setTimeout(() => {
//         console.log(`Task ${i} done`)
//     }, i* 1000);
// }




