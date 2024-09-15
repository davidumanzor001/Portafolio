document.addEventListener("DOMContentLoaded", function() {
    var imagen = document.getElementById('imagen_about');
    imagen.style.transition = 'transform 2s ease'; // 
    setTimeout(function() {
      imagen.style.transform = 'translateX(50px)'; 
    }, 100); 
  });