const URL = "https://sv443.net/jokeapi/v2/joke/Any";
const jokePara = document.getElementById("joke");

const getJokes = async () =>{

    try{
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    
    if(data.type === "single"){
        jokePara.innerText = data.joke;
    }
    else if(data.type === "twopart"){
        jokePara.innerText = data.setup;
    }
   
    }
    catch(error){
        jokePara.innerText = "failed to load jokes";
        console.error(error);

    }
};