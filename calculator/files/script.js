function digit(value) {
    if (value === "1" || value === "3" || value === "2" || value === "4" || value === "5" || 
    value === "6" || value === "7" || value === "8" || value === "9" || value === "0" || value === "+" 
    || value === "-" || value === "/" || value === "*") {
        document.getElementById("result").value += value
    } else if (value === "x") {
        document.getElementById("result").value += "*"

    }
}

function equals() {
        let x = document.getElementById("result").value
        console.log(x);
        resolve();
    }

function addFloat(){
    document.getElementById("result").value += "."
}

function resolve() {
    let valorDisplay = document.getElementById("result").value
    let calculo = eval(valorDisplay)
    document.getElementById("result").value = calculo
}

function clearAll() {
    document.getElementById("result").value = ""
}

document.addEventListener('keydown', function (event) {
    const key = event.key
    console.log(key);
    if(key === "Enter") {
        equals()
    } else if (key === "Backspace") {
        clearAll()
    } else  
    digit(key)
})
