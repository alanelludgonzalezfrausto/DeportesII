// Esperar hasta que el documento HTML se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
    // Agregar animación cuando la página se ha cargado completamente
    
    // Busca un elemento con la clase CSS '.container'
    const container = document.querySelector('.container');
    
    // Agrega la clase 'visible' al elemento encontrado
    container.classList.add('visible');
});

// Función para mostrar un elemento con el ID "javaPopup"
function showJavaPopup() {
    // Obtén el elemento por su ID
    var popup = document.getElementById("javaPopup");
    
    // Establece el estilo de visualización en "block" para hacerlo visible
    popup.style.display = "block";
}

// Función para ocultar un elemento con el ID "javaPopup"
function closeJavaPopup() {
    // Obtén el elemento por su ID
    var popup = document.getElementById("javaPopup");
    
    // Establece el estilo de visualización en "none" para ocultarlo
    popup.style.display = "none";
}
