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

// otro ejemplo, Funcion constructora

var Persona = function(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saluda = function() {
        console.log('Hola soy ' + this.nombre + ' ' + this.apellido);
    };
};

var bart = new Persona('Bart', 'Simpson');
var messi = new Persona('Lionel', 'Messi');
console.log(bart);
console.log(messi);
bart.saluda();
messi.saluda();


// Prototype

function Usuario(nombre, email) {
    this.nombre = nombre;
    this.email = email;
   }
   Usuario.prototype.presentacion = function(){
    return 'Mi nombre es ' + this.nombre + ', mi email es ' + this.email + '.';
   }
   let juan = new Usuario('Juan', 'juanperez@mail.com');
   let antonio = new Usuario('Antonio', 'anton@mail.com');
   console.log(juan.presentacion()); // Mi nombre es Juan, mi email es juanperez@mail.com.
   console.log(antonio.presentacion()); // Mi nombre es Antonio, mi email es anton@mail.com.


// ejemplo
var homero = {
    nombre: 'Homero',
    apellido: 'Simpson',
};
homero.__proto__ == messi; //el proto es para darle permisos de 'admin' para cambiar lo que contiene
console.log(homero);
homero.saluda();

// homero -> messi -> persona -> object -> etc (va buscando una cadena hasta buscar el metodo saluda)



// Object.create - El método create de los objetos nos permite crear un nuevo objeto apartir de un prototype especifico.
// creamos un objecto con un objeto vacio como proto
var obj = Object.create({});
console.log(obj); // Object {}
// creamos un objeto a partir de un proto de Objeto
var obj = Object.create(Object.prototype);
// que es lo mismo que crear un objeto vacio literal
var obj = {};



// Object.assign - Nos permite agregar propiedades a un objeto pasado por parámetro
var obj = {}
// No es necesario guardar el resultado porque los objetos 
Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})
obj.nombre // 'Emi'


// Herencia clasica - otra forma de escribir lo mismo
function Persona(nombre, apellido, ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
   }
   Persona.prototype.saludar = function() {
    console.log('Soy '+ this.nombre +' de '+ this.ciudad);
   }
   var Emi = new Persona('Emi', 'Chequer', 'Buenos Aires');
   Emi.saludar(); // 'Soy Emi de Buenos Aires'


   function Alumno(nombre, apellido, ciudad, curso) {
    // podríamos copiar las mismas propiedades de Persona acá adentro
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
    this.curso = curso
   }



   // CALLBACKS
   // Son funciones que reciben como argumento otra función y pueden
   //llamarse dentro de la primera. Se denotan por las letras cb.

   function decirHolaAlUsuario(usuario) {
    return "Hola " + usuario + "!";
   }
   function decirAdiosAlUsuario(usuario) {
    return "Adiós " + usuario + "!";
   }
   function crearSaludo(usuario, cb) {
    return cb(usuario);
   }
   crearSaludo("Dan", decirHolaAlUsuario); // 'Hello Dan!'
   crearSaludo("Dan", decirAdiosAlUsuario); // 'Goodbye Dan!'
