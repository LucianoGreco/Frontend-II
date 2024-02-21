/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    if(typeof texto === 'string' && texto.length > 3){
        return true
    }else{
        return false
    }
}

function normalizarTexto(texto) {
    
    // Convertir todo a minúsculas
    let minuscula = texto.toLowerCase();
    // // Eliminar caracteres especiales y puntuación
    let replace = minuscula.replace(/[^\w\s]/g, '');

    // // Eliminar espacios adicionales
    let trim = replace.replace(/\s+/g, ' ').trim();
    
    return trim;
}


/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    let patronDeBusqueda = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return patronDeBusqueda.test(email);
}

function normalizarEmail(email) {
    
}


/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    return contrasenia.length > 3;
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    if(contrasenia_1 === contrasenia_2){
        return true
    }else{
        return false
    }
}


function mostrarMensajeError(mensaje){

}

function mostrarMensaje(){

}


function bloqueadorCaracter(elemento, caracteres){
    elemento.addEventListener('keypress', (e) => {        
        // keypress: captura el caracter que se presiona
        if(caracteres.includes(e.key)){
            // Prevenimos la continuacion del evento y no se escribe la tecla oprimida
            e.preventDefault();
        }
    })
}

//01:04:58 - 01:08:37