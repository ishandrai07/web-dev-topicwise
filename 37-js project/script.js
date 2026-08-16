let boxes = document.querySelector(".container").children;

function randomColor(){
    let first = Math.ceil(0 + Math.random() * 255);
    let second = Math.ceil(0 + Math.random() * 255);
    let third = Math.ceil(0 + Math.random() * 255);

    return `rgb(${first} , ${second} , ${third})`
}

Array.from(boxes).forEach((e => {
    e.style.backgroundColor = randomColor();
    e.style.color = randomColor();
}))