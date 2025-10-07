window.addEventListener('DOMContentLoaded', (event) => {
    var slideIndex = 0;
    slides(slideIndex);
  });
    
  // Flechas siguiente/anterior foto
  function siguientefoto(n) {
    slides(slideIndex += n);
  }
   
  // Puntitos
  function botonfoto(n) {
    slides(slideIndex = n);
  }
   
  function slides(n) {
    var i;
    var slides = document.getElementsByClassName("slide"); //la variable slides va a ser un array con todas las fotos
    var dots = document.getElementsByClassName("dot");// la variable dots va a ser un array con los puntitos
    if (n > slides.length) {slideIndex = 1} // cdo estoy en la última foto y clicko siguiente: mostrará la primera (n=4 (>3), pongo n=1)
    if (n < 1) {slideIndex = slides.length} // cdo estoy en la primera foto y clicko anterior: mostrará la última (n=0 (<1), pongo n=3)
    for (i = 0; i < slides.length; i++) { //escondo todas las fotos
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) { //hago que los botones no estén activos (no seleccionados)
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    slides[slideIndex-1].style.display = "block"; //muestra la foto que toca
    dots[slideIndex-1].className += " active";   //activo el botón que he clickado
  }




