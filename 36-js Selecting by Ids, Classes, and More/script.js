// using Class
let boxes = document.getElementsByClassName("box");
boxes[3].style.backgroundColor = "red";

// using Id
document.getElementById("yellow-box").style.backgroundColor = "yellow";

//using querySelector

// i.) this will select first element of class box
document.querySelector(".box").style.backgroundColor = "blue";

// ii.) this will select all but we cannot directly apply style ,  we have to use loops 
document.querySelectorAll(".box").forEach((x)=>{
    x.style.backgroundColor = "aqua";
})


// using Tagname

/*let divs = document.getElementsByTagName("div");

for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundColor = "red";
}*/