// HERE WE LEARN SOME BASICS OF JAVASCRIPT
console.log("javascript");

// variables
// var
var a = 5;

var b = 6;
var c = a + b;
c += 9;
console.log(c);

name = "ishand";
console.log(name);



//const
const a1 = 15;
// a1 += 5;     this is not allowed because a1 is const.
console.log(a1);




// let
{
    let a = 10;
    
    console.log(a);
}
console.log(a);




// primitive data type
let x = "js";
let y = 7;
let m = 7.7;
let n = true;
let p = undefined;
let q = null;     // type of null will be object , learn more about this on chatgpt or internet.

console.log(x , y , m, n, p, q);
console.log(typeof x , typeof y , typeof m, typeof n, typeof p, typeof q);



// object :- object is a collection of related data and functions stored as key–value pairs.

let i = {
    "name" : "ishand rai" ,
    "id" : 2301010044,
    "salary" : 50000,
}
console.log(i);
i.salary = 100000;  // we can also update like this.
i.adaar = 8758379;  // can also add new property

// delete i.salary;      // can delete any property using delete keyword
console.log(i);