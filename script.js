document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

 // Función para cambiar la emisora cuando se selecciona una opción en el <select>
 function cambiarEmisora() {
  var reproductor = document.getElementById("reproductor-audio");
  var emisoraSeleccionada = document.getElementById("emisoras").value;
  var source = document.createElement("source");
  source.src = emisoraSeleccionada;
  source.type = "audio/mpeg";
  reproductor.innerHTML = ""; // Eliminar el contenido actual del reproductor
  reproductor.appendChild(source);
  reproductor.load();
}
                      
function calculate() {
    // Obtener los valores ingresados
    var dollarValue = document.getElementById("dollarInput").value;
    var amount = document.getElementById("amountInput").value;
  
    // Validar que se hayan ingresado valores válidos
    if (dollarValue && amount) {
      // Realizar el cálculo
      var result = dollarValue * amount;
  
      // Mostrar el resultado
      document.getElementById("result").innerHTML = "Resultado: " + result;
    } else {
      // Mostrar mensaje de error si no se ingresaron valores válidos
      document.getElementById("result").innerHTML = "Por favor, ingresa los valores correctos.";
    }
  }
  window.addEventListener("DOMContentLoaded", function() {
    var carouselContainer = document.getElementById("carousel-container");
    var carousel = document.getElementById("carousel");
    var banners = carousel.getElementsByClassName("banner");
    var currentIndex = 0;
    var prevBtn = document.getElementById("prevBtn");
    var nextBtn = document.getElementById("nextBtn");
    var bannerWidth = banners[0].offsetWidth;
  
    // Mostrar el banner actual
    function showCurrentBanner() {
      var translateX = -(currentIndex * bannerWidth);
      carousel.style.transform = `translateX(${translateX}px)`;
    }
  
    // Navegación hacia el banner anterior
    function showPrevBanner() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = banners.length - 1;
      }
      showCurrentBanner();
    }
  
    // Navegación hacia el siguiente banner
    function showNextBanner() {
      currentIndex++;
      if (currentIndex >= banners.length) {
        currentIndex = 0;
      }
      showCurrentBanner();
    }
  
    // Agregar eventos a los botones
    prevBtn.addEventListener("click", showPrevBanner);
    nextBtn.addEventListener("click", showNextBanner);
  
    // Mostrar el primer banner al cargar la página
    showCurrentBanner();
  
    // Cambiar de banner automáticamente cada 3 segundos
    setInterval(showNextBanner, 3000);
  });
  