// Normalizaacion: Estandarizar la informacion
// Validacion: Comprobar la informacion 


// Obtengo el formulario
/*
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

    // Obtener Nombre
    objetoInformacion.nombre = document.querySelector('#nom').value;
    // Obtener Contraseña
    objetoInformacion.pass = document.querySelector('#pass').value;
    // Obtener Telefono
    objetoInformacion.tel = document.querySelector('#tel').value;

    // Obtener Hobbies
    const hobbies = document.querySelectorAll('[name=hobbies]');

        //Opcion 1 - Recorro lo check en buscando de los true
        hobbies.forEach(check => {
            if(check.checked){
                //objetoInformacion.checkList.push(check); 
            }
        }) 

        // Opcion 2
        let lista = Array.from(hobbies); // Array.from() convierte el elemento NodeListOf<> es un Array[]
        
            // 2.a.
            objetoInformacion.hobbies = lista.filter(hobby => hobby.checked) // filtra los (chekc.checked == true)
            
            // 2.b.
            for(let i of lista.filter(hobby => hobby.checked)){ 
                objetoInformacion.hobbies.push(i.id);
            } 


        // Opcion 3
        objetoInformacion.hobbies = Array.from(hobbies) 
        
        .filter(hobby => hobby.checked) 

        // Devuelve array con los (chekc.checked == true)
        .map(hobbyFiltrado => {
            console.log(hobbyFiltrado.id);
            return hobbyFiltrado.id
        }); 


    // Obtener Nacionalidad 
    const nacionalidad = document.querySelectorAll('[name=nacionalidad]');

        // Opcion 1 - Recorro lo check en buscando de los true
        nacionalidad.forEach(nacion => {
            if (nacion.checked){
                objetoInformacion.nacionalidad = nacion.id;
            }
        }) 


        // Opcion 2
        objetoInformacion.nacionalidad = Array.from(nacionalidad)

        .filter(nacion => nacion.checked) 
        console.log(nacion)

        .map(nacionFiltered => {
            console.log(nacionFiltered.id);
            return nacionFiltered.id
        });

    //console.log(objetoInformacion);
    //  return objetoInformacion;
}

*//*

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
console.log(resultado); */




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

const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const usuarioInformacion = capturarDatos();
    const errores = validarInformacion(usuarioInformacion);
    mostrarValidaciones(errores);
    mostrarMensajeExito(errores)
    
});


function capturarDatos(){
    const usuarioInformacion = {
        nombre: '',
        password: '',
        telefono: '',
        hobbies: [],
        nacionalidad: ''
    }
    
    // Obtener Nombre
    usuarioInformacion.nombre = document.querySelector('#nom').value;
    // Obtener Contraseña
    usuarioInformacion.pass = document.querySelector('#pass').value;
    // Obtener Telefono
    usuarioInformacion.tel = document.querySelector('#tel').value;
    // Obtener Hobbies
    const hobbies = document.querySelectorAll('[name=hobbies]');
    usuarioInformacion.hobbies = Array.from(hobbies).filter(hobbyCheck => hobbyCheck.checked).map(hobbyCheckFiltrado => hobbyCheckFiltrado.id); // Lista de hobby true
    // Obtener Nacionalidad 
    const nacionalidad = document.querySelectorAll('[name=nacionalidad]');
    usuarioInformacion.nacionalidad = Array.from(nacionalidad).filter(nacion => nacion.checked).map(nacionFiltrada => nacionFiltrada.id); 

    return usuarioInformacion;
}


function validarInformacion(usuarioInformacion) {
    let errores = [];

    // Validar el nombre
    if (typeof usuarioInformacion.nombre !== 'string' || usuarioInformacion.nombre.length < 3) {
        errores.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Validar la contraseña
    const contraseña = usuarioInformacion.pass.replace(/\s/g,''); // Expresiones regulares
    if (contraseña.length < 6) {
        errores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.");
    }

    // Validar el teléfono
    if (usuarioInformacion.tel.length < 10 || isNaN(usuarioInformacion.tel)) {
        errores.push("No es un teléfono válido.");
    }

    // Validar la lista de hobbies
    if (usuarioInformacion.hobbies.length > 4) {
        errores.push("Sólo es posible seleccionar 4 hobbies.");
    }

    // Validar la nacionalidad
    if (usuarioInformacion.nacionalidad.length === 0) {
        errores.push("Debe seleccionar una nacionalidad.");
    }

    return errores;
} 