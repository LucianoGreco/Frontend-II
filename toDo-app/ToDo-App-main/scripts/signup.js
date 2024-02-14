window.addEventListener('load', function () {
    // obtenemos variables globales
    const ULR_BASE = 'http://todo-api.ctd.academy:3000/v1';


    // Escuchamos el submit y preparamos el envío   
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {

        event.preventDefault();

        let usuario = {
            firstName : document.querySelector('#inputNombre').value, 
            lastName : document.querySelector('#inputApellido').value,
            email : document.querySelector('#inputEmail').value,
            password : document.querySelector('#inputPassword').value,
            role: 'admin'
        };
        console.log(usuario);

        // Validar todos los datos antes de llamar a la API

        

        realizarRegister(usuario)
        // redirigir a login en caso de exito
    });


    // Realizar el signup [POST] 
    function realizarRegister(usuario) {

        const configuracion = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-type': 'application/json',
            },
        }

        fetch(`${ULR_BASE}/users`, configuracion)
        .then(respuesta => respuesta.json())
        .then(respuestaJson => console.log(respuestaJson));
    };

});
