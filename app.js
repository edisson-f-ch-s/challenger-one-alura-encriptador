// Función para encriptar texto
function encriptarTexto(texto) {
    let textoEncriptado = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return textoEncriptado;
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    let textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return textoDesencriptado;
}

function manejarMapaYEncriptador() {
    const contenedorMapa = document.querySelector('.contenedor-mapa');
    const encriptador = document.getElementById('contenedor-encriptador');
    const botonMapa = document.getElementById('boton-mapa');

    if (!contenedorMapa.classList.contains('abierto')) {
        contenedorMapa.classList.add('abierto');
        botonMapa.textContent = "Travesura realizada";

        // Retrasar la aparición del encriptador y la desaparición del mapa
        setTimeout(() => {
            encriptador.classList.add('visible');
            encriptador.classList.remove('oculto');
            contenedorMapa.style.display = 'none'; // Ocultar el mapa después de que el encriptador aparece
        }, 500); // Retraso de 1 segundo para permitir que la animación del mapa se complete

    } else {
        encriptador.classList.remove('visible');
        encriptador.classList.add('oculto');

        // Retrasar la reaparición del mapa y su cierre
        setTimeout(() => {
            contenedorMapa.style.display = 'flex'; // Mostrar el mapa
            setTimeout(() => {
                contenedorMapa.classList.remove('abierto'); // Cerrar el mapa suavemente
                botonMapa.textContent = "Juro solemnemente que mis intenciones no son buenas";
            }, 500); // Retraso para permitir que el mapa reaparezca antes de cerrarse
        }, 500); // Retraso antes de mostrar nuevamente el mapa
    }
}

// Vincular la función al botón y al mapa
document.getElementById('boton-mapa').addEventListener('click', manejarMapaYEncriptador);
document.querySelector('.contenedor-mapa').addEventListener('click', manejarMapaYEncriptador);
