let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/Teemo_0.jpg') {
      miImage.setAttribute('src','images/firefox2.png.jpg');
    } else {
      miImage.setAttribute('src', 'images/Teemo_0.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Teemo es genial, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  estableceNombreUsuario();
}
else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Teemo es genial,' + nombreAlmacenado;
}

miBoton.onclick = function() {
  estableceNombreUsuario();
}