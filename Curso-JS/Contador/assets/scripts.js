var currentNumberWrapper = document.getElementById("currentNumber");

var currentNumber = 0;

var buttonIncrement = document.getElementById("increment");

var buttonDecrement = document.getElementById("decrement");

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

let count = 0;

const CURRENT_NUMBER = document.getElementById("currentNumber");

//CURRENT_NUMBER.addEventListener("increment", eventBtn());

//CURRENT_NUMBER.addEventListener("decrement", eventBtn());

const TXT = document.getElementById('text');

function increment() {
	if(count < 10 || count < -10){	
        count++;
        CURRENT_NUMBER.innerHTML = count;
    }
    else if(count >= 0){
        CURRENT_NUMBER.style.color = "blue";
    }
        CURRENT_NUMBER.addEventListener("increment", eventbnt());
}
	
function decrement() {
    if(count  <= 10 && count > -10){	
        count--;
        CURRENT_NUMBER.innerHTML = count;
    }
    else if(count < 0){
        CURRENT_NUMBER.style.color = "red";
    }
        CURRENT_NUMBER.addEventListener("decrement", eventbnt());
}

function eventbnt(){
    if(count == 10){
        TXT.innerHTML = "Valor Máximo!"
    }
    else if(count == -10){
        TXT.innerHTML = "Valor Mínimo!"
    }
    else
    TXT.innerHTML = ""
}

