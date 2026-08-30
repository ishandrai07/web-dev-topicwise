const BASE_URL = "https://v6.exchangerate-api.com/v6";
const API_KEY = "f61b14fe7e1f97dbcda01fd5";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;


        if (select.name === "From" && currCode === "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "To" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input")
    let amtval = amount.value;
    if (amtval === "" || amtval === "0" || amtval < 0) {
        alert("Please enter a valid amount");
        return;
    }

    // Get selected currencies
    let fromCurr = document.querySelector("select[name='From']").value;
    let toCurr = document.querySelector("select[name='To']").value;

    // Build API URL
    const URL = `${BASE_URL}/${API_KEY}/latest/${fromCurr}`;

    try {
        // Fetch exchange rate
        const response = await fetch(URL);
        const data = await response.json();
        
        let rate = data.conversion_rates[toCurr];
        let convertedAmount = (amtval * rate).toFixed(2);
        alert(`${amtval} ${fromCurr} = ${convertedAmount} ${toCurr}`);
    } catch (error) {
        alert("Error fetching exchange rate. Please try again.");
        console.error(error);
    }
})