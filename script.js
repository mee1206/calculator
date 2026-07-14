let display = document.getElementById("display");

function append(value){

    display.value += value;

}

function clearDisplay(){

    display.value="";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}

// Keyboard Support

document.addEventListener("keydown",function(event){

    let key = event.key;

    let allowed = "0123456789+-*/.%";

    if(allowed.includes(key))
    {
        append(key);
    }

    else if(key==="Enter")
    {
        calculate();
    }

    else if(key==="Backspace")
    {
        deleteLast();
    }

    else if(key==="Escape")
    {
        clearDisplay();
    }

});