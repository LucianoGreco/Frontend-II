window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */

    const ULR_BASE  = 'https://todo-api.ctd.academy/v1';            // API
    const email     = document.querySelector('#inputEmail');        // Email
    const password  =  document.querySelector('#inputPassword');    // Contraseña
    const form      = document.querySelector('form');               // Formulario


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usuarioLogin = {
            email: email.value,
            password: password.value
        }

        realizarLogin(usuarioLogin)
        form.reset();
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                     */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(usuario) {

        console.log('CONSULTANDO A LA API...');

        const configuracion = {
            method: 'POST', 
            body: JSON.stringify(usuario), 
            headers: { 
                'Content-Type':'application/json' 
            }
        };
    
        fetch(`${ULR_BASE}/users/login`, configuracion)
            .then(response => {
                // console.log(response);
                if(response.ok != true){
                    alert('Hay datos incorrectos')
                }
                return response.json();                
            })
            .then(data =>{ 
                // console.log('Promesa login aceptada');
                // console.log(data)
                if(data.jwt){
                    localStorage.setItem('jwt', JSON.stringify(data.jwt));
                    location.replace('./mis-tareas.html')
                }
            })
        .catch(err =>{
            console.log('Promesa rechazada');
            console.log(err);
        })
    };
});
    



/*  Pasar informacion adicional

web: retornan html
Api: retornan informacion (json)

    www.google.com
                    /
                        search --------------------- Hasta aqui forma parte de la URL
                                ? ------------------ Desde aqui forma parte de la queri
                                    q -------------- querie
                                        =
                                            casa

    www.google.com/search?q=casa

QUERY: 
    ? --------- Inicia con signo de pregunta
    q=casa ---- clave(variable)=valor
    & --------- concatena otra query


    Documentación:  https://todo-api.ctd.academy/#/
                    Api: https://todo-api.ctd.academy/v1

                https://todo-api.ctd.academy:3000/#/
                    ApiPremiun: https://todo-api.ctd.academy:3000/v1 */