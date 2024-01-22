
const objeto = { 
    nombre: 'Luciano', 
    apellido: 'Greco', 
    edad : 32
};

//Desestructuracion de la variable
const {nombre, apellido} = objeto;
// console.log(nombre);
// console.log(apellido);

let [a,b, ...rest] = ['a','b','c','d','e','f'];
// console.log(a);
// console.log(b);
// console.log(rest);


// const arrayData = ['1','2','3','4','5'];
// const { 0:first, [arrayData.length-1]:last, ...rest} = arrayData;

// console.log(first); // 1
// console.log(last);  // 5
// console.log(rest);  // 2,3,4


// MAP - Funcion de orden superior
//Se utiliza para generar una copia del array y NO para recorrer el array como el caso del forEach

const array = ['Luciano', 'Gabriel', 'Greco', 'Celeste'];

// Opcion a.
const copia1 = array.map(i => {
    return i.toUpperCase();
});


// Opcion b.
const copia2 = array.map(functionParaMap)
function functionParaMap(i){
    return i.toUpperCase();
}

// console.log(copia1); // ['LUCIANO', 'GABRIEL', 'GRECO', 'CELESTE']
// console.log(copia2); // ['LUCIANO', 'GABRIEL', 'GRECO', 'CELESTE']


const array2 = [
    {nombre:'Luciano', edad:32, id:1},
    {nombre:'Gabriel', edad:30, id:2},
    {nombre:'Greco', edad:28, id:3},
    {nombre:'Celeste', edad:25, id:4}
]

const copia3 = array2.map(i => {
    // return i.nombre; // ['Luciano', 'Gabriel', 'Greco', 'Celeste']
    return{
        nombre : i.nombre,
        nombreMayuscula: i.nombre.toLocaleLowerCase(),
        id: i.id
    }
});

// console.log(copia3);

/* MESA DE TRABAJO 

1. levantar el objeto desde el localStorage con key=LISTADO

2. Devolver un array con nombre, apellido y edad(calculado) 
    de las personas mayores de 18 años (hay que usar map y filter)
3. Este array debe decir la edad de la persona
4. VOlver a guardar en localStorage bajo el mismo key
5. Mostrar por consola el resultado, asegurandose de que sea 
    el requerido
*/

localStorage.setItem('LISTADO',
'[{"nombre":"Pedro","apellido":"Gomez","nacimiento":"11/05/1985"},{"nombre":"Joaquin","apellido":"Sotto","nacimiento":"21/10/1985"},{"nombre":"Gabriela","apellido":"Perez","nacimiento":"02/02/2010"},{"nombre":"Agustina","apellido":"Estevez","nacimiento":"21/08/1986"},{"nombre":"Paola","apellido":"Serra","nacimiento":"22/09/2009"},{"nombre":"Juan","apellido":"Coprez","nacimiento":"12/04/1977"}]')

// localStorage.setItem('LISTADO',
// '[{"nombre":"Pedro","apellido":"Gomez","nacimiento":"11/05/1985"}]')


// 1. Levantar el objeto desde el localStorage con key=LISTADO
const listaString = localStorage.getItem('LISTADO'); // String
const lista = JSON.parse(listaString); // Object
// console.log(lista);

/*
0: {nombre: 'Pedro', apellido: 'Gomez', nacimiento: '11/05/1985'}
1: {nombre: 'Joaquin', apellido: 'Sotto', nacimiento: '21/10/1985'}
2: {nombre: 'Gabriela', apellido: 'Perez', nacimiento: '02/02/2010'}
3: {nombre: 'Agustina', apellido: 'Estevez', nacimiento: '21/08/1986'}
4: {nombre: 'Paola', apellido: 'Serra', nacimiento: '22/09/2009'}
5: {nombre: 'Juan', apellido: 'Coprez', nacimiento: '12/04/1977'} */


// lista.filter().map()
const personasMayores = lista
  .filter(persona => {
    const fechaNacimiento = new Date(persona.nacimiento).getFullYear();
    const edad = new Date().getFullYear() - fechaNacimiento;
    return edad > 18;
  })
  .map(persona => {
    const fechaNacimiento = new Date(persona.nacimiento);
    const edad = new Date().getFullYear() - fechaNacimiento.getFullYear();
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