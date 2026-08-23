/*

function sum(a,b){
    console.log(a+b);
}

function calculator(a, b ,sumcallback){
    sumcallback(a,b);
}

calculator(5 , 2, sum);

*/


// CALLBACK HELL
function getData(dataId , getNextData){
    setTimeout(() => {
        console.log("data" , dataId);
        if(getNextData){
            getNextData();
        }
    }, 1000);
}

getData(1 , () => {
    getData(2 , () => {
        getData(3);
    });
})


