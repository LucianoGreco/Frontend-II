/* PROPIEDADES DEL DOM 
a. classList: Manipula las clases de un elemento.

    Métodos: 
        a. add(class1, class2, ...): ---- Agrega clases
        b. remove(class1, class2, ...): - Elimina clase.
        c. toggle(class, force): -------- Alterna entre clases, (true: Agrega. / false: Elimina. )
        d. contains(class): ------------- Verifica si la clase petenece al elemento (true false.)
        e. replace(oldClass, newClass): - Reemplaza una clase con otra.

            let element = document.getElementById("miElemento");
                element.classList.add("nuevaClase");
                element.classList.remove("claseExistente");


b. className: Remplasa la clase

            let element = document.getElementById("miElemento");
            element.className = "nuevaClase"; */ 

function prueba (){
// MANIPULAR ELEMENTOS:
    // Capturo el elemento
    const elemento = document.querySelector(''); // </h1>
    //let elemento = document.getElementById("miElemento"); // miElemento

        // a. Modificar estolo
        elemento.style.color = 'red'; //---------- <h1 style.color = 'red'>Titulo</h1>
        // b. Modificar la clase
        elemento.className = 'letra'; // Setiamos el nombre de la clase
       
        // css =
            //  .letraRoja{ color: red; }
            //  .letraVerde{ color: greed; }

        // html =  <h1 class="letraVerde">Titulo</h1> 



// PROPIEDADES DE JAVASCRIPT 

    //a. innerText: Devuelve o establece el texto dentro del elemento
        //a. Obtiene 
            let texto = elemento.innerText; 
        //b. Establece
            elemento.innerText = "Nuevo texto"; 

    // b. innerHTML: Devuelve o establece contenido html incluyendo etiquetas
        //a. Obtiene
            let contenidoHTML = elemento.innerHTML; // <h1 id="miElemento">..</h1>
        //b. Establece (Remplaza al anterior)
            elemento.innerHTML = "<p>Nuevo texto</p>"; 



// RECORRE UN ARREGLO DE ELEMENTOS

    // Capturamos todos los <h2><h2> 
    let arrayElementos = document.querySelectorAll(''); // h2
    
    for(let i of arrayElementos){ //  ----------- Recorremos
        i.innerHTML = "<p></p>" // -------------- Reemplaza las etiquetas <h2> por <p>
        i.innerText = 'Luciano' //--------------- Asignamos (=) un texto 
        i.innerText += ' Greco'.toUpperCase() //- Concatena un texto en mayuscula
        i.style="background-color: black;" // --- Agrega un estilo a la etiqueta
        i.className = 'red'; // ----------------- Agrega una clase a la etiqueta
    } 



// MODIFICAR EL TAMAÑO DE LA LETRA 

    // Capturamos el body
    let body = document.querySelector('body') // body

    function cambiarTamaño(body){
        // Verifica si la clase petenece al elemento (true false.)
        let tamaño = body.classList.contains('body-small'); //  CSS: .body-small { font-size: 8px; }
        console.log(tamaño);

        if(tamaño){
            body.classList.add('body-small');
        }
        else{
            body.classList.remove('body-small');
        }

        body.classList.toggle('body-small'); // toggle: Activa y desactiva
    }  
    cambiarTamaño(body); 



// ACTUALIZAR EL VALOR DEL DOLAR Y RENDERIZARLO 
    let Dolar = {
        Compra: 1000.51,
        Venta: 1000.66
    };

    function actualizarValoarDolar(valorDolar){
        const dolar = document.querySelector('.dolar')

        dolar.innerText = 
        `💸 Dolar Hoy ( Compra: $${valorDolar.Compra} / Venta: $${valorDolar.Venta} )`;
    }
    actualizarValoarDolar(Dolar);
}




//--------------------- FIN DE NOTAS ----------------------------// */



/* CONSIGNA MESA DE TRABAJO
    1. Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
    2. Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
    3. Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
    4. Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
    5. A su vez, si está en modo oscuro, el texto del boton debe decir "Cambiar a modo claro 🌞". 
        de lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛" */

function elegirTema() {
    const boton = document.getElementById("Boton");
    const body = document.querySelector('body');

    let temaOscuro = false;
    boton.innerText = 'Modo oscuro 🌛';

    boton.addEventListener("click", function() {
        // Si doy click cambia el modo oscura de true a flase
        temaOscuro = !temaOscuro;      

        if (temaOscuro) {
            body.classList.add('dark');
            boton.innerText = 'Modo claro 🌞';
        } else {
            body.classList.remove('dark');
            boton.innerText = 'Modo oscuro 🌛';
        }
    });
}
elegirTema();





