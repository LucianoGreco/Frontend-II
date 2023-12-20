// seleccionar imganen
/*
let imagenes = document.querySelectorAll('.noticias article img');

let contador = 1;
for ( let i of imagenes){
    // console.log(i.src);
    i.setAttribute('alt',`Imagen n° ${contador}.`);
    contador++;
}

//AGREGAR TEXTO AL FOOTER
const footer = document.querySelector('footer'); // captura

// Opcion 1 - appendChild
const parrafo = document.createElement('p'); // crea parrafo
const texto = document.createTextNode('Esto es un texto de prueba'); // crea texto
footer.appendChild(parrafo); // Agrega el parrafo al footer
parrafo.appendChild(texto); //  Agrega el texto al parrafo

// Opcion 2 - template Literal
const className = 'red'; 
footer.innerHTML = `<p class='${className}';>Esto es un texto de prueba.</p>`; // todo en una sola linea

*/

const listadoNoticias = [
    {
    titulo: 'La emocion de Lisandro Martinez',
    parrafo: 'La increíble ovación de los hinchas de Manchester United al defensor argentino: "Quise llorar".',
    foto: './img/futbol.webp'
    },
    {
    titulo: 'La renuncia de Liz Truss',
    parrafo: 'Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.',
    foto: './img/boris.webp'
    },
    {
    titulo: 'Los motivos',
    parrafo: 'Una escuela argentina fue elegida entre las diez mejores del mundo.',
    foto: './img/escuela.webp'
    },
    // {
    // titulo: 'Luciano Greco',
    // parrafo: 'Luciano Greco es un programador de San Rafel mendoza que quiere irse de vacaciones a Mar del Plata',
    // foto: './img/LucianoGreco.jpeg'
    // }
];

/*
const main = document.querySelector('main');

for(let i of listadoNoticias) {

    const article = document.createElement('article'); // - creo <article>
    
    const h2 = document.createElement('h2'); // -------- creo <h2>
    h2.innerText = i.titulo; //------------------------- ingreso el titulo

    const img = document.createElement('img'); // ------- creo <img>
    img.setAttribute('src', i.foto); //------------------ ingreso la imagen (objeto)

    const p = document.createElement('p'); // -------- creo <p>
    p.textContent = i.parrafo;

    // Anidacion
    main.appendChild(article);
    article.appendChild(h2);
    article.appendChild(img); 
    article.appendChild(p);
    
}
*/

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */ /*
Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
Una vez que solo tenemos el código comentado podemos empezar la practica. ✔
✔    1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
    2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas 
Literales (con comillas invertidas -> ``)
    3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML 
para insertar la plantilla creada.
Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`; */

function renderiazandoElementos(listadoNoticia){

      // Selecciona el contenedor donde se insertarán los elementos
      const main = document.querySelector('main');

      // Recorre el array de noticias
      for (let i of listadoNoticia) {
          // Crea la plantilla utilizando plantillas literales
          let article = `
              <article>
                    <h2>${i.titulo}</h2>
                    <img src="${i.foto}" alt="${i.titulo}">
                    <p>${i.parrafo}</p>
              </article>
          `;
  
          // Inserta la plantilla en el contenedor utilizando innerHTML
          main.innerHTML += article;
      }
}
renderiazandoElementos(listadoNoticias);












































