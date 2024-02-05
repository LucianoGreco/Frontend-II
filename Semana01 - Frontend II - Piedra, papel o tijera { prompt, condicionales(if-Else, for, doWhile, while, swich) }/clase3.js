/* DIFERENCIAS

for(): Recorre cantidad de veces
        Inicializa itrador
            Verifica la condicion 
                Itraccion (aumenta o disminuye)
                        Ejecucion del codigo

while: Recorre mientras se cumpla una condicion
        Inicializa itrador
            Verifica la condicion 
                Ejecucion del codigo
                    Itraccion (aumenta o disminuye)


do while: Recorre y continua segun la condicion
        Inicializa itrador
            Ejecucion del codigo
                Verifica la condicion 
                    Itraccion (aumenta o disminuye)

//--------------------- FIN DE NOTAS ----------------------------// */



/* 📚 CONSIGNA MESA DE TRABAJO ✅
✅1. Modificar el objeto puntajes para poder contabilizar los empates tambien
✅2. Modificar el bucle para poder sumar tambien las cantidades de empates
✅3. Mostrar en cada partida el resultado al usuario
✅4. Mostrar finalmente la cantidad de partidas jugadas y que se sepa quien gano o empato */


// Gana el primer jugador que llega a 2 puntos
function empezarJuego(){
    const CATIDAD_INTENTOS_PARA_GANAR = 3;

    let puntajes = {
        contadorUsuario : 0,
        contadorComputadora : 0,
        contadorEmpates : 0
    };
    

    // Si uno NO cumpla la condicion no se ejecuta el codigo de While
    while ( puntajes.contadorUsuario < CATIDAD_INTENTOS_PARA_GANAR &&
            puntajes.contadorComputadora < CATIDAD_INTENTOS_PARA_GANAR &&
            puntajes.contadorEmpates < CATIDAD_INTENTOS_PARA_GANAR ){

        const resultado = compararJugadas(); // return G,P,E
        
        if(resultado === 'G'){
            console.log('GANASTE ✅');
            puntajes.contadorUsuario++
        }
        else if(resultado === 'P'){
            console.log('PERDISTE ❌');
            puntajes.contadorComputadora++
        }
        else{
            console.log('EMPATE 💙');
            puntajes.contadorEmpates++
        }

        console.log(puntajes);
        // console.log('\nPartidas Usuario: ' +puntajes.contadorUsuario);
        // console.log('Partidas Computadora: ' +puntajes.contadorComputadora);
        // console.log('Partidas Computadora: ' +puntajes.contadorEmpates);

        
    }

    mostrarGanador(puntajes) // Array con los puntajes correspondientes
}



function mostrarGanador(puntaje){

    // OPERADOR TERNARIO:  condicion ? true: false
    console.log(puntaje.contadorUsuario === 3 ? '\nFELICIADADES GANASTE 🎉🎊🎇' : '\nLO SIENTO MUCHO - PERDISTE 😌👎');

    /*
    if (puntaje.contadorUsuario == 3){
        console.log('\nFELICIADADES GANASTE 🎉🎊🎇');
    } 
    else if(puntaje.contadorComputadora == 3){
        console.log('\nLO SIENTO MUCHO - PERDISTE 😌👎');
    }
    else{
        console.log('\nHUBO UN EMPATE 🤜🤛');
    }*/

    console.log('\nPartidas Ganadas Usuario: '+puntaje.contadorUsuario+
                '\nPartidas Ganadas Computadora: '+puntaje.contadorComputadora+
                '\nPartidas Empatadas: '+puntaje.contadorEmpates);
                      
}
empezarJuego()
    





