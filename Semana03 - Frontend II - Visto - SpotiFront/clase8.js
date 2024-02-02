// a. FUNCION DECLARADA NOMINAL 
function funcionDeclaradaNominal(parametro1, parametro2){
    return parametro1 + parametro2;
} 

// b. FUNCION EXPRESADA NOMINAL - Funciones Flechas
let funcionExpresadaNominalA = (num1, num2) => { return num1 + num2 }; //   return explicito
let funcionExpresadaNominalD = (num1, num2) => num1 + num2; //              return implicito
let funcionExpresadaNominalB = num1 => console.log(num1); //                1 parametro
let funcionExpresadaNominalC = () => console.log('hola'); //                Sin parametros

// c. FUNCION ANONIMA DECLARADA (No tiene nombre)
() => console.log('Luciano'); 


function probandoFunciones(){

    // Creo un boton y le agrego una clase
    const boton = document.createElement('button');
    boton.classList.add('boton');
    boton.innerText = 'BOTON'
    // Capturo el perfil
    const perfil = document.querySelector('.perfil')
    // a perfil le agrego un boton
    perfil.appendChild(boton);



    // OPCION 1 - Funcion declarado nominal
    function mostrarMensaje(){ 
        console.log('Funcion declarada nominal');
        boton.innerText = 'Funcion declarada nominal';
    }

    // Dispara el evento con la funcion mostrarMensaje()
    // boton.addEventListener('click', mostrarMensaje);
    boton.onclick = mostrarMensaje;



    // OPCION 2 - Funcion declarada anonima 
    boton.addEventListener('click', function(evento){
        console.log('Funcion declarada anonima',evento);
        boton.innerText = 'Funcion declarada anonima';
    }) 
    // boton.onclick = function(evento){
    //     console.log('Funcion declarada anonima',evento);
    //     boton.innerText = 'Funcion declarada anonima';
    //} 



    // OPCION 3 - Funcion expresada anónima
    boton.addEventListener('click', evento => {
        console.log('Funcion expresada anónimao', evento)
        boton.innerText = 'Funcion expresada anónima';
    })
    //boton.onclick = evento => console.log('Funcion expresada anónima', evento);
}

// probandoFunciones()



function agregarQuitarFavorito(){

    const corazones = document.querySelectorAll('.fa-heart')
        
    for(let corazon of corazones) {

        // A todos los eventos renderizados les agregamos el envento click
        corazon.addEventListener('click', function(){         

            // OPCION 1 - Cuando el evento click se ejecuta el for complpeto
            /*
            for(let album of albumesFamosos){
                if(album.id == corazon.id){
                    album.like = !album.like; // le asigna un like distinto al que tenia album.like
                    //album.like = this.classList.toggle('favorito'); // Agrega y quita
                }
            }
            */



            // OPCION 2 - Filtramos el album de elementos por el id utilizado el metodo filter() => array
            let album = albumesFamosos.filter( i => i.id == corazon.id)[0]; // FUNCION FLECHA EXPRESADA ANONIMA
            album.like = !album.like

            /* EQUIVALENTE A filter() 
            function filterBy(album) {
              
            } */

          

            // console.log(corazon.id);
            renderizarAlbunes(albumesFamosos); // volvemos a renderizar
            agregarQuitarFavorito(); // volvemos a habilitar los eventos
        });
    }
}
agregarQuitarFavorito(); 




/* 📚 [5] FUNCION: ELIMNAR ALBUNES ✅

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
        b.  for(let album of albumesFamosos){ if(album.id == boton.id){...} }*/

    /* Albunes:
        1. Nevermind
        2. Thriller
        3. The wall
        4. Abbey Road
        5. Origin of Symmetry
        6. Back in Black
    */


function eliminarAlbum() {
    
    // keydown: Captura los caracteres del teclado
    document.addEventListener('keydown', function(event) {
        
        if (event.key === 'f') {
            const nombreAlbumEliminar = prompt('Ingrese el nombre del álbum que desea eliminar:');

            // OPCION: N°1
            const index = albumesFamosos.findIndex(album => album.nombre === nombreAlbumEliminar);

            
            // OPCION: N°2 
            /*
            let index = -1; // Inicializamos el índice con un valor que indica que no se encontró el álbum

            for (let i in albumesFamosos) {
                if (albumesFamosos[i].nombre === nombreAlbumEliminar) {
                    index = i; // Asignamos el índice si encontramos el álbum
                    break; // Salimos del bucle una vez que encontramos el álbum
                }
            }b
            */

            if (index !== -1) {

                albumesFamosos.splice(index, 1); // Remove the album at the found index
                //index:    índice del álbum desde donde se compienza a eliminar.
                //1:        Cantidad de elementos a eliminar a partir del indice
                
                renderizarAlbunes(albumesFamosos); 
                agregarQuitarFavorito(); 
            } 
            else {
                alert('Álbum no encontrado');
            }
        
        }
    });
}
eliminarAlbum();

  