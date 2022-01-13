function mostrar(elemento) {
  window.location.href = "./usuario.html"
  var display = document.getElementById(elemento).style.display;
  if (display == "block") {
    document.getElementById(elemento).style.display = 'none';
  } else {
    document.getElementById(elemento).style.display = 'block';
  }
}

function usuario() {
  
  window.location.href = "./listusuario.html"
}

