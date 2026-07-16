console.log("array-2")

let arr = [5,8,3,2]
// for(let indx = 0; indx < arr.length; indx++){
//     const element = arr[indx];
//     console.log(element);
// }

// for each loop:-

// arr.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })


// for of :-
// for(const val of arr){
//     console.log(val);
// }

// map:-
// let arr2 = [5,7,3,6,2];

// let newarr = arr2.map((x)=>{
//     return x**2;
// })
// console.log(newarr);

// FILTER:-
// const greaterthanFour = (x)=>{
//     if(x>4){
//         return true
//     }
//     return false
// }
// console.log(arr.filter(graterthanFour))

// REDUCE:-
/*

let arr3 = [1,2,3,4,5,6];

const fact = (a,b)=>{
    return a*b;
}
console.log(arr3.reduce(fact));

*/

//array from (it coverts string into an array)
let n_name = "ishand";
console.log(Array.from(n_name));
