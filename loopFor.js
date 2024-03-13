var mynor = {
    nombre: 'Mynor',
    apellido: 'Colop',
    edad:24,
    peso:75
}

console.log(`Al inicio del año ${mynor.nombre} pesa ${mynor.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = ()=> Math.random() < 0.4
const realizaDeporte = ()=> Math.random() < 0.4

const META = mynor.peso -3
var dias = 0

/* for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDePeso(mynor)
    } else if (random < 0.5) {
        adelgazar(mynor)
    }
} */

while (mynor.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(mynor)
    } 
    if(realizaDeporte()) {
        adelgazar(mynor)
    }
    dias++
}


console.log(`pasaron ${dias} hasta que ${mynor.nombre} adelagazó`)


console.log(`Al final del año ${mynor.nombre} pesa ${mynor.peso.toFixed(1)} kg`)