// Normalizaacion: Estandarizar la informacion
// Validacion: Comprobar la informacion 

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // no termine de ocurrir el evento submit
    capturarDatos()

});


function capturarDatos(){

    const objetoInformacion = {
        nombre: '',
        password: '',
        telefono: '',
        hobbies: [],
        nacionalidad: ''
    }

    objetoInformacion.nombre = document.querySelector('#nom').value;
    objetoInformacion.pass = document.querySelector('#pass').value;
    objetoInformacion.tel = document.querySelector('#tel').value;

    const checkList = document.querySelectorAll('[name=hobbies]');

    // OBTERNER LOS HOBBIES

    // OPCION 1 
    // checkList.forEach(check => {
    //     if(check.checked){
    //         //objetoInformacion.checkList.push(check); // Ingresa el elemento a hobbies: [],
    //     }
    // }) 



    // OPCION 2
    // let lista = Array.from(checkList); // combierte el objete en array
    
    // // A.
    // objetoInformacion.checkList = lista.filter(check => check.checked) // filter utiliza un array
    
    // // B.
    // for(let i of lista.filter(check => check.checked)){
    //     objetoInformacion.checkList.push(i.id);
    // }


    // OPCION 3
    objetoInformacion.checkList = Array.from(checkList) // Array.from() convierte el elemento NodeListOf<> es un Array[]
    
    // filter devuelve los ckeck que cumplen con el criterio (chekc.checked == true)
    .filter(check => check.checked) // devuelve un array con los hobbies

    // De los hobbies filtrados, selecciona el atributo id
    .map(checkFiltered => {
        console.log(checkFiltered.id);
        return checkFiltered.id
    }); // devuelve una copia del array

 


    const nacionalidad = document.querySelectorAll('[name=nacionalidad]');

    // nacionalidad.forEach(nacion => {
    //     if (nacion.checked){
    //         objetoInformacion.nacionalidad = nacion.id;
    //     }
    // })

    objetoInformacion.nacionalidad = Array.from(nacionalidad)
    // filter devuelve los ckeck que cumplen con el criterio (chekc.checked == true)
    .filter(nacion => nacion.checked) // devuelve un array con los hobbies

    // De los hobbies filtrados, selecciona el atributo id
    .map(nacionFiltered => {
        console.log(nacionFiltered.id);
        return nacionFiltered.id
    }); // devuelve una copia del array

    // console.log(objetoInformacion);
}


let prueba = ['Luciano', 'Gabriel', 'Greco', 'Luciano'];
// Opcion 1
console.log(prueba.filter(i => i == 'Luciano'));

// Opcion 2
let resultado = [];

prueba.forEach(i => {
    if(i == 'Luciano'){
        resultado.push(i)
    }
});
console.log(resultado);





// MINUTO 39:31