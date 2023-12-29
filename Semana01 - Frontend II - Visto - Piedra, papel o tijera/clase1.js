const UNA_VARIABLE = "No cambia el valor"
//UNA_VARIABLE = "cambioValor" // ERROR: No se puede asignar un valor de una variable constante

// == (Igualdad débil) ------- console.log(1 == '1');  // true
// === (Igualdad estricta) --- console.log(1 === '1');  // false




/*  function prompt(message?: string | undefined , _default?: string | undefined): string | null
        a.  message?: string | undefined,
        b.  _default?: string | undefined): string | null
        c.  ? = significa Opcional */

let valorIngresado = prompt("Ingrese el valor 33");
console.log(valorIngresado);

// Sentencia del flujo de ejecucion:
if(valorIngresado === 33){
    alert("El dato ingresado es correcto. ✅");
} else{
    alert("El dato ingresado es incorrecto. ❌");
} 



let nombres = ['Luciano','Celeste','Yanela','Gladys','Roly'];

// For(contador, condicion, contador++)
for(let i=0 ; i<nombres.length ; i++){
    if( nombres[i] == 'Luciano'){
        let nombre = nombres[i]
        console.log(nombre);
        break;
    }
}


// contador; While(condicion){ejecucion} 
let contador = 0; 
while(nombres[contador] != 'Luciano' && contador < nombres.length){
    contador++;
}
console.log(contador < nombres.length ? 'Se encotró' : 'No se enecontró');


// do{ejecucion}; while(condicion){ejecucion..
let nuevoIngreso;
do{
    nuevoIngreso = prompt('Ingresa un nuevo valor: ')
}while(datoIngresado2 != 33);
console.log(datoIngresado2); 

//--------------------- FIN DE NOTAS ----------------------------// */




/* CONSIGNA MESA DE TRABAJO: ✅
1. Modificar la funcion de iniciarJuego(); , validar si ingresa un dato válido como nombre.
2. Si no ingresa un texto, o tiene menos de 3 caracteres debemos volver a pedir que lo ingrese
3. Finalmente el nombre devuelte debe estar todo en mayusculas. */

function iniciarJuego(){   
    let nombre;
    do{
        nombre = prompt("Ingresa tu nombre: ");
        if(nombre.length < 3){
            alert("El nombre debe contener mas de 3 caracteres.");
        }
        else if(!nombre){
            break;
        }
    }while(nombre.length < 3);

    let mensaje = 'A jugar '+nombre+'. ¡Mucha Suerte!💪'
    alert(mensaje.toUpperCase()) // Mayuscula
}

iniciarJuego();