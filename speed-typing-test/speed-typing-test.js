let timerEl = document.getElementById("timer");
let quoteEl = document.getElementById("quoteDisplay");
let loadingEl = document.getElementById("spinner");
let counter = 0;
let counterTimer = function() {
    counter = counter + 1;
    timerEl.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

function randomQuote() {
    let url = "https://apis.ccbp.in/random-quote";
    let options = {
        method: "GET"
    };
    loadingEl.classList.remove('d-none');
    quoteEl.classList.add('d-none');
    fetch(url, options).then(function(response) {
        return response.json();
    }).then(function(jsonData) {
        loadingEl.classList.add('d-none');
        quoteEl.classList.remove('d-none');
        let quotes = jsonData.content;
        quoteEl.textContent = quotes;
    });
}
randomQuote();
let textInputEl = document.getElementById("quoteInput");
let resultEl = document.getElementById("result");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");

function submitValidation() {
    if (textInputEl.value === quoteEl.textContent) {
        resultEl.textContent = "You typed in " + timerEl.textContent + " seconds";
        clearInterval(intervalId);
    } else {
        resultEl.textContent = "You typed incorrect sentence";
    }
}

submitBtnEl.addEventListener('click', submitValidation);

function resetButtonFun() {
    counter = 0;
    setInterval(counterTimer, 1000);
    randomQuote();
    resultEl.textContent = "";
    textInputEl.value = "";
}
resetBtnEl.addEventListener('click', resetButtonFun);