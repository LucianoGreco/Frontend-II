/*
// FUNCION DECLARADA NOMINAL 

function funcionDeclaradaNominal(parametro1, parametro2){
    return parametro1 + parametro2;
} 

// FUNCION EXPRESADA NOMINAL - Funciones Flechas
let funcionExpresadaNominalA = (num1, num2) => { return num1 + num2 }; //   return explicito
let funcionExpresadaNominalD = (num1, num2) => num1 + num2; //              return implicito
let funcionExpresadaNominalB = num1 => console.log(num1); //                1 parametro
let funcionExpresadaNominalC = () => console.log('hola'); //                Sin parametros

// FUNCION ANONIMA DECLARADA
() => console.log('Luciano'); 


// DOM - Capturo el boton
const button = document.querySelector('button');

function mostrarMensaje(){ 
    console.log('Algo nuevo');
}

// Funcion declarada nominal
button.addEventListener('click', mostrarMensaje);
button.onclick = mostrarMensaje;

// Funcion declarada anonima
button.addEventListener('click', function(evento){
    console.log('Algo nuevo', evento);
})
button.onclick = function(evento){
    console.log('Algo nuevo', evento);
}

// Funcion expresada anónima
button.addEventListener('click', evento => console.log('Algo nuevo', evento))
button.onclick = evento => console.log('Algo nuevo', evento);


// console.log(mostrarMensaje());   // resultado
// console.log(mostrarMensaje);     // ƒ funcion(){ console.log('..'); }

*/


 
function agregarQuitarFavorito(){
    const botones = document.querySelectorAll('.fa-heart')

    for(let boton of botones) {

        // A todos los eventos renderizados les agregamos el envento click
        boton.addEventListener('click', function(){
            // console.log(boton.id); 

            //Cuando el evento click se dispara se ejecuta este codigo
            for(let album of albumesFamosos){

                if(album.id == boton.id){
                    // album.like = !album.like;
                    album.like = this.classList.toggle('favorito'); // Agrega y quita
                    console.log(boton.id, album.like); 
                }
  
            }

            renderizarAlbunes(albumesFamosos); // renderizando
            agregarQuitarFavorito(); // Tenemos que Habilitar los eventos

        });
    }
}
agregarQuitarFavorito();

/* ----------------------------- MESA DE TRABAJO ---------------------------- */
/*                         [5] FUNCION: Eliminar album                        */
/* -------------------------------------------------------------------------- */ /*
Debemos desarrollar la funcion de eliminar un album. Para esto le vamos a 
preguntar al usuario cual quiere eliminar.

Vamos a seguir las indicaciones que nos permiten lograrlo utilizando eventos.

    1- Hay que escuchar el evento de 'keydown' para detectar cuando el usuario
    presiona la tecla f
    2- Una vez que detectamos la tecla, debemos mostrarle un prompt al usuario
    para que ingrese el nombre del album que desea eliminar
    3- Podemos buscar la posicion del almbum buscado en el array con la funcion .findIndex()
    4- Si la busqueda nos da un resultado válido, procedemos a borrar el objeto del array
    5- Acto seguido debemos llamar a las funciones de renderizar y marcar favorito 
    para que sean nuevamente aplicadas. 
    
    
    Para buscar la posicion del almbum en el array
    a.  .findIndex() 
    b.  for(let album of albumesFamosos){ if(album.id == boton.id){...} }

    */




function eliminarAlbum() {
    // desarrollar la función 👇


}
eliminarAlbum();

