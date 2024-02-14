function somar(n1, n2) {
    return n1 + n2;
}

function somarnum() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let soma = somar(n1, n2);

    console.log(`A soma é: ${soma}`);
}