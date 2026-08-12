document.body.firstElementChild.style.backgroundColor = "lightblue";
document.body.firstElementChild.firstElementChild.style.backgroundColor = "yellow";
document.body.firstElementChild.lastElementChild.style.backgroundColor = "green";
document.body.firstElementChild.children[2].style.backgroundColor = "red";
document.body.firstElementChild.children[3].innerText = "i am box 4";

// document.body.firstElementChild.children - > it gives the HTML collection of all the children elements

/*children returns an HTMLCollection
 An HTMLCollection is like an array of elements
 Arrays/collections don’t have a style or color property*/

console.log(document.body.firstElementChild.children); // this will run in console and give HTML collection of all the children elements
