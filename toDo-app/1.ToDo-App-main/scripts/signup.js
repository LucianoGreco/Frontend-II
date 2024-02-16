/* Documentación:  https://todo-api.ctd.academy/#/
                    Api: https://todo-api.ctd.academy/v1

                https://todo-api.ctd.academy:3000/#/
                    ApiPremiun: https://todo-api.ctd.academy:3000/v1 */



window.addEventListener('load', function () {
    // obtenemos variables globales
    const ULR_BASE = 'https://todo-api.ctd.academy/v1';


    const firstName         = document.querySelector('#inputNombre');
    const lastName          = document.querySelector('#inputApellido');
    const email             = document.querySelector('#inputEmail');
    const password          =  document.querySelector('#inputPassword');
    const passwordRepetido  = document.querySelector('#inputPasswordRepetida');
    const formulario        = document.querySelector('form');

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    formulario.addEventListener('submit', function (e) {

        e.preventDefault();

        let usuario = {
            firstName : firstName.value,
            lastName :  lastName.value,
            email :     email.value,
            password :  password.value
        }

        console.log(usuario);

        
        // Validar todos los datos antes de llamar a la API
        let validacionFirstName             = validarTexto(usuario.firstName); // true
        let validacionlastName              = validarTexto(usuario.lastName); // true
        let validacionEmail                 = validarEmail(usuario.email); // true
        let validacionPassword              = validarContrasenia(usuario.password); // true
        let validacionComparacionPassword   = compararContrasenias(usuario.password, passwordRepetido.value)

        if(validacionFirstName && validacionlastName && validacionEmail && validacionPassword && validacionComparacionPassword){
            // realizarRegister(usuario)
            realizarRegister(usuario)
            // redirigir a login en caso de exito
            window.location.href='index.html';
        }else{
            console.log('ERROR');
        }     

    })

        
    const caractersInvalidosEmail = '!"#$%&()*+,-./:;<=>?[]^_`{|}~';
    const caractersInvalidosTexto = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~1234567890';
    bloqueadorCaracter(email, caractersInvalidosEmail)
    bloqueadorCaracter(firstName, caractersInvalidosTexto)
    bloqueadorCaracter(lastName, caractersInvalidosTexto)
    
             

    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el signup [POST]                   */
    /* -------------------------------------------------------------------------- */
    async function realizarRegister(usuario) {

        const configuraciones = {
            method: 'POST', 
            body: JSON.stringify(usuario), 
            headers: { 
                'Content-Type':'application/json' 
            }
        };

        // fetch(`${ULR_BASE}/users`, configuraciones)
        //     .then(respuesta => respuesta.json())
        //         .then(respuestaJson => console.log(respuestaJson));
        const respuesta = await fetch(`${ULR_BASE}/users`, configuraciones)
        const respuestaJson = await respuesta.json();
        console.log(respuestaJson);
    };

});
