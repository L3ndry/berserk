function botao() {
    const a = document.getElementById("CAMPO").value;

    if (a == "") {
        alert("Favor, preencha o campo.")
    } else if (a == "cebola") {
        alert("Opa, sem xingamentos!")
    } else {
        alert("Feedback enviado!")
    }
}

let b = document.getElementById("CAMPO");

b.addEventListener('keyup', (event)=>{

    let sub = event.target.maxLength - event.target.textLength;

    if (sub == 0) {
        document.getElementById("avisoLimite").innerHTML = "Limite atingido.";
    } else {
        document.getElementById("avisoLimite").innerHTML = sub;
    }

},false)