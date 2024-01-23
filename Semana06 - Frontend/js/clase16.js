/*
a. HTTP:
	Cliente ---> Peticion ---> Servidor
	Cliente <--- Respueta <--- Servidor

b. ASINCRINISMO O CONCURRENCIA - Varios procesos que ocurren al mismo tiempo

	The cost of I/O (Costo input(entrada-Leer) y Output(salida-Escribir))

		Cycles - Unidad de medida de tiempo

			L1-cache	3 cycles - Memoria
			L2-cache	14 cycles - Memoria
			RAM		250 cycles - Memoria
			Disk		41 000 000 cycles - Memoria (Disco c)
			Network		240 000 000 cycles - Red

	
b. AJAX (Convinacion de HTTP Y CONCURRENCIA)
Promise: Promesa que represenata eventual finalizacion (o falla) de una operacion asincronica y su valor resultante


setTimeout(() =>{
    console.log('DENTRO del setTimeout'); // Flujo secundaroi
}, 3000);

console.log('FUERA del setTimeout'); // Flujo principal */










function pruebaPromesa(){
    return new Promise(functionPromesa);
}

function functionPromesa(resolve, reject){ 
    setTimeout(() =>{
        if(Math.random() > 0.5){
            resolve([{userName:'usuario1',password:'1234'},{userName:'usuario2',password:'5678'}])
        }else{
            reject('Error de coneccion!')
        }
    }, 2000);
}


const boton = document.querySelector('button');
boton.addEventListener('click', function() {

    pruebaPromesa()
        .then(function(respueta){ // resove
            let parrafo = document.querySelector('p');
            parrafo.style.color = 'green';
            parrafo.innerText = JSON.stringify(respueta[1]);
        })
        .catch(function(error){ // reject
            let parrafo = document.querySelector('p');
            parrafo.style.color = 'red';
            parrafo.innerText = error;
    })
} )







/* [3] FUNCION: Pintar en pantalla 
En este caso la consigna será más abierta, se explicitarán los requerimientos
pero hay varias maneras de llegar al resultado.
    1- Hay que desarrollar esta función para que reciba los comentarios y los muestre en pantalla.
    2- La funcion debe ser llamada en el lugar correspondiente.
    3- En el HTML hay un comentario creado, el mismo debe ser eliminado de ahí, pero hay que respetar
        esa estructura de etiquetas para el resto de los comentarios.
    4- Para el renderizado podemos utilizar .forEach() pero se valora también intentar
        llegar al mismo resultado utilizando .map()
Muchos éxitos! */ /*

let listadoComentarios = [{
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate …utem quasi\nreiciendis et nam sapiente accusantium'
},
{
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body: 'est natus enim nihil est dolore omnis voluptatem n…iatur\nnihil sint nostrum voluptatem reiciendis et'
}, {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body: 'quia molestiae reprehenderit quasi aspernatur\naut …mus et vero voluptates excepturi deleniti ratione'
}, {
    postId: 1,
    id: 4,
    name: 'alias odio sit',
    email: 'Lew@alysha.tv',
    body: 'non et atque\noccaecati deserunt quas accusantium u…r itaque dolor\net qui rerum deleniti ut occaecati'
}, {
    postId: 1,
    id: 5,
    name: 'vero eaque aliquid doloribus et culpa',
    email: 'Hayden@althea.biz',
    body: 'harum non quasi et ratione\ntempore iure ex volupta…ugit inventore cupiditate\nvoluptates magni quo et'
}, {
    postId: 2,
    id: 6,
    name: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    email: 'Presley.Mueller@myrl.com',
    body: 'doloribus at sed quis culpa deserunt consectetur q…utem\nvoluptatem repellendus aspernatur dolorem in'
}, {
    postId: 2,
    id: 7,
    name: 'repellat consequatur praesentium vel minus molestias voluptatum',
    email: 'Dallas@ole.me',
    body: 'maiores sed dolores similique labore et inventore … corporis molestiae mollitia quia et magnam dolor'
}, {
    postId: 2,
    id: 8,
    name: 'et omnis dolorem',
    email: 'Mallory_Kunze@marie.org',
    body: 'ut voluptatem corrupti velit\nad voluptatem maiores…samus maiores\nvoluptates quia aliquid ullam eaque'
}, {
    postId: 2,
    id: 9,
    name: 'provident id voluptas',
    email: 'Meghan_Littel@rene.us',
    body: 'sapiente assumenda molestiae atque\nadipisci laboru…natur odit sit rem expedita\nquas enim ipsam minus'
}, {
    postId: 2,
    id: 10,
    name: 'eaque et deleniti atque tenetur ut quo ut',
    email: 'Carmen_Keeling@caroline.name',
    body: 'voluptate iusto quis nobis reprehenderit ipsum ame…s\nnostrum quaerat nulla et accusamus nisi facilis'
}, {
    postId: 3,
    id: 11,
    name: 'fugit labore quia mollitia quas deserunt nostrum sunt',
    email: 'Veronica_Goodwin@timmothy.net',
    body: 'ut dolorum nostrum id quia aut est\nfuga est invent…s quo est\nut blanditiis quia ut vel ut maiores ea'
}
];


function consultaAsincrona(texto) {
    return new Promise((resolve, reject) => {
        // simulamos la espera de info del servidor con el setTimeout
        setTimeout(function(){
            // chequeamos que el texto sea el correcto
            // esto simula lo que a futuro vamos a hacer con fetch()
            if(texto === "endpoint"){
                // si está OK devolvemos el listado
                resolve(listadoComentarios);
            } else{
                // otra posibilidad es que la promesa sea rechazada
                reject({
                    mensaje: "Consulta rechazada."
                })
            }
        }, 2500)
    })
}


function renderizarElementos(listado) {
    // Mapear cada comentario a su representación HTML
    const comentariosHTML = listado.map(comentario => `
        <div class="comentario">
            <h4>${comentario.email}</h4>
            <p>${comentario.body}</p>
        </div>
    `);

    // Unir los elementos HTML en una cadena
    const contenidoHTML = comentariosHTML.join('');

    // Insertar el contenido en el contenedor deseado
    const contenedorComentarios = document.querySelector('.comentario');
    contenedorComentarios.innerHTML = contenidoHTML;
}

// Llamar a la función de consulta asíncrona y luego renderizar los comentarios
consultaAsincrona("endpoint")
    .then(renderizarElementos)
    .catch(error => console.error(error));


*/