/*
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



//const URL_BASE = 'https://jsonplaceholder.typicode.com';

// OPCION 1 - EJECUCION ASINCRONICA: flujo de ejecucion en paralelo o en un orden diferente
function llamarApi(usuario){

    const configuraciones = {
        method: 'POST', // Metodo Post
        body: JSON.stringify(usuario), // transformamos el objeto usuario a un json
        headers: {  // Headers: espera un texto plano
            'Content-Type':'application/json' // Debemos indicarle que espere un JSON
        }
    };

    fetch(`${URL_BASE}/posts`, configuraciones)
        // .then(respuesta => console.log(respuesta.status)); // 201 Creader
        .then(respuesta => respuesta.json()) // Recibe la respuesta del servidor y la convierte en un JSON
        .then(respuestaJson => console.log(respuestaJson)); // lee el json

    console.log('Esperando respueta...'); // Se ejecuta el hilo principal
}
 
// OPCION 2 - EJECUCION SINCRONICA: flujo de ejecucion lineal o secuencial
async function llamarApiConAwait(usuario){

    const configuraciones = {
        method: 'POST', // Metodo Post
        body: JSON.stringify(usuario), // transformamos el objeto usuario a un json
        headers: {  // Headers: espera un texto plano
            'Content-Type':'application/json' // Debemos indicarle que espere un JSON
        }
    };


//  const respuesta = await (Lo mismo que la funcion llamar api)
    const respuesta = await fetch(`${URL_BASE}/posts`, configuraciones);
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
} 

// Ejecución CONCURRENTE ASINCRONIC: Tareas se ejecutan en paralelo pero finalizan en orden 
// Ejecución CONCURRENTE SINCRONICA: Tareas se ejecutan en paralelo pero pueden finalizan en diferente orden


// const usuario = {
//     nombre : 'Luciano',
//     ciudad: 'San Rafael'
// }

const boton = document.querySelector('button');

boton.addEventListener('click', function(){
    // llamarApi(usuario)
    // llamarApiConAwait(usuario)
    llamarTodoApi(usuario)
})




/* 📚 MESA DE TRABAJO ✅
    Valiendose de la documentacion y el trabajo en clase, deberan lograr crear un usaurio
        en la API y obtener su token.
    Este proceso puede realizarse a travez de la herramienta postman, o si ya lo prefieren 
        desde un script.

Documentación:  https://todo-api.ctd.academy/#/
                    Api: https://todo-api.ctd.academy/v1

                https://todo-api.ctd.academy:3000/#/
                    ApiPremiun: https://todo-api.ctd.academy:3000/v1
*/ 

const URL_API = 'https://todo-api.ctd.academy/v1'


// Awai
async function llamarTodoApi(usuario){
    const configuraciones = {
        method: 'POST', // Metodo Post - Request
        body: JSON.stringify(usuario), // transformamos el objeto usuario a un json
        headers: {  // Headers: espera un texto plano
            'Content-Type':'application/json' // Debemos indicarle que espere un JSON
        }
    };

//  const respuesta = await (Lo mismo que la funcion llamar api)
    const respuesta = await fetch(`${URL_APIPruba}/users`, configuraciones);
    const respuestaJson = await respuesta.json();
    console.log(respuestaJson);
}


const usuario = {
    firstName: "Luciano",
    lastName: "Greco",
    email: "grecolucianogabriel@gmail.com",
    password: "123456789"
  }

//token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWNvbHVjaWFub2dhYnJpZWxAZ21haWwuY29tIiwiaWQiOjIyLCJpYXQiOjE3MDc5MjU5NjR9.qV-VXNZJY5G--Yky3cKUNz_gpmHRWvZGtcV-5L9uqz0"


