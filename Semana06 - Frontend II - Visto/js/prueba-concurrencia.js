// https://restcountries.com/

// function obtenerPaisAsync(nombrePais, executeAfterCallToApi, index) {

//     return fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)

//     .then(respuesta =>{

//         if(respuesta.status === 200){
//             return respuesta.json();
//         }
//         if(respuesta.status === 404){
//             executeAfterCallToApi(index, `No se encontró: ${nombrePais}`);
//         }
//     })
//     .then(datos => {
//         if(executeAfterCallToApi && datos){
//             executeAfterCallToApi(index, datos[0].name.common);
//         }
//         return datos;
//     })
// }

function obtenerPaisAsync(nombrePais, executeAfterCallToApi, index) {

    return fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
    .then(respuesta =>{

        if(respuesta.status === 200){
            return respuesta.json();
        }
        if(respuesta.status === 404){
            executeAfterCallToApi(index, `No se encontró: ${nombrePais}`);
        }
    })
    .then(datos => {
        if(executeAfterCallToApi && datos){
            executeAfterCallToApi(index, datos[0].name.common);
        }
        return datos;
    })
    .catch(error => {
        console.error("Error en la llamada a la API:", error);
    });
}

let paisesLimitrofes = [];

async function comenzarLlamadosConcurrentes(){

    const datos = await obtenerPaisAsync('CHINA');
    // const borders = ["AFG", "BTN", "MMR", "HKG", "IND", "KAZ", "NPL", "PRK", "KGZ", "LAO", "MAC"]

    let index = 1;

    for(let limitrofe of datos){
        await obtenerPaisAsync(limitrofe, show, index);
        index++;
    }

    document.querySelector('#paises').innerHTML += 
        `<h1>Se encontraron ${paisesLimitrofes.length} pais/es</h1>`;
}

comenzarLlamadosConcurrentes();



function show(index, nombrePais){
    paisesLimitrofes.push(nombrePais);
    document.querySelector('#paises').innerHTML += `<h4>${index} - ${nombrePais}</h4>`;
}