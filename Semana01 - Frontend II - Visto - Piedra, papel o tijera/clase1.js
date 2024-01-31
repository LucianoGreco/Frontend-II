const UNA_VARIABLE = "No cambia el valor"
//UNA_VARIABLE = "cambioValor" // ERROR: No se puede asignar un valor de una variable constante



/*
    1 a. PROMPT
        function prompt(message?: string | undefined , _default?: string | undefined): string | null
            a.  message?: string | undefined,
            b.  _default?: string | undefined): string | null
            c.  ? = significa Opcional 
##############################################################################################################*/ /*
let valorIngresado_1; // Inicializacion de una variable
//valorIngresado_1 = prompt("Ingrese 1"); // String

// Sentencia del flujo de ejecucion:
//         Igualdad débil) ----> 1 == '1';  // true
//         Igualdad estricta) -> 1 === '1';  // false 
if(valorIngresado_1 === 1){
    //alert("El dato ingresado es correcto. ✅");
} else{
    //alert("El dato ingresado es incorrecto. ❌"); // false es String
} 




/*
    2. RECORRER UN ARREGLO
##############################################################################################################*/ /*
let nombres = ['Luciano','Celeste','Yanela','Gladys','Roly'];

let nombreIngresado;
// let nombreIngresado = prompt("Ingrese un nombre: "); // Devuelve un String



//  1. FOR -> For(contador, condicion, contador++) 
for(let i=0 ; i<nombres.length ; i++){
    let nombreEncotrado;

    if( nombres[i] === nombreIngresado){
        nombreEncotrado = nombres[i];
        //console.log('Se encontro en la posicion N°'+ (i+1));
        break;
    }else{
        //console.log('No se encontro '+nombreIngresado);
    }
}



//  2. WHILE ->contador; While(condicion){ejecucion} 
let i = 0; // contador
let nombreEncotrado;

while(nombres[i] != nombreIngresado && i < nombres.length){
    nombreEncotrado = nombres[i]
    i++;
}
//console.log('Posicion: '+ (i+1)); // Luciano

    //  a - OPERADOR TERNARIO  
    //console.log(i < nombres.length ? 'Ternario: Se encontro en la posicion N°'+ (i+1) : 'Ternario: No se encontro '+ nombreIngresado); 

    //  b - CONDICIONAL IF ELSE 
    if(i < nombres.length){
        //console.log('if-Else: Se encontro en la posicion N°'+ (i+1));
    }else{
        //console.log('if-Else: No se enecontró '+ nombreIngresado);
    } 


    
//  3. DO WHILE -> do{ejecucion}; while(condicion){ejecucion
let valorIngresado_2 = '';
do{
    
   //valorIngresado_2 = prompt('Ingrese 2: ');
}while(valorIngresado_2 != 2);
//console.log(valorIngresado_2); 







/*  📚 CONSIGNA MESA DE TRABAJO: ✅
        ✅1. Modificar la funcion de iniciarJuego(); 
        ✅2. Validar: 
                a. si ingresa un dato válido como nombre.
                b. Si no ingresa un texto,
                c. Si tiene menos de 3 caracteres debemos volver a pedir que lo ingrese
        ✅3. El nombre devuelto debe estar todo en mayusculas. */

function iniciarJuego(){  

    let nombre;
    do{
        nombre = prompt("Ingresa tu nombre: ");
        if(nombre.length < 3){
            alert("El nombre debe contener mas de 3 caracteres.");
        }
    }while(nombre.length < 3);

    let mensaje = 'A jugar '+nombre+'. ¡Mucha Suerte!💪'
    alert(mensaje.toUpperCase()) // Mayuscula
}

iniciarJuego(); 