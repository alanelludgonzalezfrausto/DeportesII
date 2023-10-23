// Obtener referencias a elementos HTML por su ID
const username = document.getElementById('username'); // Elemento de entrada para el nombre de usuario
const password = document.getElementById('password'); // Elemento de entrada para la contraseña
const button = document.getElementById('button');     // Botón de envío

// Agregar un evento de escucha al botón cuando se haga clic
button.addEventListener('click', (e) => {
    e.preventDefault(); // Prevenir la acción predeterminada del formulario
    
    // Obtener los valores ingresados por el usuario y eliminar espacios en blanco al principio y al final
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    // Verificar si ambos campos (nombre de usuario y contraseña) están completos
    if (usernameValue === '' || passwordValue === '') {
        // Mostrar una alerta si alguno de los campos está vacío
        alert('Por favor, complete ambos campos (Nombre de usuario y Contraseña).');
    } else {
        // Redirigir a la página Deportes.html si ambos campos están completos
        window.location.href = 'Deportes.html';
    }
});
