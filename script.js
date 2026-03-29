let count = 0;

const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', () => {
    count++;
    counter.innerText = count;
});

decreaseBtn.addEventListener('click', () => {
    count--;
    counter.innerText = count;
});