

// Definir la función para mostrar el contenido
function mostrarContenido() {
    // Obtener los elementos por su ID
    var pantallaInicial = document.getElementById('pantalla-inicial');
    var contenidoPrincipal = document.getElementById('contenedor-principal'); 

    // Comprobamos si la pantalla inicial está visible
    if (pantallaInicial.style.display !== 'none') {
        // Ocultamos la pantalla inicial
        pantallaInicial.style.display = 'none';

        // Mostramos el contenido principal
        contenidoPrincipal.style.display = 'block';
    }
}

function aleatorio(){
    var fondo=document.getElementById('fondoImagen'); // Obtener el contenedor del fondo (elemento HTML)
    var personaje=document.getElementById('personaje'); // Obtener el personaje (elemento HTML)

    var personajeWidth= personaje.clientWidth; //obtener el ancho del persoje 
    var personajeHeight= personaje.clientHeight; //obtener la altura del personaje

    var fondoWidth = fondo.clientWidth; // Obtener el ancho del fondo
    var fondoHeight = fondo.clientHeight;  // Obtener la altura del fondo

    var randomX=Math.random()* (fondoWidth-personajeWidth); // Genera una posición aleatoria en X
    var randomY=Math.random()* (fondoHeight-personajeHeight); // Genera una posición aleatoria en Y
    
    personaje.style.position='absolute'; // Establecer la posición del personaje como absoluta
    personaje.style.left=randomX+'px'; // Establecer la posición horizontal (X) del personaje
    personaje.style.top=randomY+'px'; // Establecer la posición vertical (Y) del personaje
}

function moveUp() {
    var personaje = document.getElementById('personaje'); 
    
    // Obtener la posición actual del personaje
    var posicionTop = parseInt(personaje.style.top); // Obtiene la posición top
    
    // Moverlo 5px hacia arriba
    personaje.style.top = (posicionTop - 5) + "px"; // Reduce la posición 'top' en 5px
}

function moveDown() {
    var personaje = document.getElementById('personaje'); 
    
    // Obtener la posición actual del personaje
    var posicionDown = parseInt(personaje.style.top); // Obtiene la posición top
    
    // Moverlo 5px hacia abajo
    personaje.style.top = (posicionDown + 5) + "px"; 
}

function moveRight() {
    var personaje = document.getElementById('personaje'); 
    
    // Obtener la posición actual del personaje
    var posicionLeft = parseInt(personaje.style.left); 
    
    // Moverlo 5px hacia la derecha 
    personaje.style.left = (posicionLeft + 5) + "px"; 
}

function moveLeft() {
    var personaje = document.getElementById('personaje'); 
    
    // Obtener la posición actual del personaje
    var posicionRight = parseInt(personaje.style.left); 
    //Mover 5px a la izquierda
    personaje.style.left = (posicionRight - 5) + "px"; 
}


// Funcion para frases aleatorias

function frase(){
    var random; 
    random=Math.floor(Math.random()*5)+1; 

    switch (random) {
        case 1:
            document.getElementById('frase').innerHTML="hola";
            break;
        case 2:
            document.getElementById('frase').innerHTML="holaaaaa";
            break;
        case 3:
            document.getElementById('frase').innerHTML="adios";
            break;
        case 4:
            document.getElementById('frase').innerHTML="me";
            break;
        case 5:
            document.getElementById('frase').innerHTML="aa";
            break;
        default:
            break;
    }

    
}




