const val = document.querySelector('#example');


function increment(){

    let value = parseInt(val.innerText);

    value++;
    val.innerText = value;

}

function decrement(){
    let value = parseInt(val.innerText);

    value--;

    val.innerText = value;
}
