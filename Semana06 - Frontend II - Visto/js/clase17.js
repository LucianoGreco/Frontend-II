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



const URL_BASE = 'https://jsonplaceholder.typicode.com';

function consultarApi(endpoint, renderizarElementosCallback, ocultarBoton) {
    
    fetch(`${URL_BASE}/${endpoint}`)
        .then(respuesta => {
            if (!respuesta.ok) {
                console.log(`Error al consultar la API: ${respuesta.status}`);
            }
            
            return respuesta.json();
        })
        .then(json => {
            renderizarElementosCallback(json);
            ocultarBoton()
        })
        .catch(error => { 
            err = 'error al consumir la api'
            const contenedorComentarios = document.querySelector('.comentario');
            contenedorComentarios.innerHTML = `<p>Error: ${error.message}</p>`;
        });
}

function renderizarElementos(listado) {

// OPCION map() ------------------

/*  const comentariosHTML = listado.map(comentario => `
        <div class="comentario">
            <h4>${comentario.email}</h4>
            <p>${comentario.body}</p>
        </div>
    `); */


    const comentariosHTML = [];


// OPCION for() ------------------

/*  for (let i = 0; i < 10; i++) {
        comentariosHTML.push(`
            <div class="comentario">
                <h4>${listado[i].email}</h4>
                <p>${listado[i].body}</p>
            </div>
        `);
    }; */


// OPCION for of ------------------

/*  let contador = 0;
    for (const comentario of listado) {
        if (contador >= 10) {
            break; // Salir del bucle después de 10 comentarios
        }

        comentariosHTML.push(`
            <div class="comentario">
                <h4>${comentario.email}</h4>
                <p>${comentario.body}</p>
            </div>
        `);

        contador++;
    }; */


// OPCION for each ------------------

    let contador = 0;
    listado.forEach(comentario => {
        if (contador >= 10) {
            return; // Salir del bucle después de 10 comentarios
        }
        comentariosHTML.push(`
            <div class="comentario">
                <h4>${comentario.email}</h4>
                <p>${comentario.body}</p>
            </div>
        `);

        contador++; 
    });


    const contenidoHTML = comentariosHTML.join('');
    const contenedorComentarios = document.querySelector('.comentario');
    contenedorComentarios.innerHTML = contenidoHTML;
}

function ocultarBoton() {
    const boton = document.querySelector('button');
    boton.style.display = 'none';
}

const boton = document.querySelector('button');
boton.addEventListener('click', function () {
    consultarApi('commentsi', renderizarElementos, ocultarBoton);
});