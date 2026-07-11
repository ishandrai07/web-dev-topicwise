console.log("faulty calculator");

let random = Math.random();
let a = Number(prompt("enter your number 1 : "));
let op = prompt("oprator");
let b = Number(prompt("enter your number 2 : "));

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "*",
}

if (random  <= 0.1){
   
    op = obj[op];
}

let result;
if(op === "+"){
    result = a + b;
}
else if(op === "-"){
    result = a - b;
}
else if(op === "*"){
    result = a - b;
}
else if(op === "/"){
    result = a - b;
}
else {
    alert("Invalid operator");
}
alert(`The result is ${result}`);
