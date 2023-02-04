var primeraPalabra = "Hola";
var segundaPalabra = "Mundo!";
var resultado = primeraPalabra + " " + segundaPalabra;

console.log(resultado);


function sumarDosNumeros(a, b) {
    var suma = a + b;
    return suma;
}
sumarDosNumeros(2, 6);


if (condicion) {
      //si la condicion es verdadera se ejecuta eso
} else if (condicion2) {
     //si la condicion anterior es falsa se ejecuta esta
} else {
    //si ninguna de las condiciones se cumplen, se ejecuta esto
}

function pasaAlbar(age){
    if(age > 21) {
        return "Pasa tranquilo"
    } 
    else if (age > 18){
        return "Pasa acompanado"
    }
    else {
        return "No pasas"
    } 
}
pasaAlbar(12)
