function verificar() {
    let n1 = Number(document.getElementById('n1').value);

    let resultado
    if (n1 > 0) {
        console.log("O número é positivo");
    } else if (n1 < 0) {
        console.log("O número é negativo");
    } else {
        console.log("O número é zero");
    }
}