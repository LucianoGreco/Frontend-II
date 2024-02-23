
// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.

if (!localStorage.jwt) {
  location.replace('./index.html');
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  const urlTareas       = 'https://todo-api.ctd.academy/v1/tasks';
  const urlUsuario      = 'https://todo-api.ctd.academy/v1/users/getMe';
  const token           = JSON.parse(localStorage.jwt) 
  
  const formCrearTarea  = document.querySelector('form');
  const nuevaTarea = document.querySelector('#nuevaTarea');  
  const btnCerrarSesion = document.querySelector('#closeApp');

  function dividirProcesos(funcion){
    console.log("\n");
    console.log('Funcion N°: '+funcion);
    console.log("\n");
  }

  obtenerNombreUsuario();
  consultarTareas();


  /* -------------------------------------------------------------------------- */
  /*  ✅ FUNCIÓN 2 - Obtiene la informacion del usuario - [GET] /users/getMe    */
  /* -------------------------------------------------------------------------- */
  function obtenerNombreUsuario() {
    
    const configuracion = {
      method: 'GET',
      headers:{
        authorization: token
      }
    };
    
    // console.log("Consultando mi usuario...");
    fetch(urlUsuario, configuracion)
    .then(response => response.json())
    .then(data => {
      // console.log("Nombre de usuario:");
      // console.log(data);
      // console.log(data.firstName);  

      const nombreUsuario = document.querySelector('.user-info p');
      nombreUsuario.innerText = data.firstName;
    })

    .catch(error => console.log(error));
  }


  /* -------------------------------------------------------------------------- */
  /*  ✅ FUNCIÓN 4 - Crear una nueva tarea del usuario - [POST] /tasks          */
  /* -------------------------------------------------------------------------- */
  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();

    

    // capturamos la exprecion del input nueva tarea
    const tarea = {
      description: nuevaTarea.value.trim(),
      completed: false
    }


    const configuracion = {
      method: 'POST', 
      headers:{ 
        authorization: token,
        'Content-Type':'application/json',
      },
      body: JSON.stringify(tarea) 
    };


    fetch(urlTareas, configuracion)
      .then(respuesta => respuesta.json())
        .then(tareas => {
          console.log(tareas)

          consultarTareas();
        })
        .catch(error => console.log(error))


    formCrearTarea.reset();

  })


  /* -------------------------------------------------------------------------- */
  /*  ❌ FUNCIÓN 3 - Listado de tareas del usuario - [GET] /tasks              */
  /* -------------------------------------------------------------------------- */
  function consultarTareas() {
   
    // Obtiene las tareas 
    // a esta funcion la llamamos en el load
    const configuracion = {
      method: 'GET', 
      headers:{ 
        authorization: token
      }
    };


    fetch(urlTareas, configuracion)
      .then(response => response.json())
        .then(tareas => {
          console.table(tareas);

          renderizarTareas(tareas); // 1° renderiza
          botonesCambioEstado(); // 2° Cambia el estado
          botonBorrarTarea() // 3° Borrar tarea
        })
        .catch(error => console.log(error));

  };


  /* -------------------------------------------------------------------------- */
  /*  ✅ FUNCIÓN 5 - Renderizar tareas en pantalla                             */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {

    // Obtengo los elemento html donde se van a rederizar
    const tareasTerminadas = document.querySelector('.tareas-terminadas');
    const tareasPendientes = document.querySelector('.tareas-pendientes');
    
    // Limpio el contenido de los elementos html
    tareasPendientes.innerHTML = "";
    tareasTerminadas.innerHTML = "";
  

    // #6 Renderiza las tareas finalizadas
    const numeroFinalizadas = document.querySelector('#cantidad-finalizadas');

    const numeroPendientes = document.querySelector('#cantidad-pendientes');
    let contadorFinalizadas = 0;
    let contadorPendientes = 0;

        
/*  const tarea = {
      "id": 1,
      "description": "Aprender Javascript",
      "completed": false,
      "userId": 1,
      "createdAt": "2021-06-30T22:53:09.549Z"
    } */ 


    // #1. Recorre las tarea de la lista
    listado.forEach(tarea =>{

      // #5. setea la fecha segun el formato regional
      let fecha = new Date(tarea.createdAt)

      
      // #2. Separa las tarea terminadas de las pendientes
      if(tarea.completed){
        contadorFinalizadas++; // #6 Suma al contador por cada tarea completada

        // #3. Si la tarea es completada la renderiza en tareas terminadas
        tareasTerminadas.innerHTML += `
        <li class="tarea">
            <div class="hecha">
              <i class="fa-regular fa-circle-check"></i>
            </div>
            
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}"><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
              </div>
            </div>
          </li>
        `
      }
      else{
        contadorPendientes ++;
        // #4. Si la tarea es pendiente la renderiza en tareas pendiente
        tareasPendientes.innerHTML += `
          <li class="tarea">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            
            <div class="descripcion">
              <p class="nombre">${tarea.description}</p>
              <p class="timestamp">${fecha.toLocaleDateString()}
            </div>
          </li>
        `
      }
      // #7. Seteamos el contador
      numeroFinalizadas.innerText = contadorFinalizadas;
      numeroPendientes.innerText = contadorPendientes;
    })

  }


  /* -------------------------------------------------------------------------- */
  /*  ❌ FUNCIÓN 6 - Actualiza una tarea existente - [PUT] /tasks/{id}         */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {

    const btnCambioEstado = document.querySelectorAll('.change')

    btnCambioEstado.forEach(boton => {

      boton.addEventListener('click', function(event){
        console.log('Cambiando estado de tarea...');
        console.log(event);

        

        // # OPCION 1
        /* const tarea = {
            completed: !event.target.classList.contains('incompleta')
        }                                                             */


        // # OPCION 2
        /* const tarea = {};
        if(event.target.classList.contains('incompleta')){
          tarea.completed = false;
        } else{
          tarea.completed = true;
        }                                                   */

        // # OPCION 3
        const tarea = {}
        tarea.completed = event.target.classList.contains('incompleta') ? false : true;




        const configuracion ={
          method: 'PUT',
          headers:{
            authorization: token,
            "Content-type": "application/json"
          },
          body: JSON.stringify(tarea)// payload
        }



        const id = event.target.id;
        const url = `${urlTareas}/${id}`

        fetch(url, configuracion)
          .then(response => {
            console.log(response.status);
            consultarTareas();
          })
      })
    });

   
  }

  
  /* -------------------------------------------------------------------------- */
  /*  ❌ FUNCIÓN 7 - Eliminar una tarea - [DELETE] /tasks/{id}                  */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {

    const btnBorrarTarea = document.querySelectorAll('.borrar');

    btnBorrarTarea.forEach(boton => {

      boton.addEventListener('click', function(event){
        const id = event.target.id;
        const url = `${urlTareas}/${id}`
     

        const configuracion = {
          method: 'DELETE',
          headers:{
            authorization: token
          }
        }

      fetch(url, configuracion)
        .then(response => {
          console.log(response.status);
          consultarTareas();
        })
      })
    })
  }

  /* -------------------------------------------------------------------------- */
  /*  ✅ FUNCIÓN 1 - Cerrar sesión                                             */
  /* -------------------------------------------------------------------------- */
  btnCerrarSesion.addEventListener('click', function () {

    const cerrarSesion = confirm('¿Desea cerrar session?');

    if(cerrarSesion){
      localStorage.clear(); // // limpiamos el localstorage
      location.replace('./index.html'); // redireccioamos a login
    }
  });
});