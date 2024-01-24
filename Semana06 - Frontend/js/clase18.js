const URL_BASE = 'https://jsonplaceholder.typicode.com';

function llamarApi(){
    const configuraciones = {
        method: 'POST',
 
    };

    fetch(`${URL_BASE}/posts`, configuraciones)
}

/*
NOTA:


ESCRITURA: JSON

    Body 
        raw
            {"nombre":"prueba","ciudad":"BS AS"}


lECTURA:

    Error: Espera un texto plano:
        Header:
            key:            Value:
            Content-Type    text/plain

                Body
                    Pretty
                        { "id":101 }

                    

    Solucion: Debemos indicarle que es un json: ENDPOINT espera JSON
        Header:
            key:            Value:  
            Content-Type    application/jsonV
    
                Body
                    Pretty
                        {
                        "nombre": "prueba",
                        "ciudad": "BS AS",
                        "id": 101
                        }
            

*/