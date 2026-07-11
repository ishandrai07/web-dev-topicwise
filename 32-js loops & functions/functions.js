console.log("functions");

function wish(name){
    console.log( "good morning " + name);
}
wish("ishand");


// function sum(a , b){
//     console.log(a + b);
// }
// sum(5,7);



// optional 
function sum(a , b , c = 5){
    return a + b + c;
}

result1 = sum(5,5);
result2 = sum(5,5,2);
console.log(result1);
console.log(result2);

// Arrow function

const func1 = (x)=>{
    console.log("arrow function");
}
func1("4");
