
// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
if (!localStorage.jwt) {
  location.replace('./index.html');
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  const ULR_BASE = 'https://todo-api.ctd.academy/v1';
  const btnCerrarSesion = document.querySelector('#closeApp');



  obtenerNombreUsuario();


  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */
  btnCerrarSesion.addEventListener('click', function () {

    const cerrarSesion = confirm('¿Desea cerrar session?');

    if(cerrarSesion){
      localStorage.clear(); // // limpiamos el localstorage
      location.replace('./index.html'); // redireccioamos a login
    }
  });



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */
  function obtenerNombreUsuario() {
  
    const configuracion = {
      method: 'GET',
      headers:{
        authorization: JSON.parse(localStorage.jwt)
      }
    };

    // console.log("Consultando mi usuario...");
    fetch(`${ULR_BASE}/users/getMe`, configuracion)
    .then(response => response.json())
    .then(data => {
      // console.log("Nombre de usuario:");
      // console.log(data);
      console.log(data.firstName);

      const nombreUsuario = document.querySelector('.user-info p');
      nombreUsuario.innerText = data.firstName;
    })

    .catch(error => console.log(error));
  }



  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {
   
  };



  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */
  // formCrearTarea.addEventListener('submit', function (event) {
  //   event.preventDefault();
    
  // })

  // function crearTarea(descripcionTarea){

  //   const tarea = {
  //       description: descripcionTarea,
  //       completed: false
  //   }

  //   const jwt = JSON.parse(localStorage.getItem('jwt'))

  //   const configuracion = {
  //       method: 'POST', 
  //       headers:{ 
  //           'Content-Type':'application/json', 
  //           'Authorizacion': jwt
  //       },
  //       body: JSON.stringify(tarea), 
  //   };

  //   fetch(`${ULR_BASE}/tasks`, configuracion)
  //       .then(respuesta => respuesta.json())
  //           .then(datos => console.log(datos));

  // }


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {

  }



  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {

  }



  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {

  }

});