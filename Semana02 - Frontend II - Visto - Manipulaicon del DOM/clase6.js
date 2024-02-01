
function agregarAtributoYValorAlElemento(){
    // AGREGAMOS ATRIBUTO Y VALOR AL ELEMENTO
    let contador = 1; // Se inicializa el contador
    imagen.forEach(i => {
        i.setAttribute('alt',`Imagen n° ${contador}.`);
        contador++;
    });
}
// agregarAtributoYValorAlElemento()


function agregarTextoAlFooter(elemento,mensaje){
    //AGREGAR TEXTO AL FOOTER 

    // Opcion 1 - appendChild: Agrega un nodo hijo al final del nodo padre
    // Crear el elemento <p>
    const parrafoFooter = document.createElement('p');
    // Crea el texto para el párrafo
    // const texto1 = document.createTextNode('Este es el texto con appendChild');
    const texto = document.createTextNode(mensaje);
    // Agrega el texto al párrafo
    parrafoFooter.appendChild(texto);
    // Agrega el párrafo al footer
    elemento.appendChild(parrafoFooter); 

    
    // Opcion 2 - innerHTML: Agrega contenido html al elemento 
    // Crea una variable con la clase .red
    const className = 'red'; 
    // Agrega html, asignandole una clase y contenido
    footer.innerHTML = `<p class='${className}';>Este es el texto con innerHTML.</p>`; // todo en una sola linea
    
}
// agregarTextoAlFooter(footer,'Este es el texto con appendChild');






const nuevasNoticias = [
    {
        titulo: 'Argenita tiene nuevo presidente',
        parrafo: 'Despues de tantos años de fracaso, Argentina decide ser un pais liberal con vision capitalista',
        foto: './img/JavierMilei.jpg'
    },
    {
        titulo: 'El automovil mal atractivo del mundo',
        parrafo: 'Lamborghini es considerado el auto mas atractivo segun una encuesta realizada por la revista superautos',
        foto: './img/lamborghini.jpg'
    },
    {
        titulo: 'Programador Serial',
        parrafo: 'Luciano Greco es el desarrollador mas copado que existe en el mundo',
        foto: './img/LucianoGreco.jpeg'
    },
];

function crearElementoYAregarContenido(elemento, arreglo){

    for(let i of arreglo) {

        // Crear el elemento <h2>
        const h2 = document.createElement('h2'); 
        h2.innerText = i.titulo; 
    
        // Crear el elemento <img>
        const img = document.createElement('img'); 
        img.setAttribute('src', i.foto);
    
        // Crear el elemento <p>
        const p = document.createElement('p');
        p.textContent = i.parrafo;
    
        // Crear el elemento <article>
        const article = document.createElement('article'); 
        // Anidacion
        elemento.appendChild(article);
        article.appendChild(h2);
        article.appendChild(img); 
        article.appendChild(p);
    }
}

const main = document.querySelector('.noticias');
// crearElementoYAregarContenido(main, nuevasNoticias)





/*  📚 CONSIGNA MESA DE TRABAJO ✅                        
Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
Una vez que solo tenemos el código comentado podemos empezar la practica. ✔

    1- Debemos reutilizar el "nuevasNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
    2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas 
       Literales (con comillas invertidas -> ``)
    3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML 
       para insertar la plantilla creada.

       Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
       document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`; */

function renderiazandoElementos(elemento,arreglo){    

    // OPCION 1 - for of - Distinta sintaxis 
    //   // Recorre el array de noticias
    //   for (let i of arreglo) {
    //       //Crea la plantilla utilizando plantillas literales
    //       let article = `
    //           <article>
    //                 <h2>${i.titulo}</h2>
    //                 <img src="${i.foto}" alt="${i.titulo}">
    //                 <p>${i.parrafo}</p>
    //           </article>
    //       `;
  
    //       // Inserta la plantilla en el contenedor utilizando innerHTML
    //       elemento.innerHTML += article;
    //   }   


    // OPCION 2 - for of
    for(let i of arreglo){
        // Creamos un elemento div para contener la noticia
        const elementoArticle = document.createElement('article');
        elementoArticle.classList.add('noticia');

        // Construimos la plantilla HTML utilizando la notación de Plantillas Literales
        elementoArticle.innerHTML = `
            <img src="${i.foto}" alt="${i.titulo}">
            <h2>${i.titulo}</h2>
            <p>${i.parrafo}</p>
        `;

        // Insertamos la noticia en el contenedor
        elemento.appendChild(elementoArticle);
    };


        // OPCION 3 - forEach
    // Iteramos sobre cada noticia en el array
    // arreglo.forEach(i => {
    //     // Creamos un elemento div para contener la noticia
    //     const elementoArticle = document.createElement('article');
    //     elementoArticle.classList.add('noticia');

    //     // Construimos la plantilla HTML utilizando la notación de Plantillas Literales
    //     elementoArticle.innerHTML = `
    //         <img src="${i.foto}" alt="${i.titulo}">
    //         <h2>${i.titulo}</h2>
    //         <p>${i.parrafo}</p>
    //     `;

    //     // Insertamos la noticia en el contenedor
    //     elemento.appendChild(elementoArticle);
    // });
}

renderiazandoElementos(main, nuevasNoticias);












































