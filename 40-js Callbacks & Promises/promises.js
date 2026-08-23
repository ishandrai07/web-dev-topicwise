//********************** Promises **********************

// let promise = new Promise((resolve , reject) => {
//     console.log("i am a promise");
//     resolve("succesfull"); 
// });


//********************** .then & .catch **********************

// const getPromise = () =>{
//     return new Promise((resolve , reject) => {
//         console.log("i am promise");
//         resolve("succesfull");
//         // reject("network error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fullfilled",res  )
// });

// promise.catch((err) => {
//     console.log("rejected" , err)
// })


//********************** promise chaining **********************

// function asyncfunc1(){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             console.log("data 1")
//             resolve("success")
//         }, 4000);
        
//     })
// }

// function asyncfunc2(){
//     return new Promise((resolve , reject) =>{
//         setTimeout(() => {
//             console.log("data 2")
//             resolve("success")
//         }, 4000);
        
//     })
// }

// let p1 = asyncfunc1()
// p1.then((res) => { 
//     console.log(res);
//     let p2 = asyncfunc2();
//     p2.then((res)=>{
//         console.log(res);
//     })
// })



//********************** async & await **********************

function getData(dataid){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : " , dataid);
            resolve("success");
        }, 2000);
    })
}

async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);

}