

function enviar() {
    var n1 = document.getElementById('primeiro-input');
    var n2 = document.getElementById('segundo-input');
    var n3 = document.getElementById('terceiro-input');
    var inicial = Number(n1.value);
    var final = Number(n2.value);
    var passando = Number(n3.value);
    var res = document.getElementById('resposta');
    alert(`${inicial} e ${final} e ${passando}`);
    res.innerHTML = `👉🏻 ${inicial}`;
    while (inicial < final ) {
        inicial = inicial + passando
        res.innerHTML = `👉🏻 ${inicial}`;
    }
    
}
