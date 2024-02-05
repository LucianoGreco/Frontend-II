
function mostrarValidaciones(listaErrores){ // Ingresa el listado de errores

    const contenedorErrores = document.querySelector('.errores');
    contenedorErrores.innerHTML = ''; // Limpiamos el contenedor

    
    listaErrores.forEach((error, i) => {

        /* Opcion 1 
        if(i % 2 == 0){
            contenedorErrores.innerHTML += `<li class="red">${error}</li>`; // error rojo, error azul,....
        }else{
            contenedorErrores.innerHTML += `<li class="blue">${error}</li> `; 
        } */

        
        // Opcion 2.a - Operador Ternario
        let clase = i % 2 == 0 ? 'red' : 'blue';
        contenedorErrores.innerHTML += `<li class="${clase}"> ${error}</li>`; 

        /* Opcion 2.b 
        contenedorErrores.innerHTML += `
        <li class="${i % 2 == 0 ? 'red' : 'blue'} borderContainer">
            <strong>
                ${i+1}. ${error.toUpperCase()}
            </strong>
        </li>        
    `; */
    }); 
}

/*  📚 [5] FUNCION: Formulario completado con éxito ✅

Esta funcion se va a encargar de mostrar que el formulario se completó correctamente.
Para eso debera cumplir con los siguientes requerimientos.

    1 - Recibe el listado de errores, y solo si no hay ninguno debe:
    2 - mostrar al final del formulario un caja con la misma estructura que 
        la caja de errores, pero con la tonalidad verde
    3 - dentro la caja debe mostrar un párrafo con el mensaje: "¡Formulario completado con éxito!"
    4 - a su vez se debe deshabilitar el boton del formulario
    5 - finalmente pasados 4 segundos: se debe eliminar esa caja, habilitar el boton y limpiar el formulario */


function mostrarMensajeExito(ListaErrores) {

    const contenedorFinal = document.querySelector('.mensajeFinal');
    contenedorFinal.innerHTML = ''; // Limpiamos el contenedor

    const boton = document.querySelector('button')

    if (ListaErrores.length === 0) {

        contenedorFinal.innerHTML += `<p class="green">¡Formulario completado con éxito!</p>`;       
         

        boton.disabled = true; // Le agrega tranparencia
        // boton.style.display = 'none';// oculta el boton

        setTimeout(() => {

            boton.disabled = false; // Le quita la transparencia
            // boton.style.display = 'block'; // Muestra el boton

            formulario.reset(); // resetea el formulario

            contenedorFinal.innerHTML = ''; // Limpiamos el contenedor
        }, 4000); 
    }
}
