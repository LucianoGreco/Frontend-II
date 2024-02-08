// json = [ { "clave" : "valor" }] 


// Objeto
let objeto = [ 
    {   // [0]
        "hombre":"Luciano",
        "mujer":"Celeste"
    }, 
    {   // [1]
        "hamster":"Papon", 
        "eriso":"Milei"
    }
]
// console.log(objeto);
//console.log(typeof objeto); 
//console.log(objeto[0].hombre);



// Transforma objeto a string-(Json)
let json = JSON.stringify(objeto);

// console.log(json);
// console.log(typeof json);
// console.log(json[0].hombre); // undefined 

  


// Transforma Json a objeto
let objetoDeserealizado = JSON.parse(json);

// console.log(objetoDeserealizado);
// console.log(typeof objetoDeserealizado); // object
// console.log(objetoDeserealizado[0].a); 





// Le decimos al window que leea todo al terminar de cargar los recursos
window.addEventListener('load', () => { 

    const usuario = recuperarDatosDelStorage();
    mostrarDatosUsuario(usuario);

    botonCerrarSesion();

    // Verificar si hay una fecha de ingreso almacenada
    const ultimaFechaIngreso = localStorage.getItem('ultimaFechaIngreso');
    
    if (ultimaFechaIngreso) {
        console.log('Última fecha de ingreso:', ultimaFechaIngreso);
    } else {
        // Si es la primera vez, guardar la fecha de ingreso
        guardarFechaIngreso();
    }
});



// Obtengo el usuario del localStoreg en formato JSON 
function recuperarDatosDelStorage(){

    // Captura el objeto 
    //                  sessionStorage.getItem('USER');
    const usuarioJson = localStorage.getItem('USER');


    // b. lo convierto a un objeto
    const usuario = JSON.parse(usuarioJson)

    // c. Devolvemos el objeto
    return usuario
}


function mostrarDatosUsuario(usuario){
    const email = document.querySelector('#email');
    const perfil = document.querySelector('#perfil');
    
    /* USER
    const estadoUsuario = {
        email: '',
        password: '',
        rol: '',
        terminos: ''
    }; */
    email.innerText = usuario.email;
    perfil.innerText = usuario.rol;
}


/*  📚 [9] FUNCION: Boton de cerrar sesion ✅ 
    Ahora vamos a crear elementos en el DOM dinamicamente y le asignaremos a esos elementos la escucha de eventos.
    ☝ La funcion debe ser ejecutada al final del evento Load.
    La idea es crear un boton para cerrar sesión. Entonce necesitamos cumplir los siguientes puntos:

        1- Crear un elemento <button>
        2- Que ese botón tenga el texto "Cerrar sesión"
        3- El boton tiene que tener ciertos estilos:
                - padding arriba y abajo de 5px y a los costados 20px
                - color de fondo rojo con transparencia: rgba(255,0,0,0.2)
                - color de letra rojo
                - margenes a todos los lados de 20px
                - ningún borde
                - cursor de tipo pointer

        4- Tenemos que agregar el botón en pantalla, adentro del div con la clase 'user', al final del mismo

        5- El botón debe reaccionar cuando se le hace click
        6- Mediante el click debe aparecer un cuadro de confirmación que pregunte: "¿Seguro desea cerrar sesión?"
        7- Si el usuario acepta debe borrar todo el storage y redirigirlo a la pantalla de Login. */

// Bonus track: al ingresar al sitio guardar la fecha y hora de ingreso.
// Al volver a ingresar, mostrar por console.log la ultima fecha de ingreso


function botonCerrarSesion() {

    const usuario = document.querySelector('.user'); // usuario.html

    // Crear el elemento <button> y asignar atributos y estilos
    const botonCerrar = document.createElement('button');

    botonCerrar.textContent = 'Cerrar sesión';
    botonCerrar.style.padding = '5px 20px';
    botonCerrar.style.backgroundColor = 'rgba(255,0,0,0.2)';
    botonCerrar.style.color = 'red';
    botonCerrar.style.margin = '20px';
    botonCerrar.style.border = 'none';
    botonCerrar.style.cursor = 'pointer';
    //botonCerrar.classList = 'boton' // agrega una clase con un estilo predefinido en el css
    
    
    // Agregar el botón al final del div con la clase 'user'
    usuario.appendChild(botonCerrar);


    // Agregar evento de clic al botón
    botonCerrar.addEventListener('click', (e) => {
        e.preventDefault();

        // Preguntar al usuario antes de cerrar la sesión
        let confirmacion = confirm("¿Seguro desea cerrar sesión?");

        if (confirmacion) {
            // Borrar todo el storage
            localStorage.clear();
            
            // Redirigir a la pantalla de Login
            window.location.href = 'index.html';
        }
        // Si el usuario cancela, no hace nada
    });
}


function guardarFechaIngreso() {
    // Obtener la fecha y hora actual
    const fechaActual = new Date();
    
    // Guardar la fecha de ingreso en el localStorage
    localStorage.setItem('ultimaFechaIngreso', fechaActual.toString());
}

