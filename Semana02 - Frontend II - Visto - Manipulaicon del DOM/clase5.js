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


function manupulacionDom(){

    // CAPTURAR ELEMENTOS
    // const body = document.querySelector('body') // Capturamos el body
    // const titulo = document.querySelector('h1'); // Capturamos el titulo
    // //const subtitulos = document.querySelectorAll('h2'); //  Capturamos todos los subtitulos 
    // const dolar = document.querySelector('.dolar') // Capturamos informacion solar

    let objetoDolar = {
        Compra: 1000.51,
        Venta: 1000.66
    };

    function modificarColor(elemento, color){

        // a. Modificar estolo
        elemento.style.color = `${color}`; //---------- <h1 style.color = 'red'>Titulo</h1>

        // b. Modificar la clase
        //elemento.className = 'colorBlue'; // Setiamos el nombre de la clase
       
        // css =
            //  .letraRoja{ color: red; }
            //  .letraVerde{ color: greed; }

        // html =  <h1 class="letraVerde">Titulo</h1> 
    }
    
    function modificarContenido(elemento, textoActual){
    //a. innerText

        //a. Obtiene el texto
        let textoAnterior = elemento.innerText; 
        console.log(textoAnterior); // Guardo el titulo anterior: Frontend News

        //b. Establece el texto
        elemento.innerText = `${textoActual}`; 
            

    // b. innerHTML
        //a. Obtiene el html
            let contenidoHTML = elemento.innerHTML; // <h1 id="miElemento">..</h1>
            console.log(contenidoHTML);

        //b. Establece el html
            //elemento.innerHTML = "<p>Hace mucho calor 🌞</p>"; 
    } 
   
    function modificarElementos(elementos, html, texto1, texto2, color, clase){

        for(let i of elementos){ //  ----------- Recorremos
            i.innerHTML = `${html}` // -------------- Reemplaza las etiquetas <h2> por <p>
            i.innerText = `${texto1}` //--------------- Asignamos (=) un texto 
            i.innerText += ` ${texto2}`.toUpperCase() //- Concatena un texto en mayuscula
            i.style=`background-color: ${color}`; // --- Agrega un estilo a la etiqueta
            i.className = `${clase}`; // ----------------- Agrega una clase a la etiqueta red
        } 
    }

    function cambiarTamaño(elemento){
        // Verifica si la clase petenece al elemento (true false.)
        let tamaño = elemento.classList.contains('body-small'); //  CSS: .body-small { font-size: 8px; }
        console.log(tamaño);

        if(tamaño){
            elemento.classList.add('body-small');
        }
        else{
            elemento.classList.remove('body-small');
        }

        elemento.classList.toggle('body-small'); // toggle: Activa y desactiva
    }
    
    function actualizarValoarDolar(elemento, objeto){
        elemento.innerText = 
        `💸 Dolar Hoy ( Compra: $${objeto.Compra} / Venta: $${objeto.Venta} )`;
    }

    modificarColor(titulo,'blue');
    modificarContenido(clima, 'Hace mucho calor 🌞')
    modificarElementos(subtitulos,'<p></p>','Luciano','Greco','black','red');
    cambiarTamaño(titulo);
    actualizarValoarDolar(dolar, objetoDolar);
}

manupulacionDom();






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





