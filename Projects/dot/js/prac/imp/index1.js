const val = document.querySelector('#example');

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener("click" , function (decrement) { 
    let value = parseInt(val.innerText);
    value--;
    val.innerText = value;
}
);

const incrementButton = document.getElementById('increment');
incrementButton.addEventListener("click" , function (increment) { 
    let value = parseInt(val.innerText);
    value++;
    val.innerText = value;
}
);

const resetButton = document.getElementById('reset');
resetButton.addEventListener("click" , function (reset) { 
    let value = parseInt(val.innerText);
    if (value != 0) {
        value = 0;
        val.innerText = value;
        resetButton
    }else{
        resetButton.style.backgroundColor = "red";
        resetButton.style.color = " yellow";

        setTimeout(() => {
            resetButton.style.backgroundColor = "";
        }, 1000);
        setTimeout(() => {
            resetButton.style.color = "";
        }, 1000);

    }
}
);

