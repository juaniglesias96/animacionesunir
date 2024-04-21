function mostrarTexto() {
  var texto = document.querySelectorAll('.texto');
  texto.forEach(function(element) {
    element.style.display = 'inline-block'; // Muestra el texto
  });
}

function ocultarTexto() {
  var texto = document.querySelectorAll('.texto');
  texto.forEach(function(element) {
    element.style.display = 'none'; // Oculta el texto
  });
}


