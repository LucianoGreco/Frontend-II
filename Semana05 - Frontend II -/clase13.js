const estadoUsuario = {
    email: '',
    password: '',
    roñ: '',
    terminos: false
};


const estadoErroresOk = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};


// Capturamos el evento del formulario
const formulario = document.querySelector('form'); //form
formulario.addEventListener('change', () => {

    // Validando email formulario
    const inputEmail = document.querySelector('#email');
    estadoErroresOk.email = isValidEmail(inputEmail.value);

    // Validando password formulario
    const inputPassword = document.querySelector('#password');
    estadoErroresOk.password = isValidPassword(inputPassword.value);

    // Validando Rol
    const inputRol = document.querySelector('#rol');
    estadoErroresOk.rol = isValidRol(inputRol.value)


    // Validando Terminos
    const inputTerminos = document.querySelector('#terminos');
    estadoErroresOk.terminos = isValidTerminos(inputTerminos.checked)

    mostrarMensajeDeErrores(estadoErroresOk);
});

// Creamos las funciones que van a validar los datos

// Validacion email
function isValidEmail(email){
    /* Expresion regular: Patron de busqueda (caracteres)
    let mail = 'texto@texto.texto';
        'texto   = [a-z0-9]
        @texto  = @[a-z]
        .texto' = .[a-z]{2,3} */
    let regexEmail = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return regexEmail.test(email);
}

// Validacion password
function isValidPassword(password){  
     return password.length > 3;
}

// Validacion rol
function isValidRol(rol){
    return rol==='frontend' || rol==='backend';
}

// Validacion terminos
function isValidTerminos(terminos){
    return terminos === true;
}


// Creamos la funcion que muestra los errores
// function mostrarMensajeDeErrores(estadoErrores){
    
//     // Error email
//     if(estadoErrores.email){
//         document.querySelector('#emailError').classList.remove('visible');
//     }else{
//         document.querySelector('#emailError').classList.add('visible');
//     }

//     // Error password
//     if(estadoErrores.password){
//         document.querySelector('#passwordError').classList.remove('visible');
//     }else{
//         document.querySelector('#passwordError').classList.add('visible');
//     }

//     // Error rol
//     if(estadoErrores.rol){
//         document.querySelector('#rolError').classList.remove('visible');
//     }else{
//         document.querySelector('#rolError').classList.add('visible');
//     }

//     // Error terminos
//     if(estadoErrores.terminos){
//         document.querySelector('#terminosError').classList.remove('visible');
//     }else{
//         document.querySelector('#terminosError').classList.add('visible');
//     }
   
// }

// Metodo Optimizado por el chatgpt
function mostrarMensajeDeErrores(estadoErrores) {
    const errores = ['email', 'password', 'rol', 'terminos'];

    errores.forEach(error => {
        const elementoError = document.querySelector(`#${error}Error`);

        if (estadoErrores[error]) {
            elementoError.classList.remove('visible');
        } else {
            elementoError.classList.add('visible');
        }
    });
}

// 52:59 / 01:08:49
const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keypress', (e) => {

    const caractersInvalidosA = [',','!','#'];
    const caractersInvalidosB = ',!#';

    // keypress: captura el caracter que se presiona
    if(caractersInvalidosB.includes(e.key)){
        // Prevenimos la continuacion del evento y no se escribe la tecla oprimida
        e.preventDefault();
    }
})

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                [5] FUNCION: Formulario completado con éxito                */
/* -------------------------------------------------------------------------- */ /*
Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
Para eso debera cumplir con los siguientes requerimientos.

    1 - Deshabilitar el boton del formulario.
    2 - Esperar 3 segundos para redireccionar a la página de 'usuario.html'
    3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
    4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el 
        botón de "Atrás"(la flechita del navegador) el usuario vuelva a index. */



