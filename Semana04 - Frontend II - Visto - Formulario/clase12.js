function mostrarValidaciones(errores){

    const contenedorErrores = document.querySelector('.errores');
    contenedorErrores.innerHTML = ''; // Limpiamos el contenedor

    errores.forEach((error, i) => {

        // Opcion 1
        /*
        if(i % 2 == 0){
            contenedorErrores.innerHTML += `
            <li class="red">
                ${error}
            </li>        
            `;
        }
        else{
            contenedorErrores.innerHTML += `
            <li class="blue">
                ${error}
            </li>        
            `;
        } */


        // Opcion 2.a 
        // let clase = i % 2 == 0 ? 'red' : 'blue';
        // contenedorErrores.innerHTML += `
        //     <li class="${clase}">
        //         ${error}
        //     </li>        
        // `;
        // Opcion 2.b
        contenedorErrores.innerHTML += `
        <li class="${i % 2 == 0 ? 'red' : 'blue'} borderContainer">
            <strong>
                ${i+1}. ${error.toUpperCase()}
            </strong>
        </li>        
    `;
    });
}

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */ /*
Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
Para eso debera cumplir con los siguientes requerimientos.

    1 - Recibe el listado de errores, y solo si no hay ninguno debe:
    2 - mostrar al final del formulario un caja con la misma estructura que 
        la caja de errores, pero con la tonalidad verde
    3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
    4 - a su vez se debe deshabilitar el boton del formulario
    5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario */

function mostrarMensajeExito(errores) {
    //   desarrollar la funcion aqui

    const contenedorFinal = document.querySelector('.mensajeFinal');
    contenedorFinal.innerHTML = ''; // Limpiamos el contenedor

    const boton = document.querySelector('button') 

    if (errores.length === 0) {
        contenedorFinal.innerHTML += `<p class="green">¡Formulario completado con éxito!</p>`;

        // boton.disabled = true
        // Ocultar el botón en lugar de eliminarlo
        boton.style.display = 'none';

        setTimeout(() => {
            // boton.disabled = false;
            boton.style.display = 'block';
            formulario.reset();
            contenedorFinal.innerHTML = '';
            
        }, 4000); 

    }
}