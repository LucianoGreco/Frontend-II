// Normalizaacion: Estandarizar la informacion
// Validacion: Comprobar la informacion 


// Obtengo el formulario
const formulario = document.querySelector('form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // perdure el evento y no se valla rapido
    // console.log(e);

    // Clase 11
    const usuarioInformacion = capturarDatos();
    const listaErrores = validarInformacion(usuarioInformacion);

    // Clase 12
    mostrarValidaciones(listaErrores); // errores: Listado de errores 
    mostrarMensajeExito(listaErrores);
});


function capturarDatos(){

    const informacionCapturada = {
        nombre: '',
        password: '',
        telefono: '',
        hobbies: [],
        nacionalidad: ''
    }

    // Obtener Nombre
    informacionCapturada.nombre = document.querySelector('#nom').value;
    // Obtener Contraseña
    informacionCapturada.password = document.querySelector('#pass').value;
    // Obtener Telefono
    informacionCapturada.telefono = document.querySelector('#tel').value;

   
    
    // Obtener Hobbies
    const hobbies = document.querySelectorAll('[name=hobbies]');

        //Opcion 1 - Recorro lo check en buscando de los true
        
            // hobbies.forEach(i => {
            //     if(i.checked){ // checked retorna un true o false
            //         console.log(i.id); 
            //         informacionCapturada.hobbies.push(i.id)
            //     }
            // }) 
        
  
    
            // Opcion 2
                // let lista = Array.from(hobbies); // Array.from() convierte el elemento NodeListOf<> en un Array[]

            // 2.a. for(variablesFiltrada)
                // informacionCapturada.hobbies = lista.filter(i => i.checked) // filtra los (chekc.checked == true)
                // for(let i of informacionCapturada.hobbies){
                //      console.log(i.id);
                //      informacionCapturada.hobbies.push(i.id);
                // } 

            // 2.b. for(filtro)
                // for(let i of lista.filter(hobby => hobby.checked)){ 
                //     console.log(i.id);
                //     informacionCapturada.hobbies.push(i.id);
                // } 
        


    // Opcion 3
    informacionCapturada.hobbies = 
        Array.from(hobbies) // convierte un elemento del tipo nodeListOf a un array
            .filter(i => i.checked) // Filtra los elementos checkeados
                .map(hobbyFiltrado => { // Crea una nueva variable de los elementos checkeados
                    // console.log(hobbyFiltrado.id);
                    return hobbyFiltrado.id
                }); 




    // Obtener Nacionalidad 
    const nacionalidad = document.querySelectorAll('[name=nacionalidad]');


        // Opcion 1 - Recorro lo check en buscando de los true
        // nacionalidad.forEach(i => {
        //     if (i.checked){
        //         // console.log(i.id);
        //         informacionCapturada.nacionalidad = i.id;
        //     }
        // }) 

    
    

    // Opcion 2
    informacionCapturada.nacionalidad = 
        Array.from(nacionalidad)
            .filter(i => i.checked)
                .map(nacionFiltered => {
                    // console.log(nacionFiltered.id);
                    return nacionFiltered.id
                });


    console.log(informacionCapturada);
    return informacionCapturada;
}






/*

let prueba = ['Luciano', 'Gabriel', 'Greco', 'Luciano'];

// Opcion 1
let pruebita = prueba.filter(i => i == 'Luciano')
console.log(pruebita); // Filtra los elementos que se llaman Luciano


// Opcion 2
let resultado = [];

prueba.forEach(i => {
    if(i == 'Luciano'){
        resultado.push(i)
    }
}); 
console.log(resultado); 

*/



/* 📚 [3] FUNCION: validar datos ✅
Desarrollar la funcion 3 de validar los datos.
Esta funcion va a recibir un objeto con la misma estructura de informacionCapturada
Entonces dentro de esta función vamos a chequear ciertas validaciones.

    1- La funcion devuelve un listado de errores según las comprobaciones que hace sobre el objeto.
    2- Si el nombre no es un texto y tiene menos de 3 caracteres sumar el error: "El nombre debe tener al menos 3 caracteres."
    3- Si la contraseña tiene menos de 6 caracteres, sin contar espacios al principio, en el medio o final, sumar el error: "La contraseña debe tener al menos 6 caracteres, entre letras y símbolos."
    4- Si el telefono tiene menos de 10 números, sumar el error: "No es un teléfono válido."
    5- Si la lista de hobbies tiene más de 4 items, sumar el error: "Sólo es posible seleccionar 4 hobbies."
    5- Si no hay una nacionalidad definida, sumar el error: "Debe seleccionar una nacionalidad." */



function validarInformacion(usuarioInformacion) {

    //1.
    let listaErrores = []; // Listado de errores

    // Validar el nombre
    if (typeof usuarioInformacion.nombre !== 'string' /*(n2)*/|| usuarioInformacion.nombre.length < 3) {
        listaErrores.push("El nombre debe tener al menos 3 caracteres.");
    }

    // Validar la contraseña
    const contraseña = usuarioInformacion.password.replace(/\s/g,''); // Expresiones regulares: .replace(/\s/g,'') espacios al principio, en el medio o final
    if (contraseña.length < 6) {
        listaErrores.push("La contraseña debe tener al menos 6 caracteres, entre letras y símbolos.");
    }

    // Validar el teléfono
    if (usuarioInformacion.telefono.length < 10 || isNaN(usuarioInformacion.telefono)) {
        listaErrores.push("No es un teléfono válido.");
    }

    // Validar la lista de hobbies
    if (usuarioInformacion.hobbies.length > 4) {
        listaErrores.push("Sólo es posible seleccionar 4 hobbies.");
    }

    // Validar la nacionalidad
    if (usuarioInformacion.nacionalidad.length === 0) {
        listaErrores.push("Debe seleccionar una nacionalidad.");
    }

    return listaErrores;
} 
