//document.getElementsByClassName("box")[0].innerText = "ishand rai"; // not a good practice

document.querySelector(".box").innerText = "ishand rai";  // good

//document.querySelector(".container").innerHTML = "icisdik"; 

document.querySelector(".container").setAttribute("style", "background-color: red");


// Inserting Elements
let div = document.createElement("div")
div.innerHTML = "inserted"
div.setAttribute("class" , "created")
document.querySelector(".container").append(div);


// Removing Elements
/* document.querySelector(".box").remove() */  // removes first .box