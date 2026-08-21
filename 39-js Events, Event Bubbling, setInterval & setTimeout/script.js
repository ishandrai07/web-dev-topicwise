let button = document.getElementById("btn");

button.addEventListener("click" , ()=>{
    document.getElementsByClassName("box")[0].innerText = "i got clicked";
})


button.addEventListener("dblclick" , ()=>{
    document.getElementsByClassName("box")[0].innerHTML = "i got double clicked";
})