// console.log("Prueba");



//const UNA_VARIABLE = "No cambia el valor"
//UNA_VARIABLE = "cambioValor" // ERROR: No se puede asignar un valor de una variable constante



/* function prompt(message?: string | undefined, _default?: string | undefined): string | null

    2 parametros:
        message?: string | undefined,
        _default?: string | undefined): 
                                        Devuelve: string | null

        ? = significa Opcional

*/ /*

let datoIngresado = prompt("Ingrese el valor 33");
console.log(datoIngresado);

// Sentencia del flujo de ejecucion:
if(datoIngresado == 33){
    alert("El dato ingresado es correcto. ✅");
} else{
    alert("El dato ingresado es incorrecto. ❌");
} */ /*

let nombres = ['Luciano','Celeste','Yanela','Gladys','Roly'];



for(let i=0 ; i<nombres.length ; i++){
    
    if( nombres[i] == 'Luciano'){
        let nombre = nombres[i]
        console.log(nombre);
        break
    }
}



let contador = 0
while(nombres[contador] != 'Luciano' && contador < nombres.length){
    contador++;
}
console.log(contador < nombres.length ? 'Se encotró' : 'No se enecontró');



let datoIngresado;
do{
    datoIngresado = prompt('Ingresá el valor 33')
}while(datoIngresado != 33);
console.log(datoIngresado); */


//--------------------- FIN DE NOTAS ----------------------------//




/* CONSIGNA MESA DE TRABAJO: ✅
1. Modificar la funcion de iniciarJuego(); , validar si ingresa un dato válido como nombre.
2. Si no ingresa un texto, o tiene menos de 3 caracteres debemos volver a pedir que lo ingrese
3. Finalmente el nombre devuelte debe estar todo en mayusculas. */

function iniciarJuego(){   
    let nombre;
    do{
        nombre = prompt("Por favor, ingresa tu nombre:");
        if(nombre.length < 3){
            alert("Por favor, ingresa un nombre válido con al menos 3 caracteres.");
        }
        else if(!nombre){
            break
        }
    }while(nombre.length < 3);

    let mensaje = 'Gracias por juigar '+nombre+'. ¡Mucha Suerte!💪'
    alert(mensaje.toUpperCase())
}

iniciarJuego();