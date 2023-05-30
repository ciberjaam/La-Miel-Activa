document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

 function cambiarEmisora() {
 var emisorasDropdown = document.getElementById("emisoras");
 var reproductorAudio = document.getElementById("reproductor-audio");
                      
var emisoraSeleccionada = emisorasDropdown.value;
reproductorAudio.src = emisoraSeleccionada;
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
  