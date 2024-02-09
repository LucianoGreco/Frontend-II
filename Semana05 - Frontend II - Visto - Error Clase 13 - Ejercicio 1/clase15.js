

// DESESTRUCTURACION DE UNA VARIABLE 

// Objeto
const objetoEj = { 
    nombre: 'Luciano', 
    apellido: 'Greco', 
    edad : 32
};

const {nombre, apellido, edad} = objetoEj;
// let {nombre, ...rest} = objetoEj
// console.log(nombre);
// console.log(apellido);
// console.log(rest);



// Arreglo
const arregloEj =  ['1','2','3','4','5'];

    // const [a,b,x,d,e] = arregloEj // Opcion a
    // let [a,b, ...rest] = arregloEj // Opcion b
    // console.log(x);
    // console.log(b);
    // console.log(rest);
    
    // const { 0:first, [arregloEj.length-1]:last, ...rest} = arregloEj // Opcion c
    // console.log(first); // 1
    // console.log(last);  // 5
    // console.log(rest);  // 2,3,4




// FUNCION DE ORDEN SUPERIOR - Map
// Se utiliza para generar una copia del array y NO para recorrer el array como el caso del forEach

const array = ['Luciano', 'Gabriel', 'Greco', 'Celeste'];

// Opcion a.
const copia1 = array.map(i => {
    return i.toUpperCase();
});
// console.log(copia1); // ['LUCIANO', 'GABRIEL', 'GRECO', 'CELESTE']


// Opcion b.
const copia2 = array.map(functionParaMap)

function functionParaMap(i){
    return i.toUpperCase();
}
// console.log(copia2); // ['LUCIANO', 'GABRIEL', 'GRECO', 'CELESTE']


const arrayObjeto = [
    {nombre:'Luciano',  apellido:'Greco', id:1},
    {nombre:'Celeste',  apellido:'Sosa',  id:2},
    {nombre:'Gladys',   apellido:'Luna',  id:3},
    {nombre:'Rolando',  apellido:'Greco', id:4}
]

const arrayObjetoMap = arrayObjeto.map(i => {
    // return i.nombre; // ['Luciano', 'Gabriel', 'Greco', 'Celeste']
    return{
        nombre:   i.nombre,
        apellido: i.apellido.toLocaleUpperCase(),
        id:       i.id
    }
});
// console.log(arrayObjetoMap);



/* ✅ MESA DE TRABAJO 📚

    1. levantar el objeto desde el localStorage con key=LISTADO
    2. Devolver un array con nombre, apellido y edad(calculado) 
        de las personas mayores de 18 años (hay que usar map y filter)
    3. Este array debe decir la edad de la persona
    4. Volver a guardar en localStorage bajo el mismo key
    5. Mostrar por consola el resultado, asegurandose de que sea 
        el requerido */

// Parte del ejercicio
localStorage.setItem('LISTADO','[{"nombre":"Pedro","apellido":"Gomez","nacimiento":"11/05/1985"},{"nombre":"Joaquin","apellido":"Sotto","nacimiento":"21/10/1985"},{"nombre":"Gabriela","apellido":"Perez","nacimiento":"02/02/2010"},{"nombre":"Agustina","apellido":"Estevez","nacimiento":"21/08/1986"},{"nombre":"Paola","apellido":"Serra","nacimiento":"22/09/2009"},{"nombre":"Juan","apellido":"Coprez","nacimiento":"12/04/1977"}]')


// 1. Levantar el objeto desde el localStorage con key=LISTADO
const json = localStorage.getItem('LISTADO'); // String
const objeto = JSON.parse(json); // Object
// console.log(objeto);

/*
0: {nombre: 'Pedro', apellido: 'Gomez', nacimiento: '11/05/1985'}       // 39
1: {nombre: 'Joaquin', apellido: 'Sotto', nacimiento: '21/10/1985'}     // 39
2: {nombre: 'Gabriela', apellido: 'Perez', nacimiento: '02/02/2010'}    // 14
3: {nombre: 'Agustina', apellido: 'Estevez', nacimiento: '21/08/1986'}  // 38
4: {nombre: 'Paola', apellido: 'Serra', nacimiento: '22/09/2009'}       // 15
5: {nombre: 'Juan', apellido: 'Coprez', nacimiento: '12/04/1977'}       // 47   */


function calcularEdad(fechaNacimiento) {
    const añoNacimiento = parseInt(fechaNacimiento[2]);
    const añoActual = new Date().getFullYear();
    return añoActual - añoNacimiento;
}
  
const personasMayores = objeto
    .filter(persona => calcularEdad(persona.nacimiento.split('/')) > 18)
    .map(persona => {
        const edad = calcularEdad(persona.nacimiento.split('/'));
        return {
            nombre: persona.nombre,
            apellido: persona.apellido,
            edad: edad
        };
});
 
// 3. Este array debe decir la edad de la persona
console.log(personasMayores);

// 4. Volver a guardar en localStorage bajo el mismo key
localStorage.setItem('LISTADO', JSON.stringify(personasMayores));

// 5. Mostrar por consola el resultado, asegurándose de que sea el requerido
console.log(localStorage.getItem('LISTADO'));