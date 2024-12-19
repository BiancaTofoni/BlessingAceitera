document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
  });

// Selecciona el video
const video = document.getElementById('operaciones-video');

// Función que se ejecuta cuando la visibilidad de la página cambia
function handleVisibilityChange() {
  if (document.hidden) {
    // Si la página no está visible, pausa el video y silencia el audio
    video.pause();
    video.currentTime = 0; // Si quieres que el video vuelva al inicio
  }
}

// Escucha cuando la visibilidad de la página cambia
document.addEventListener('visibilitychange', handleVisibilityChange);

// Si el usuario cambia de página, también se detendrá el audio
window.addEventListener('beforeunload', function () {
  video.pause();
});


