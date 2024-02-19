// Poner un mensaje flotante para cuando aparezca el mensaje negación

let listaPalabra = [];
let listaNegra = ["A","E","I","O","U","Á","É","Í","Ó","Ú","á","é","í","ó","ú", "", /[\^*@!"#$%&/()=?¡!¿'\\]/gi];
let mensajeNegacion = "Solo minúsculas, sin acéntos ni caractéres especiales!";

function MensajeBotonEncriptar(){  //LISTO
    let text_valor = document.getElementById('texto-usuario').value; //Con esto obtengo el valor del textarea
    // console.log("Este es el mensaje del textarea: " + text_valor);

    if (!validarPalabra(text_valor)) {
       alert(mensajeNegacion);

    } else {
       Encriptador(text_valor);
       let etiqueta = document.querySelector('#p-resultado');
       etiqueta.innerHTML = CrearCadena(listaPalabra);
       vaciarListaPalabra(listaPalabra);
     }
}

function MensajeBotonDesencriptar(){ // LISTO
    let text_valor = document.getElementById('texto-usuario').value;
    let etiqueta = document.querySelector('#p-resultado');
    etiqueta.innerHTML = Desencriptador(text_valor); 
}

function vaciarListaPalabra(lista){ //LISTO
    lista.length = 0;
}

function validarPalabra(palabra) { // LISTO
  // Verificar si la palabra contiene algún carácter no permitido
  for (let i = 0; i < palabra.length; i++) {
      if (listaNegra.includes(palabra[i])) {
          return false;
      }
  }
  return true;
}

function CrearCadena(lista) { //LISTO
    let palabraFinal = "";
    //   El for reccore la lista que ya tiene la palabra encriptada y la va sumando ej h + o = ho  / ho + l  = hol / hol + a = hola
    for (let i = 0; i < lista.length; i++) {
      let letra = lista[i];
      palabraFinal += letra;
    }
    return palabraFinal;
  }

  function CopiarTexto(){
    let etiqueta = document.querySelector('#p-resultado');
    const copiarContenido = async () => {
        try {
            await navigator.clipboard.writeText(etiqueta.textContent);
            alert('Contenido copiado al portapapeles');
        } catch (err) {
            alert('Error al copiar: ' + err);
        }
    }
    copiarContenido();
}


function Encriptador(palabraRecibida) { //LISTO
  for (let i = 0; i < palabraRecibida.length; i++) {
    let letra = palabraRecibida[i];
    //Ingresa cada letra a una lista
    listaPalabra.push(letra);
  }
  //Recorre la lista cambiando las vocales por la parte encriptada
  
  for (let j = 0; j < listaPalabra.length; j++) {
      if (listaPalabra[j] == "a") {
        listaPalabra[j] = "ai";
      } else if (listaPalabra[j] == "e") {
        listaPalabra[j] = "enter";
      } else if (listaPalabra[j] == "i") {
        listaPalabra[j] = "imes";
      } else if (listaPalabra[j] == "o") {
        listaPalabra[j] = "ober";
      } else if (listaPalabra[j] == "u") {
        listaPalabra[j] = "ufat";
      }
  }
  return listaPalabra;
}

function Desencriptador(palabra) { //LISTO
  let encriptado = true;
  
  while (encriptado) {
    if (palabra.includes("ai")) {
      palabra = palabra.replace("ai", "a");
    }
    if (palabra.includes("enter")) {
      palabra = palabra.replace("enter", "e");
    }
    if (palabra.includes("imes")) {
      palabra = palabra.replace("imes", "i");
    }
    if (palabra.includes("ober")) {
      palabra = palabra.replace("ober", "o");
    }
    if (palabra.includes("ufat")) {
      palabra = palabra.replace("ufat", "u");
    }
    
    encriptado = palabra.includes("ai") || palabra.includes("enter") || palabra.includes("imes") || palabra.includes("ober") || palabra.includes("ufat");
  }
  
  return palabra;
}




