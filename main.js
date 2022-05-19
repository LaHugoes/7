let x1
let x2
let ergebnis = 0
let ergebnis2
let anzahlWuerfe
let oberErgebnis


function wuerfel1() {

    let min =1;
    let max = 6;
    x1 = Math.round(Math.random() * (max - min))+ min;
    x2 = Math.round(Math.random() * (max - min))+ min;
    ergebnis = ergebnis + x1 + x2
    document.getElementById("ergebnisspieler1").innerHTML = ergebnis
}

