const URL_BASE = 'https://jsonplaceholder.typicode.co'

function consultarApi(endpoint){
    fetch(`${URL_BASE}/${endpoint}`) // por defecto es GET
        .then(respuesta => {
            
            return respuesta.json()
        })
        .then(datos => {
            console.log(datos);
        })
        .catch(error => console.log(error)
        )
}


function renderizarElementos(listado){
    // hacerlo usando .map() o forEach, forOf, for
        const comentariosHTML = listado.map(comentario => `
        <div class="comentario">
            <h4>${comentario[0].email}</h4>
            <p>${comentario[0].body}</p>
        </div>
    `);

    // Unir los elementos HTML en una cadena
    const contenidoHTML = comentariosHTML.join('');

    // Insertar el contenido en el contenedor deseado
    const contenedorComentarios = document.querySelector('.comentario');
    contenedorComentarios.innerHTML = contenidoHTML;

}



const boton = document.querySelector('button');
boton.addEventListener('click', function(){
    consultarApi('comments')
        .then(renderizarElementos)
        // .catch(error => {
        //     // console.log(error);
        // })
    })



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

/*
    const URL_BASE = 'https://jsonplaceholder.typicode.com';

    async function consultarApi(endpoint) {
        try {
            const respuesta = await fetch(`${URL_BASE}/${endpoint}`);
            if (!respuesta.ok) {
                throw new Error('Error al consultar la API');
            }
            return await respuesta.json();
        } catch (error) {
            throw new Error('Error al consultar la API');
        }
}

function renderizarElementos(listado) {
    const comentariosHTML = listado.slice(0, 10).map(comentario => `
        <div class="comentario">
            <h4>${comentario.email}</h4>
            <p>${comentario.body}</p>
        </div>
    `);

    const contenidoHTML = comentariosHTML.join('');
    const contenedorComentarios = document.querySelector('.comentario');
    contenedorComentarios.innerHTML = contenidoHTML;

    // Ocultar el botón después de cargar los comentarios
    const boton = document.querySelector('button');
    boton.style.display = 'none';
}

const boton = document.querySelector('button');
boton.addEventListener('click', function () {
    consultarApi('comments')
        .then(renderizarElementos)
        .catch(error => {
            const contenedorComentarios = document.querySelector('.comentario');
            contenedorComentarios.innerHTML = `<p>${error.message}</p>`;
        });
});
*/