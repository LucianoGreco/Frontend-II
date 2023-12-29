// Funcion de orden superior - algunas:
// filter()
// forEach()
// setInterval()
// setTimeout()


// itera y ejecuta la funcion de cada elemento
albumesFamosos.forEach((element, index) => {
    console.log(element);
    console.log(index);
});


// EQUIVALENTE
albumesFamosos.forEach(unaFuncion);
function unaFuncion(element, index){
    console.log(element);
    console.log(index);
}

// EQUIVALENTE
for(let index = 0 ; index<albumesFamosos.length ; index++){
    let element = albumesFamosos[index]
}


// Funcion (closures)
function outerFunction() {
    let outerVariable = "Soy externa";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }




/*  setInterval() - REPITE LA EJECUCION 
Ejecuta la funcion repetidamente en intervalos especificos
    Toma 2 argunmentos= setTimeout(funcion(){}, tiempo) */ 

    let i = 0;
    setInterval(()=>{
        console.log('setInterval cada 1 segundno '+i);
        i++;
    }, 1000); // 1000ms 


/* setTimeout() - RETARDA LA EJECUCION POR UNICA VEZ
Ejecuta la funcion despues de un tiempo (ms) determinado
    Toma 2 argunmentos= setTimeout(funcion(){}, tiempo) */ 

    setTimeout(() => {
        console.log('setTimeOut 3 segudnos');
    }, 3000);




const planesMensuales = [{
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


let contador = 0;
const footer = document.querySelector('footer');

// load - Se ejecuta cuando las descargas, renderizado imágenes, estilos, y scripts allan sido completadas
window.addEventListener('load', function(){

    const interval = setInterval(()=>{

        // Reseteo del contador al llegar a ultimo elemento
        contador = contador % planesMensuales.length;
        // EQUIVALENTE
        // if(contador === planesMensuales.length){
        //     contador = 0;
        // }
                
        let plan = planesMensuales[contador]//posicion

        footer.innerHTML = `
            <p>Plan: ${plan.tipo}
                <strong>
                    ${plan.costo}
                </strong>
            </p>
            <p>
                ${plan.descripcion}
            </p>
        `;
        contador++
    }, 500); 

    footer.addEventListener('dblclick', function(){
        clearInterval(interval);
        console.log('-----> finalizamos el intervlo');
    })
})

// Añadimos la escucha del doble click en el footer para frenar el inntervalo


/*  MESA DE TRABAJO  

Vamos a utilizar el setTimeout para preguntarle al usuario despues de unos segundos.

    1- Una vez cargada la página y pasados 12 segundos debemos preguntarle al usuario si desea
       conocer más música (podemos usar un confirm).
    2- Si el usuario confirma debemos abrir una nueva pestaña en -> https://open.spotify.com/
    3- Si el usuario cancela debemos agregar un parrafo dentro del div '#perfil'(sin eliminar nada dentro)
    4- El parrafo agregado debe ser de color verde y decir: "Usuario oficial de Spotifront"
    5- Por ultimo, si ese parrafo es clickeado, debe mostrar una alerta al usuario que diga: 
"Gracias por confiar en nosotros." */


const perfil = document.querySelector('.perfil'); 

// load: cargar - carga todos los elementos del html,css,js,img,url etc
window.addEventListener('load', function () {
    setTimeout(() => {

        let confirmar = window.confirm('¿Desea conocer más música?'); 

        if (confirmar) {
            window.open('https://open.spotify.com/', '_blank'); 

        } else {
            perfil.innerHTML += '<p class="parrafo" style="color: green">Usuario oficial de Spotifront</p>';
            const parrafo = document.querySelector('.parrafo');

            parrafo.addEventListener('click', function () {
                alert('Gracias por confiar en nosotros.');
            });
        }
    }, 12000); 
});


/*
window.addEventListener('load', () => {
    document.querySelector('img');

    function unaFuncion(){
        // Esta funcion no se puede llamar por fuera de su scope
    }
});
unaFuncion(); //Funcion fuera de su scope */

