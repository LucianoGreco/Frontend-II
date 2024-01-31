/*
Expresion: Devuelve un valor como resultado
Sentencia: Realiza alguna accion */
const array = [
    [
        ['1A'],
        [
            ['2A','2B','2C'],
            ['3A','3B'],
            ['4A',['5A','5B'],'4B']
        ],
    ],
    [
        ['6A','6B','6C','6D','6E']
    ],
    ['7A','7B']
]

//console.log(array[0][1][1][1]); // 3B

// console.log('Precionar "aqui" para ingresar'); // colocar comillas dentro de comillas 
// console.log("Precionar 'aqui' para ingresar"); // colocar comillas dentro de comillas 


/*
    1. DOM 
############################################################################################################## 

DOM: Interfase. Conecta el html con javaScript
    Arbol: Suseccion de nodos que se conectan entre si - Estructuras recursivas


DOM: document ------ Indica al html

    METODOS:
        .querySelector();   Captura un elemento por sus selectores css (etiqueta, clase, atributo, etc). 
                            Devuelve el primer elemento o null
                            .querySelectorAll(); Devuelve un array elementos. Se recorren con (for - for in - for of )

                                let elemento = document.getElementById(".noticias article");


       .getElementsBy;      Captura un elemento por su id. 
                            Devuelbe el primer elemento o null
                            .getElementsByClassName();

                                let elemento = document.getElementById("miElemento");
*/




/*
    2. for of - for - RECORRE ELEMENTOS DE UN ARREGLO
############################################################################################################## */

let titulos = document.querySelectorAll('h2');

// for of
for(let i of titulos){ 
    // console.log(i.innerText); // innerText accede al contenido textual dentro de un elemento HTMl
}

// for
for(let i=0 ; i<titulos.length ; i++){
    let j = titulos[i];
    // console.log(j.innerText);
}


// for in - RECORRE ATRIBUTOS DE UN OBJETO 
let objeto = {atributo1 : 'valor1', atributo2 : 'valor2'};
for(let i in objeto){ 
    // console.log(objeto[i]);
}

//--------------------- FIN DE NOTAS ----------------------------// */




/*  📚 CONSIGNA MESA DE TRABAJO ✅                  
a - Escribir un selector para cada elemento del sitio y guardalo en una variable.
b - Plasmarlo en un diagrama de árbol como la consigna: 
https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview */ 


// .a
const body = document.querySelector('body') // Capturamos el body
body.classList.add("body");
const titulo = document.querySelector('h1'); // Titulo Principal
titulo.classList.add("titulo");
const boton = document.querySelector('button'); // boton cambio de tema
boton.classList.add("boton");
const clima = document.querySelector('.clima'); // Estado Clima
clima.classList.add("clima");
const dolar = document.querySelector('.dolar'); // Estado Dolar
dolar.classList.add("dolar");
const pieDePagina = document.querySelector('footer'); // titulo pie de pagina
pieDePagina.classList.add("pieDePagina");
const categorias = document.querySelectorAll('li'); // Lista de categorias
categorias.forEach(i => i.classList.add("categoria"));
const subtitulos = document.querySelectorAll('h2'); // titulo Articulo
subtitulos.forEach(i => i.classList.add("subtitulos"));
const imagen = document.querySelectorAll('img'); // Imagen Asticulo
imagen.forEach(i => i.classList.add("imagen"));
const parrafo = document.querySelectorAll('p'); // Parrafo articulos
parrafo.forEach(i => i.classList.add("parrafon"));








