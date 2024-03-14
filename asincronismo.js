async function obtenerPersonaje(){
    var ids =[1,2,3,4,5,6,7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
    } catch (error) {
        
    }
}