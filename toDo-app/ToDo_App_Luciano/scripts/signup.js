/* Documentación:  https://todo-api.ctd.academy/#/
                    Api: https://todo-api.ctd.academy/v1

                https://todo-api.ctd.academy:3000/#/
                    ApiPremiun: https://todo-api.ctd.academy:3000/v1 */

window.addEventListener('load', function () {
    // obtenemos variables globales
    const ULR_BASE = 'https://todo-api.ctd.academy/v1';

    const nombre                = document.querySelector('#inputNombre');           // Nombre
    const apellido              = document.querySelector('#inputApellido');         // Apellido
    const email                 = document.querySelector('#inputEmail');            // Email
    const contraseña            =  document.querySelector('#inputPassword');        // Contraseña
    const contraseñaRepetida    = document.querySelector('#inputPasswordRepetida'); // Contraseña Repetida
    const form                  = document.querySelector('form');                   // Formulario


    const caractersInvalidosEmail = '!"#$%&()*+,-/:;<=>?[]^_`{|}~';
    const caractersInvalidosTexto = '!"#$%&()*+,-/:;<=>?@[]^_`{|}~1234567890';
    bloqueadorCaracter(email, caractersInvalidosEmail)
    bloqueadorCaracter(nombre, caractersInvalidosTexto)
    bloqueadorCaracter(apellido, caractersInvalidosTexto)


    /* -------------------------------------------------------------------------- */
    /*  ✅ FUNCIÓN 1 - Escuchamos el submit y preparamos el envío                 */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // ACA QUEDE ANALIZANDO-------------------------------------¬
        // let nombreNormalizado = normalizarTexto(nombre.value)    |
        // console.log(nombreNormalizado);                          |
        //----------------------------------------------------------|

        let usuarioSignup = {
            firstName : nombre.value,
            lastName :  apellido.value,
            email :     email.value,
            password :  contraseña.value
        }
        
        // Validar todos los datos antes de llamar a la API - Boolean
        let validacionNombre                = validarTexto(usuarioSignup.firstName); // true
        let validacionApellido              = validarTexto(usuarioSignup.lastName); // true
        let validacionEmail                 = validarEmail(usuarioSignup.email); // true
        let validacionContraseña            = validarContrasenia(usuarioSignup.password); // true
        let validacionComparacionContraseña = compararContrasenias(usuarioSignup.password, contraseñaRepetida.value)

        if(validacionNombre && validacionApellido && validacionEmail && validacionContraseña && validacionComparacionContraseña){
            realizarRegister(usuarioSignup)// Registrar usuasrio
            window.location.href='index.html';// Redirigir al loguin
        }else{
            window.location.href='signup.html';
        }
        form.reset(); // limpio los campos del formulario
    })
        
             
    /* -------------------------------------------------------------------------- */
    /*  ✅ FUNCIÓN 2 - crear un usuario - [POST] /users                           */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(usuario) {

        console.log("CONSULTANDO A LA API...");

        const configuracion = {
            method: 'POST', 
            body: JSON.stringify(usuario), 
            headers: { 
                'Content-Type':'application/json' 
            }
        };

        fetch(`${ULR_BASE}/users`, configuracion)
            .then(response => {
                // console.log(response); // Response {type: 'cors', url: 'https://todo-api.ctd.academy/v1/users', redirected: false, status: 201, ok: true, …}body: (…)
                // console.log(response.ok); // true

                if (response.ok != true) {
                    alert("Hay datos incorrectos")
                }
                return response.json()
            })
            .then(data => {
                console.log('Promesa signup aceptada');
                // console.log(data) // token {jwt:"eyJhbGciOiJI"}
                // console.log(data.jwt); //        eyJhbGciOiJI

                if(data.jwt){
                    localStorage.setItem('jwt', JSON.stringify(data.jwt))
                    // location.replace('./mis-tareas.html'); 
                }
            })
        .catch(err => {
            console.log("Promesa rechazada:");
            console.log(err);
        })
    };
});
