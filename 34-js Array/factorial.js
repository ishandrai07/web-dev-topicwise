console.log("Factorial using Function and Reduce");
//using function

// let a = Number(prompt("enter number : "));

// function fact(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result *= i;
//     }
//     console.log(result);
// }
// fact(a);

// Reduce

let b = 5;

function factreduce(num){
    let arr = Array.from(Array(num+1).keys())
    let c = arr.slice(1).reduce((a , b)=>a*b)
    return c;
}
console.log(factreduce(b));

                          