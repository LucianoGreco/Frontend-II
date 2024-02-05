const estadoErroresOk = { // Arreglo de boleanos
    email: false,
    password: false,
    rol: false,
    terminos: false
};


const estadoUsuario = {
    email: '',
    password: '',
    rol: '',
    terminos: false
};




// CAPTURAMOS EL EVENTO
const formulario = document.querySelector('form'); // 1.Capturar el formulario
formulario.addEventListener('change', () => { // 2.Agrega un evento al formulario

    // Capturamos los datos 
    const email     = document.querySelector('#email');
    const password  = document.querySelector('#password');
    const rol       = document.querySelector('#rol');
    const terminos  = document.querySelector('#terminos');


    // Validacion de datos correctos - Booleano
    estadoErroresOk.email       = EsValidoEmail      (email.value); // Verifica el email
    estadoErroresOk.password    = EsValidoPassword   (password.value);
    estadoErroresOk.rol         = EsValidoRol        (rol.value);
    estadoErroresOk.terminos    = EsValidoTerminos   (terminos.checked);

    console.log(estadoErroresOk.email );

    // Guardar datos validados -
    estadoUsuario.email         = email; 
    estadoUsuario.password      = password;
    estadoUsuario.rol           = rol;
    estadoUsuario.terminos      = terminos


    mostrarMensajeDeErrores(estadoErroresOk);
    
});


// Validacion
function EsValidoEmail(email){
    /* Expresion Regular 
            let mail = 'texto@texto.texto'; -> Patron de busqueda 
                    'texto  = [a-z0-9]
                    @texto  = @[a-z]
                    .texto' = .[a-z]{2,3} */
    let patronDeBusqueda = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return patronDeBusqueda.test(email);
}

function EsValidoPassword(password){  
     return password.length > 3;
}

function EsValidoRol(rol){
    return rol==='frontend' || rol==='backend';
}

function EsValidoTerminos(terminos){
    return terminos === true;
}



// Opcion 1 - Renderizar errores
function mostrarMensajeDeErrores(estadoErroresOk){
    
    // Error email
    if(estadoErroresOk.email){
        document.querySelector('#emailError').classList.remove('visible'); // Si no hay error
    }else{
        document.querySelector('#emailError').classList.add('visible'); // Si hay error
    }

    // Error password
    if(estadoErroresOk.password){
        document.querySelector('#passwordError').classList.remove('visible');
    }else{
        document.querySelector('#passwordError').classList.add('visible');
    }

    // Error rol
    if(estadoErroresOk.rol){
        document.querySelector('#rolError').classList.remove('visible');
    }else{
        document.querySelector('#rolError').classList.add('visible');
    }

    // Error terminos
    if(estadoErroresOk.terminos){
        document.querySelector('#terminosError').classList.remove('visible');
    }else{
        document.querySelector('#terminosError').classList.add('visible');
    }
}



// Opcion 2 - Renderizar errores 
/*
function mostrarMensajeDeErrores2(estadoErroresOk) {

    const errores = ['email', 'password', 'rol', 'terminos'];

    errores.forEach(error => {
        const elementoError = document.querySelector(`#${error}Error`); // id="emailError"

        if (estadoErroresOk[error]) {
            elementoError.classList.remove('visible');
        } else {
            elementoError.classList.add('visible');
        }
    });
}
*/



// Bloqueamos caracteres no validos

email.addEventListener('keypress', (e) => {

    //const caractersInvalidosA = [',','!','#'];
    const caractersInvalidosB = ',!#';

    // keypress: captura el caracter que se presiona
    if(caractersInvalidosB.includes(e.key)){
        // Prevenimos la continuacion del evento y no se escribe la tecla oprimida
        e.preventDefault();
    }
})



/*  📚 [5] FUNCION: Formulario completado con éxito ✅

Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
Para eso debera cumplir con los siguientes requerimientos.
    
    1 - Deshabilitar el boton del formulario miestra se complete el total del formulario.
    2 - Una vez completado el formulario al dar click en el boton Esperar 3 segundos para redireccionar a la página de 'usuario.html'
    3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
    4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el 
        botón de "Atrás"(la flechita del navegador) el usuario vuelva a index. */



function navegarPaginaExito() {

    
    const boton = document.querySelector('button');
    const formulario = document.querySelector('form');

    // Deshabilitar el botón al inicio si los campos están vacíos
    boton.disabled = true;

    if(){
        
    }




    // Deshabilitar el botón mientras se completa el formulario
    formulario.addEventListener('input', () => {
        boton.disabled = !formulario.checkValidity(); // verifica si todos los elementos dentro del formulario son válidos
    });

    boton.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar el envío del formulario

        // Mostrar el texto "Cargando..." en el botón
        boton.innerText = "Cargando...";

        // Deshabilitar el botón después de hacer clic
        boton.disabled = true;

        // Simular el envío del formulario y esperar 3 segundos antes de redireccionar
        setTimeout(() => {

            // sessionStorage.setItem('USER', JSON.stringify(estadoUsuario));
            localStorage.setItem('USER', JSON.stringify(estadoUsuario));

            
            // window.location.href = 'usuario.html'; - Redirección a la página de éxito
            // Evitar que el usuario regrese a la página anterior ('index.html')
            history.pushState(null, null, window.location.href='usuario.html');
        }, 3000);
    });
}



navegarPaginaExito()