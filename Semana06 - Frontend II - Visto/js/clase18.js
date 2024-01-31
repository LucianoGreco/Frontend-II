/*
NOTA:


ESCRITURA: JSON

    Body 
        raw
            {"nombre":"prueba","ciudad":"BS AS"}


lECTURA:

    Error: Espera un texto plano:
        Header:
            key:            Value:
            Content-Type    text/plain

                Body
                    Pretty
                        { "id":101 }

                    
    Solucion: Debemos indicarle que es un json: ENDPOINT espera JSON
        Header:
            key:            Value:  
            Content-Type    application/jsonV
    
                Body
                    Pretty
                        {
                        "nombre": "prueba",
                        "ciudad": "BS AS",
                        "id": 101
                        }
            
*/



// const URL_BASE = 'https://jsonplaceholder.typicode.com';

// Se ejecutan el hilo principal y despues las promesas
/*
function llamarApi(usuario){

    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type':'application/json'
        }
 
    };

    fetch(`${URL_BASE}/posts`, configuraciones)
        .then(respuesta => respuesta.json()) // Recibe la respuesta del servidor y la convierte en un JSON
        .then(respuestaJson => console.log(respuestaJson)); // lee el json

    console.log('Ejecucion Hilo Principal');
}
*/






/* MESA
Valiendose de la documentacion y el trabajo en clase, deberan lograr crear un usaurio
    en la API y obtener su token.
Este proceso puede realizarse a travez de la herramienta postman, o si ya lo prefieren 
    desde un script.
Documentación: https://todo-api.ctd.academy/#/ */ /*


const URL_BASE = 'https://jsonplaceholder.typicode.com';


document.querySelector('button').addEventListener('click', function(){
    // const usuario = {nombre:'prueba', ciudad: 'BS AS'}
    // //llamarApi(usuario);
    // pruebaConAwait(usuario)

    const usuario = {nombre: 'Luciano', apellido: 'Greco', DNI: '35623054'}
    registrarUsuario(usuario)
})


// async / await - Secuencial
async function pruebaConAwait(usuario){
    const configuraciones = {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type':'application/json'
        }
    };

    const respuesta = await fetch(`${URL_BASE}/posts`, configuraciones);
        const respuestaJson = await respuesta.json();
        console.log(respuestaJson);

        console.log('Ejecucion secuencial');
}


async function registrarUsuario(usuario) {
    try {
        const configuraciones = {
            method: 'POST',
            body: JSON.stringify(usuario),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const respuesta = await fetch(`${URL_BASE}/posts`, configuraciones);
        const respuestaJson = await respuesta.json();

        if (respuesta.ok) {
            console.log(respuestaJson);
            console.log('Usuario registrado exitosamente');
            console.log('Token:', respuesta.token);
        } else {
            console.error('Error al registrar usuario:', respuesta.error);
        }
    } catch (error) {
        console.error('Error de red:', error);
    }
} */



// PROFE:
const URL_BASE = 'https://jsonplaceholder.typicode.com';

function llamarApi(){
    fetch(`${URL_BASE}/posts`)
}












