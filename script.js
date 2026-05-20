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

//reset function
function resetform() {
    // confirmation before resetting
    let confirmReset = confirm("do you want to clear the counter?");

    if (confirmReset) {
        document.getElementById("myform").reset(); alert("form has cleared");
    }
}

function reset() {
    document.getElementById("name").value = "";
}