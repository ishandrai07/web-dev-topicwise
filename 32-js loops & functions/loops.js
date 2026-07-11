console.log("Loops");

// for loop
for(let i = 1; i <= 10; i++){
    console.log(i);
}

// for in loop 

let obj = {
    "name":"ishand",
    "age":"21",
    "company":"Microsoft"
}

for (const key in obj) {
   
    const element = obj[key];
    
    console.log(key, element);
}

// for of

for(const c of "ishand"){
    console.log(c);
}


// while loop
// let i = 5;
// while(i < 6){
//     console.log(i);
//     i++;
// }

// do while :- it runs atleast one time
let i= 10;
do {
    console.log(i);
} while ( i < 6);