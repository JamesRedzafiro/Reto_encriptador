
function borrar_img() {
    var salida = document.querySelector(".salida");
    var image = document.querySelector(".image");

    if (salida.value.trim() !== "") {
      image.style.display = "none";
    } else {
      image.style.display = "block";
    }
}
  
document.addEventListener('DOMContentLoaded', function() {
  //Agregar cuadro de texto
 var boton = document.querySelector('.copiar');
 boton.addEventListener('click', function() {
 // Crear un elemento div para mostrar el mensaje
    var mensaje = document.createElement('div');
    mensaje.textContent = 'El texto se ha copiado';
    mensaje.style.borderRadius = '10px';
    mensaje.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.5)';
    mensaje.style.position = 'fixed';
    mensaje.style.top = '25%';
    mensaje.style.left = '50%';
    mensaje.style.transform = 'translate(-50%, -50%)';
    mensaje.style.backgroundColor = 'lightblue';
    mensaje.style.padding = '10px';
  
  // Agregar el elemento a la página
 document.body.appendChild(mensaje);
  
  // Ocultar el mensaje después de 1 segundo
    setTimeout(function() {
      mensaje.style.display ='none';
    }, 1000);
  });

});



  
//encriptar, el orden de las vocales a cambiar es importante, sino, varia el resultado
  function encriptar() {
    var entrada = document.querySelector(".entrada").value; 
    //el "getElementById" obtiene el valor del HTML con "id" igual a "entrada" y lo almacena en una variable
    //el .replace hace que se reemplacen los valores indicados, la "g" hace referencia a que se reemplazarán todos los valores
    entrada = entrada.replace(/e/g, "enter");
    entrada = entrada.replace(/i/g, "imes");
    entrada = entrada.replace(/o/g, "ober");
    entrada = entrada.replace(/a/g, "ai");
    entrada = entrada.replace(/u/g, "ufat");
    document.querySelector(".salida").value = entrada;
    console.log(entrada);
  
}
  
  
//copiar 
  function copiar(){
    var salida = document.querySelector(".salida");
    //"navigator.clipboard" se usa para acceder al portapapeles
    //"writeText" sirve para copiar el contenido al portapapeles
    //Le agregamos la function, despues del "then" para que borre el contenido de "salida" después de copiar
    navigator.clipboard.writeText(salida.value).then(function() {
      salida.value = "";
    });
    console.log("copiado");
    
}
  
//pegar
  function pegar(){
    var entrada = document.querySelector(".entrada");
    navigator.clipboard.readText().then(function(texto) {
      entrada.value = texto;
    });
    console.log("pegado");
}
  
//desencriptar, aquí también encontré el order perfecto para que no muestre errores al desencriptar
  function desencriptar() {
    var entrada = document.querySelector(".entrada").value;
    entrada = entrada.replace(/imes/g, "i");
    entrada = entrada.replace(/ober/g, "o");
    entrada = entrada.replace(/ai/g, "a");
    entrada = entrada.replace(/ufat/g, "u");
    entrada = entrada.replace(/enter/g, "e");
    document.querySelector(".salida").value = entrada; 
    console.log(entrada)
}

function clearBackground() {
  var textarea = document.querySelector(".myTextarea");
  if (textarea.value.length > 0) {
    textarea.style.backgroundColor = "transparent"; // Borra el fondo si hay contenido
  } else {
    textarea.style.backgroundColor = "#F3F5FC"; // Restaura el fondo inicial si no hay contenido
  }
}