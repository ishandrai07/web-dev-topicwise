// IIFE (Immediately Invoked Function Expression)

// (function(){
//     console.log("I am IIFE");
// })();                             // always end with () to invoke the function immediately

// IIFE with parameters
// (function(name){
//     console.log("I am " + name);
// })("IIFE with parameters");

// IIFE with return value
// let result = (function(a,b){
//     return a + b;
// })(5,10);

// destructuring 

let [x,y] = [1,2];
console.log(x, y);

let [a , b , ...rest] = [5,6,7,8,9];
console.log(a ,b , rest);