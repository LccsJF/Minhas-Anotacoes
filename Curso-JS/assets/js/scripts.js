var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

if (('increment() > 0')) {
    increment = true;
} else if (('increment() < 10')) {
    increment = false
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}