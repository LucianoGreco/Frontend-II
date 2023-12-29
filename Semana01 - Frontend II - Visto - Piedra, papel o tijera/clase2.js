/* CONSIGNA MESA DE TRABAJO: ✅
1. Crear una funcion que reciba como parametro un texto (la frase de resultado de la partida).
2. La funcion debe mostrar por consola el resultado de la partida.
3. A su vez debe mostrar al usuario una alerta con el resultado de la partida.
4. Finalmente, si el resultado fue una derrota debe motrarle al usuario un mesajue de aliento para que siga intentando. */

function jugarUsuario(){

    let jugadaUsuario;

    do{
        jugadaUsuario = parseInt(prompt('(1) Piedra ✊ - (2) Papel 🖐 - (3) Tijera ✌'));
    } while(isNaN(jugadaUsuario) || jugadaUsuario < 1 || jugadaUsuario > 3 );
    // IsNan: No es un número

    switch (jugadaUsuario) {
        case 1:
            console.log('\nUsuario: ✊');
            break
        case 2:
            console.log('\nUsuario: 🖐');
            break;
        case 3:
            console.log('\nUsuario: ✌'); 
            break;      
        default:
            break;
    }

    return jugadaUsuario;
}


function jugarComputadora(){
    let jugadaComputadora = parseInt(Math.random() * 3 + 1) // devuelve 0 cero pero NO 1

    switch (jugadaComputadora) {
        case 1:
            console.log('Computadora: ✊');
            break
        case 2:
            console.log('Computadora: 🖐');
            break;
        case 3:
            console.log('Computadora: ✌'); 
            break;      
        default:
            break;
    }
    return jugadaComputadora
}


function compararJugadas(){

    let usuario = jugarUsuario();
    let computadora = jugarComputadora();

    if(usuario == computadora){
        return 'E'
    }
    else if(usuario == 1 && computadora == 3 || 
            usuario == 2 && computadora == 1 ||
            usuario == 3 && computadora == 2 ) {
                return 'G'
    }
    else{
        return 'P'
    }
}





