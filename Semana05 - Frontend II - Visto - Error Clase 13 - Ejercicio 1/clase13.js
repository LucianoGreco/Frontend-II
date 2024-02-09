const estadoErroresOk = { // Arreglo de boleanos
    email: false,
    password: false,
    rol: false,
    terminos: 'false'
};

// USER
const estadoUsuario = {
    email: '',
    password: '',
    rol: '',
    terminos: ''
};




// CAPTURAMOS EL EVENTO
const formulario = document.querySelector('form'); // 1.Capturar el formulario
const boton = document.querySelector('button');


formulario.addEventListener('change', () => { // 2.Agrega un evento al formulario


    // Capturamos los datos 
    const email     = document.querySelector('#email').value;
    const password  = document.querySelector('#password').value;
    const rol       = document.querySelector('#rol').value;
    const terminos  = document.querySelector('#terminos').value;


    // Validacion de datos correctos - Booleano
    estadoErroresOk.email       = esValidoEmail      (email); // Verifica el email
    estadoErroresOk.password    = esValidoPassword   (password);
    estadoErroresOk.rol         = esValidoRol        (rol);
    estadoErroresOk.terminos    = esValidoTerminos   (terminos);

    
    // Guardar datos validados -
    estadoUsuario.email         = email; 
    estadoUsuario.password      = password;
    estadoUsuario.rol           = rol;
    estadoUsuario.terminos      = terminos

   
    mostrarMensajeDeErrores(estadoErroresOk);
    
});


// Validacion
function esValidoEmail(email){
    /* Expresion Regular 
            let mail = 'texto@texto.texto'; -> Patron de busqueda 
                    'texto  = [a-z0-9]
                    @texto  = @[a-z]
                    .texto' = .[a-z]{2,3} */ 
    let patronDeBusqueda = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    return patronDeBusqueda.test(email);
}
function esValidoPassword(password){  
    return password.length > 3;
}
function esValidoRol(rol){
    return rol ==='frontend' || rol==='backend';
}
function esValidoTerminos(terminos){
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
    const caractersInvalidosB = ',!#"$%&/()=?¿!°¡'; // Todo lo que esta entre las comillas simples son caracteres invalidos

    // keypress: captura el caracter que se presiona
    if(caractersInvalidosB.includes(e.key)){
        // Prevenimos la continuacion del evento y no se escribe la tecla oprimida
        e.preventDefault();
    }
})



/*  📚 [5] FUNCION: Formulario completado con éxito ✅

Esta funcion se va a encargar de realizar la redirección cuando el formulario se complete correctamente.
Para eso debera cumplir con los siguientes requerimientos.
    
    ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌
    ❌ 1 - Deshabilitar el boton del formulario miestra se complete el total del formulario. ❌
    ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

    2 - Una vez completado el formulario al dar click en el boton Esperar 3 segundos para redireccionar a la página de 'usuario.html'
    3 - Durante ese tiempo el boton deshabilitado debe mostrar el texto: "Cargando..."
    4 - Cuando vaya a la página de 'usuario.html' NO se debe permitir que mediante el 
        botón de "Atrás"(la flechita del navegador) el usuario vuelva a index. */ 
        

function navegarPaginaExito() {

    // Deshabilitar el botón al inicio si los campos están vacíos
    boton.disabled = true;      

    
    // Deshabilitar el botón mientras se completa el formulario
    formulario.addEventListener('change', () => {
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


            // Guarda los datos del localStorage en un objeto
        //  sessionStorage                   .stringify - Transforma objeto a string
            localStorage.setItem('USER', JSON.stringify(estadoUsuario));
      

            
            // window.location.href = 'usuario.html'; - Redirección a la página de éxito
            // Evitar que el usuario regrese a la página anterior ('index.html')
            history.pushState(null, null, window.location.href='usuario.html');
        }, 3000);
    });
}


navegarPaginaExito()