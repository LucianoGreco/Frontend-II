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



/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/* -------------------------------------------------------------------------- */
/*                         [3] FUNCION: validar datos                         */
/* -------------------------------------------------------------------------- */
// Desarrollar la funcion 3 de validar los datos.
// Esta funcion va a recibir un objeto con la misma estructura de obejetoInformacion
// Entonces dentro de esta función vamos a chequear ciertas validaciones.
// 1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
// 2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
// 3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
// 4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
// 5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
// 5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad."
function validarInformacion(usuario) {
    let errores = [];
    // 👇 desarrollar aqui la funcion

    return errores;
}
