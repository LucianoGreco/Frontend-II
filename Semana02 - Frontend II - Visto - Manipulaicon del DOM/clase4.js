/*
Expresion: Devuelve un valor como resultado
Sentencia: Realiza alguna accion */
const tree = [
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
//console.log(tree[0][1][1][1]); // 3B

// console.log('Precionar "aqui" para ingresar'); // colocar comillas dentro de comillas 
// console.log("Precionar 'aqui para ingresar"); // colocar comillas dentro de comillas 



/* ------------ DOM 
DOM: Interfase. Conecta el html con javaScript
    Arbol: Suseccion de nodos que se conectan entre si - Estructuras recursivas


DOM: document ------ Indica al html

    METODOS:
        .querySelector();   Captura un elemento por sus selectores css (etiqueta, clase, atributo, etc). 
                            Devuelve el primer elemento o null
                            .querySelectorAll(); Devuelve un array elementos (for - for in - for of )

                                let elemento = document.getElementById(".noticias article");


       .getElementsBy;      Captura un elemento por su id. 
                            Devuelbe el primer elemento o null
                            .getElementsByClassName();

                                let elemento = document.getElementById("miElemento");
*/

document.getElementsByClassName

// for of - for - RECORRE ELEMENTOS DE UN ARREGLO
let arraglo = document.querySelectorAll('h2');

for(let i of arraglo){ 
    //console.log(i.innerText); 
}

for(let i=0 ; i<areglo.length ; i++){
    let j = arraglo[i];
    //console.log(j.innerText);
}


// for in - RECORRE ATRIBUTOS DE UN OBJETO 
let objeto = {atributo1 : 'valor1', atributo2 : 'valor2'};
for(let i in objeto){ 
    //console.log(objeto[i]);
}

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// a - Escribir un selector para cada elemento del sitio y guardalo en una variable.
// b - Plasmarlo en un diagrama de árbol como la consigna: https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview


// Ejercicio A

// Titulo Principal
let titulo = document.querySelector('h1'); 
// console.log(titulo.innerText);


// Lista de categorias
let categorias = document.querySelectorAll('li');
for(let i of categorias){ 
    // console.log(i.innerText); 
}


// boton cambio de tema
let boton = document.querySelector('button');
// console.log(boton.innerText);


// Estado Clima
let clima = document.querySelector('.clima');
// console.log(clima.innerText);


// Estado Dolar
let dolar = document.querySelector('.dolar');
// console.log(dolar.innerText);


// titulo Articulo
let tituloArt = document.querySelectorAll('h2');
for(let i of tituloArt){ 
    // console.log(i.innerText); 
};


// Imagen Asticulo
let imagArt = document.querySelectorAll('img');
for(let i of imagArt){ 
    // console.log(i.innerText.innerText); 
};


// Parrafo articulos
let parrafoArt = document.querySelectorAll('p');
for(let i of parrafoArt){ 
    // console.log(i.innerText); 
};


// titulo pie de pagina
let pieDePagina = document.querySelector('footer');
// console.log(pieDePagina.innerText); 







