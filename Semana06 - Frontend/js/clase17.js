const URL_BASE = 'https://jsonplaceholder.typicode.com'

function consultarApi(endpoint){
    fetch(`${URL_BASE}/${endpoint}`) // por defecto es GET
    .then(respueta => {
        return respueta.json()
    })
    .then(datos => {
        console.log(datos);
    })
}


function renderizarElementos(listadp){
    // hacerlo usando .map() o forEach, forOf, for

}



const boton = document.querySelector('button');
boton.addEventListener('click', function() {
    consultarApi('comments');
} )

/*  Mejoras de código 
En este caso no debemos desarrollar una nueva funcionalidad necesariamente. Aunque
siempre que lo creas necesario va a estar bien modularizar en funciones el código.
Queda a criterio del grupo generar o no nuevas funciones.
En este caso deberan cumplir con nuevos requerimientos que necesita la aplicación.

    1- En el caso de la consulta a la API, si la misma no es satisfactoria, deberá arrojar
        un error que se le muestre al usuario.
    2- Para lograr ver el error podemos forzarlo modificando el endpoint incorrectamente,
        para detectar y arrojar el error deben implementar el bloque try().catch()
    3- Si los comentarios llegan y se cargan correctamente, el botón de "Ver comentarios"
        debe desaparecer de la interfaz. Así evitamos que se vuelva a llamar a la API.
    4- Solo deben cargarse los primeros 10 comentarios que nos llegan. */