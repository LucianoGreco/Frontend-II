/* Documentación:  https://todo-api.ctd.academy/#/
                    Api: https://todo-api.ctd.academy/v1

                https://todo-api.ctd.academy:3000/#/
                    ApiPremiun: https://todo-api.ctd.academy:3000/v1 */



window.addEventListener('load', function () {
    // obtenemos variables globales
    const ULR_BASE = 'https://todo-api.ctd.academy/v1';


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (e) {

        e.preventDefault();

        let usuario = {
            firstName : document.querySelector('#inputNombre').value,
            lastName :  document.querySelector('#inputApellido').value,
            email :     document.querySelector('#inputEmail').value,
            password :  document.querySelector('#inputPassword').value
        }
        console.log(usuario);

        const passwordRepetido = document.querySelector('#inputPasswordRepetida').value;

        // Validar todos los datos antes de llamar a la API
        let validacionFirstName             = validarTexto(usuario.firstName); // true
        let validacionlastName              = validarTexto(usuario.lastName); // true
        let validacionEmail                 = validarEmail(usuario.email); // true
        let validacionPassword              = validarContrasenia(usuario.password); // true
        let validacionComparacionPassword   = compararContrasenias(usuario.password, passwordRepetido)

        // console.log(validacionFirstName);
        // console.log(validacionlastName);
        // console.log(validacionEmail);
        // console.log(validacionPassword);
        // console.log(validacionComparacionPassword);
        

        if(validacionFirstName && validacionlastName && validacionEmail && validacionPassword && validacionComparacionPassword){
            // realizarRegister(usuario)
            // redirigir a login en caso de exito
            realizarRegister(usuario)
            window.location.href='index.html';
        }else{
            console.log('ERROR');
        }
        })




    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el signup [POST]                   */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(usuario) {

        const configuraciones = {
            method: 'POST', 
            body: JSON.stringify(usuario), 
            headers: { 
                'Content-Type':'application/json' 
            }
        };

        fetch(`${ULR_BASE}/users`, configuraciones)
            .then(respuesta => respuesta.json())
                .then(respuestaJson => console.log(respuestaJson));
    };
});
