  function copiarAlPortapapeles(id_elemento, id_boton) {

  document.getElementById(id_boton).innerText ="Copiado"

  let interval = setInterval(() => {
    document.getElementById(id_boton).innerText ="Copiar"
    clearInterval(interval)
    return;
  }, 3000)

    // Crea un campo de texto "oculto", este por un textarea
  
    var aux = document.createElement("textarea");
  
    // Asigna el contenido del elemento especificado al valor del campo
    // este para vaciar el contenido
  
    aux.innerHTML = document.getElementById(id_elemento).innerHTML
  
    // Añade el campo a la página
    document.body.appendChild(aux);
  
    // Selecciona el contenido del campo
    aux.select();
  
    // Copia el texto seleccionado
    document.execCommand("copy");
  
    // Elimina el campo de la página

    document.body.removeChild(aux);
}

  
