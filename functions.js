var nombre = 'Mynor';
var nombreMynor='Antonio'
var edad = 24;

/* Arrow functions */
const saludo = (n, e) => {
    return `Hola soy ${n.toUpperCase()}  tengo ${e}`
}


function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase();
    console.log(nombre);
}



/* OBJETOS */

var persona = {
    nombre: 'Mynor',
    apellido: 'Antonio',
    edad: 24,
    imprimirNombreEnMayusculas: function () {
        console.log(this.nombre.toUpperCase());
    }
}


console.log(persona.edad)


imprimirNombreEnMayusculas(nombreMynor);
console.log(saludo(nombre,edad))