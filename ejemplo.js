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
        return "Pasa tranquilo";
    } 
    else if (age > 18){
        return "Pasa acompanado";
    }
    else {
        return "No pasas";
    } 
}
pasaAlbar(16);

// site:https://developer.mozilla.org/ (lo que quiero buscar)


// BUCLES

function encontrarVocalA(string){
    for (var i = 0; i < 'hola'.length; i++){
        if(string[i] === 'a'){
            return 'Encontramos la vocal'
        }
    }
    return 'El string no tiene ninguna letra a'
}


// While se ejecuta tantas veces como se cumpla la condicion
var count = 1;
while(count <= 6){
    console.log('count: ' + count); count++;
}

//Array(arreglos) acumula valores
var frutas = ['manzana', 'frutillas'];
console.log(frutas)

//Metodos de Arrays, .length
var frutas = ['manzana', 'frutillas'];
console.log(frutas.length) //me devuelve la cantidad de frutas osea 2

//.push agrego un elemento a lo ultimo
var frutas = ['manzana', 'frutillas'];
frutas.push('banana');
console.log(frutas)

//.pop elimina el ultimo elemento
var frutas = ['manzana', 'frutillas'];
frutas.pop();
console.log(frutas)

//.unshift agrega un elemento al inicio
var frutas = ['manzana', 'frutillas'];
frutas.unshift('banana');
console.log(frutas)

//.shift elimina el primer elemento
var frutas = ['manzana', 'frutillas'];
frutas.shift();
console.log(frutas)

//for
var comidas = ['Pizza','Hamburguesas', 'Pastas', 'Lasagna'];
for (let i = 0; i < comidas.length; i++){
    console.log(comidas[i]);
}

//for of 
var comidas = ['Pizza','Hamburguesas', 'Pastas', 'Lasagna'];
for(comida of comidas){
    console.log(comida);
}

//.forEach
var autos = ['Ford', 'Chevrolet', 'Toyota', 'Tesla'];

autos.forEach(function(elemento, indice){
    console.log(elemento);
    console.log(indice);
})

//ejemplos
var array = [1, 2, 3, 4];

var resultado = [];
array.forEach(function (elemento) {
    resultado.push(elemento * 2);
});

console.log(array);
console.log(resultado);

//.map
var array = [1, 2, 3, 4];
var resultado = array.map(function(elemento){
    return elemento * 2;
})
console.log(resultado);

//.reduce (se pueden usar numeros o palabras)
var array = [1, 2, 3, 4];
var resultado = array.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
}, 0);
console.log(resultado);


// Objetos
// Son parecidos a los arrays(arreglos). Guarda informacion sobre una sola cosa.
// Se puede asignar cualquier tipo de dato, string, numeros, true false, etc.

//Bucle for ... in (me devuelve todos los datos)
var usuario = {
    nombre: 'Andres',
    contraseña: "hola123",
    edad: 26,
    online: true
}
for(var key in usuario){
    console.log(key);
    console.log(usuario[key]);
}


// This (sirve para especificar donde ir y que dato tomar)
var usuario = {
    nombre: 'Andres',
    contraseña: "hola123",
    edad: 26,
    online: true,
    saludar: function(){
        return('hola, ' + this.nombre);
    }
}
var nombre = 'Toto Profe';

console.log(usuario.saludar());




// Class (clase) es una plantilla para la creacion de objetos de datos, es un modelo generico.

function Gato(nombre){
    // El nuevo operador crea un objeto, 'this'
    this.nombre = nombre;
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!'
    } 
    // Devuelve el objeto 'this'
}

var sam = new Gato('Sam');
var kitty = new Gato('Kitty');
console.log(sam.maullar()); // 'Mi nombre es Sam ... Meow!'
console.log(kitty.maullar()); // 'Mi nombre es Kitty ... Meow!'


// Otro ejemplo

var messi = {
    nombre: 'Lionel',
    apellido: 'Messi',
    saluda: function() {
        console.log('Hola soy Messi');
    },
};
messi.saluda();


