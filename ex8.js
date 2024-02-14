function verificar() {
    let n1 = Number(document.getElementById('n1').value);

    if (n1 % 2 === 0) {
        console.log("Par!");
    } else {
        console.log("Impar!");
    }
}