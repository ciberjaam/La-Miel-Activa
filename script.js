document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
  document.querySelector(".nav-links").classList.toggle("nav-links-responsive");
});

// Función para cambiar la emisora cuando se selecciona una opción en el <select>
function cambiarEmisora() {
  var reproductor = document.getElementById("reproductor-audio");
  var emisoraSeleccionada = document.getElementById("emisoras").value;

  // Crear una nueva etiqueta <source>
  var source = document.createElement("source");
  source.src = emisoraSeleccionada;
  source.type = "audio/mpeg";

  // Eliminar todas las etiquetas <source> existentes dentro del reproductor
  while (reproductor.firstChild) {
    reproductor.removeChild(reproductor.firstChild);
  }

  // Agregar la nueva etiqueta <source> al reproductor
  reproductor.appendChild(source);

  // Cargar el reproductor
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

    // Limitar el resultado a dos decimales
    result = result.toFixed(2);

    // Mostrar el resultado
    document.getElementById("result").innerHTML = "Resultado: " + result;
  } else {
    // Mostrar mensaje de error si no se ingresaron valores válidos
    document.getElementById("result").innerHTML = "Por favor, ingresa los valores correctos.";
  }
}


var currentSlide = 0;
var slides = document.getElementsByClassName("slider-item");
var slideInterval;

function showSlide(n) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("nextBtn").addEventListener("click", nextSlide);

function stopSlideInterval() {
  clearInterval(slideInterval);
}

function startSlideInterval() {
  slideInterval = setInterval(nextSlide, 3000); // Intervalo de tiempo para el desplazamiento automático (3 segundos en este ejemplo)
}

var sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener("mouseover", stopSlideInterval);
sliderContainer.addEventListener("mouseout", startSlideInterval);

// Llama a la función startSlideInterval para comenzar el desplazamiento automático al cargar la página
startSlideInterval();


  
