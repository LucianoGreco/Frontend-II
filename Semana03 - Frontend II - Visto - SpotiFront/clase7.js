// Obtener y colocar nombre de usuario
function obtenerUsuario(){
    let nombre

    // Validar nombre
    do{ 
        // nombre = prompt('Ingresá tu nombre: ');
        nombre = 'Luciano'
        
    }while(nombre == null || nombre.length < 3 || !isNaN(nombre));

    const nombreUsuario = document.querySelector('#nombreUsuario');
    nombreUsuario.innerText = nombre;
}
obtenerUsuario();


const albumesFamosos = [{
    // i = 0
    id: "x123",
    nombre: "Nevermind",
    imagen: "https://m.media-amazon.com/images/I/71DQrKpImPL._SL1400_.jpg",
    like: true
},
{
    // i = 1
    id: "y456",
    nombre: "Thriller",
    imagen: "https://img.discogs.com/LfnH5tbhcZ4xRMNLAodIyvea9xA=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-294033-1151290881.jpeg.jpg",
    like: true
},
{
    // i = 2
    id: "z789",
    nombre: "The wall",
    imagen: "https://img.discogs.com/EbLYco6R1A-5Z7QJ4t4O1JSzsM8=/fit-in/587x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4620059-1370165707-3841.jpeg.jpg",
    like: false
},
{
    // i = 3
    id: "a987",
    nombre: "Abbey Road",
    imagen: "https://cloudfront-us-east-1.images.arcpublishing.com/copesa/RDH5EPH2TNENPI73NBWUWWMLPA.jpg",
    like: false
},
{
    // i = 4
    id: "b654",
    nombre: "Origin of Symmetry",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_967206-MLA26105577132_102017-O.webp",
    like: false
},
{
    // i = 5
    id: "c321",
    nombre: "Back in Black",
    imagen: "https://i1.wp.com/www.scienceofnoise.net/wp-content/uploads/2020/07/068660474366a63e1263e53ff370eb50.jpg",
    like: false
}
];


// Mostrar o redenderizar albunes
function renderizarAlbunes(albumesFamosos){
    const covers = document.querySelector('.covers');
    covers.innerHTML = ''

    for(let i of albumesFamosos){ // lista[i]
        covers.innerHTML += `
            <li id='${i.id}'>
                <img src='${i.imagen}'>
                <p>${i.nombre}</p>
                <i id='${i.id}' class='fa fa-heart  ${i.like ? 'favorito' : ''}'></i>
            </li>`;
    }

    /* 
    <i class='fa fa-heart ${getFavorito(i)}'></i> // Corazon Comentado
    function getFavorito(i){
        if(i.like){
            return 'favorito';
        }
        return '';
    }  
    */
}
renderizarAlbunes(albumesFamosos)



/*  📚 [3] FUNCION: mostrar datos del usuario ✅

Dentro del div '.perfil' tenemos un parrafo con 2 span en los que debemos colocar
correctamente su contenido.

Para eso debemos hacer ciertos calculos y colocar esa info en el HTML. Debemos:
    1- contar la cantidad de albumes  y mostrarlo en el span correspondiente
    2- contar la cantidad de favoritos y mostrarlo en el span correspondiente
    3- tener en cuenta: usar las palabra en plural o en singular, según cuando
    sea necesario ( es decir: 1 album, 1 favorito / 2 albumes, 3 favoritos ) */ 


function mostrarDatosEnPerfil(elemento) {

    const albunes = document.querySelector('#cant-albums');
    const favoritos = document.querySelector('#cant-favoritos');

    const cantidadAlbunes = elemento.length; // Cantidad de albunes
    
    // for of = Array []
    // for in = objetos {}
    let cantidadFavoritos = 0; // Cantidad de favoritos
    for (let i in elemento) {
        if (elemento[i].like) {
            cantidadFavoritos++;
        }
    }

    const textoAlbun = cantidadAlbunes === 1 ? 'álbum' : 'álbumes';
    const textoFavorito = cantidadFavoritos === 1 ? 'favorito' : 'favoritos';

    albunes.innerText = `${cantidadAlbunes} ${textoAlbun}`;
    favoritos.innerText = `${cantidadFavoritos} ${textoFavorito}`;
}
mostrarDatosEnPerfil(albumesFamosos);


/* Precedencia de operadores
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_precedence
*/