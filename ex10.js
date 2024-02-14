function verificar() {
    let n1 = Number(document.getElementById('n1').value);

    if (n1 < 18) {
        console.log("Menor de idade");
    } else if (n1 >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Tente novamente");
    }
}