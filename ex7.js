function saudacao() {
    let hr = Number(document.getElementById('hr').value);

    if (hr > 0 && hr <= 12) {
        console.log("Bom dia!");
    } else if (hr > 12 && hr <= 18) {
        console.log("Boa tarde!");
    } else if (hr > 18 && hr <= 23) {
        console.log("Boa Noite!");
    } else {
        console.log("Ué?");
    }
}