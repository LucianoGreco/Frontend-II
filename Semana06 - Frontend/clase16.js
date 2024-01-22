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
*/


/*
setTimeout(() =>{
    console.log('DENTRO del setTimeout'); // Flujo secundaroi
}, 3000);

console.log('FUERA del setTimeout'); // Flujo principal */

function pruebaPromesa(){
    return new Promise(functionPromesa);
}

// Promesa: pendiente, cumplirse o rechazada
function functionPromesa(resolve, reject){ // resolve, se relaciona con el .then
    
    setTimeout(() =>{
        if(Math.random() > 0.5){
            resolve('Coneccion exitosa!')
        }else{
            reject('Error de coneccion!')
        }
    }, 2000);
}

// En el .then() escribimos el codigo que queremos que se ejecute una vez terminada la promesa
pruebaPromesa()
    .then(function(respuesta){
        let parrafo = document.querySelector('p');
        parrafo.style.color = 'green';
        parrafo.innerText = respuesta;
    })
    .catch(function(error){
        let parrafo = document.querySelector('p');
        parrafo.style.color = 'red';
        parrafo.innerText = error;
    })

// console.log('Respuesta promesa'); // 36:22