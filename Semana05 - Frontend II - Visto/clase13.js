const estadoUsuario = {
    email: '',
    password: '',
    rol: '',
    terminos: false
};


const estadoErroresOk = {
    email: false,
    password: false,
    rol: false,
    terminos: false
};


// CAPTURAMOS EL EVENTO
const formulario = document.querySelector('form'); //form
formulario.addEventListener('change', () => {

    // Validando email formulario
    const inputEmail = document.querySelector('#email');
    estadoErroresOk.email = isValidEmail(inputEmail.value); // Verifica el email
    estadoUsuario.email = inputEmail.value; // Guarda el email

    // Validando password formulario
    const inputPassword = document.querySelector('#password');
    estadoErroresOk.password = isValidPassword(inputPassword.value);
    estadoUsuario.password = inputPassword.value;

    // Validando Rol
    const inputRol = document.querySelector('#rol');
    estadoErroresOk.rol = isValidRol(inputRol.value);
    estadoUsuario.rol = inputRol.value;

    // Validando Terminos
    const inputTerminos = document.querySelector('#terminos');
    estadoErroresOk.terminos = isValidTerminos(inputTerminos.checked)
    estadoUsuario.terminos = inputTerminos.checked

    mostrarMensajeDeErrores(estadoErroresOk);
});

// CREAMOS LAS VALIDACIONES DE DATOS
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


// FUNCION QUE RENDERIZA LOS ERRORES
function mostrarMensajeDeErrores1(estadoErrores){
    
    // Error email
    if(estadoErrores.email){
        document.querySelector('#emailError').classList.remove('visible');
    }else{
        document.querySelector('#emailError').classList.add('visible');
    }

    // Error password
    if(estadoErrores.password){
        document.querySelector('#passwordError').classList.remove('visible');
    }else{
        document.querySelector('#passwordError').classList.add('visible');
    }

    // Error rol
    if(estadoErrores.rol){
        document.querySelector('#rolError').classList.remove('visible');
    }else{
        document.querySelector('#rolError').classList.add('visible');
    }

    // Error terminos
    if(estadoErrores.terminos){
        document.querySelector('#terminosError').classList.remove('visible');
    }else{
        document.querySelector('#terminosError').classList.add('visible');
    }
}

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

const inputEmail = document.querySelector('#email');
inputEmail.addEventListener('keypress', (e) => {

    //const caractersInvalidosA = [',','!','#'];
    const caractersInvalidosB = ',!#';

    // keypress: captura el caracter que se presiona
    if(caractersInvalidosB.includes(e.key)){
        // Prevenimos la continuacion del evento y no se escribe la tecla oprimida
        e.preventDefault();
    }
})

/*  [5] FUNCION: Formulario completado con éxito 

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

navegarPaginaExito();

