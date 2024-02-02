// Funcion de orden superior - algunas:
    // filter()
    // forEach()
    // setInterval()
    // setTimeout()


// ForEach - Opcion 1
albumesFamosos.forEach((element, i) => {
    // console.log(element);
    // console.log(i);
});

// ForEach - Opcion 2
function unaFuncion(element, i){
    // console.log(element);
    // console.log(i);
}
albumesFamosos.forEach(unaFuncion);


// for
for(let i = 0 ; i<albumesFamosos.length ; i++){
    let element = albumesFamosos[i]
    // console.log(element);
    // console.log(i);
}

// Funcion (closures)
function functionExterna() {
    let variableExterna = "variable externa";
    function functionInterna() {
      console.log('Funcion Interna llamando a la'+variableExterna);
    }

    return functionInterna();
}
// functionExterna() ;


//  a. setInterval() - Repite la ejecucion
//  b. setTimeout() - Retarda la ejecucion (unica vez)
//      Argumentos: funcion(){}, Tiempo(ms) 
function repiteRetaza(){
    // Repite
    let i = 0;
    setInterval(()=> {
        console.log('setInterval repite '+i);
        i++;
    }, 1000); // 1000ms 

    // Retarda
    setTimeout( () => {
        console.log('----- setTimeOut retarda');
    }, 3000);
}
// repiteRetaza()




const planesMensuales = [
    {
        tipo: "Básico",
        costo: 300,
        descripcion: "Podes escuchar música sin límites todo el mes."
    },
    {
        tipo: "Dúo",
        costo: 450,
        descripcion: "Música ilimitada para vos y alguien más."
    },
    {
        tipo: "Familiar",
        costo: 600,
        descripcion: "El mejor plan, hasta un total de 5 miembros."
    },
];



function carrterlDinamico(){

    const footer = document.querySelector('footer');

    let contador = 0;

    // load - Ejecuta cuando todos los recursos allan sido completados
    window.addEventListener('load', function(){
    
        const interval = setInterval( ()=>{
    
            // Reseteo del contador al llegar a ultimo elemento
            contador = contador % planesMensuales.length;
            
            // reseteo equivalente
            // if(contador === planesMensuales.length){
            //     contador = 0;
            // }
                    
            let i = planesMensuales[contador]//posicion
    
            footer.innerHTML = `
                <p>
                    Plan: ${i.tipo} <strong>${i.costo}</strong>
                </p>
                <p>
                    ${i.descripcion}
                </p>
            `;
            contador++
        }, 2000); 
    
        footer.addEventListener('dblclick', function(){
            
            clearInterval(interval);
            console.log('-----> finalizamos el intervlo');
        })
    })
}

carrterlDinamico()



// Añadimos la escucha del doble click en el footer para frenar el inntervalo


/*  📚 MESA DE TRABAJO ✅

    Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.

        1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
            conocer más música (podemos usar un confirm).
        2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
        3- Si el usuario cancela debemos agregar un parrafo dentro del div '.perfil'(sin eliminar nada dentro)
        4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
        5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: 
            "Gracias por confiar en nosotros." */


function redireccionarAMasContenido(){
    window.addEventListener('load', function () {
        setTimeout( () => {
            const respuesta = confirm('¿Desea conocer más música?');

            if(respuesta){
                window.open('https://open.spotify.com/intl-es', '_blank')
            }else{
                const perfil = document.querySelector('.perfil');
                perfil.innerHTML += '<p class="parrafo" style="color: green; font-size: 30px">Usuario oficial de spotifront 😎<p>'
                const parrafo = document.querySelector('.parrafo');
                parrafo.addEventListener('click',() => alert('Gracias por confiar en nosotros.'));
            }
        },1000);
    })
}
redireccionarAMasContenido()




/*
window.addEventListener('load', () => {
    document.querySelector('img');

    function unaFuncion(){
        // Esta funcion no se puede llamar por fuera de su scope
    }
});
unaFuncion(); //Funcion fuera de su scope */

