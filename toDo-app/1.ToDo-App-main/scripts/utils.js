/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {

    if(typeof texto === 'string' && texto.length > 3){
        return true
    }else{
        return false
    }
}

function normalizarTexto(texto) {
    
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
//01:04:58 - 01:08:37