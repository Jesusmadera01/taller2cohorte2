var titulo = document.createElement('h1');
titulo.style.textAlign="center";

titulo.textContent = '15+ Web Design Projects with Source code..! ';
titulo.style.borderBottom = '1px solid #000'; 
titulo.style.width = '126%';

var contenedorPrincipal = document.createElement('div');
contenedorPrincipal.className = 'contenedor-principal'; 
contenedorPrincipal.style.display = 'flex';
contenedorPrincipal.style.flexDirection = 'column'; 
contenedorPrincipal.style.width = '50%'; 


contenedorPrincipal.appendChild(titulo);

function crearColumna(texto, imagenSrc) {
  var columna = document.createElement('div');
  columna.className = 'columna'; 
  
  columna.style.width = '38%';

  columna.style.display = 'flex';
  columna.style.flexDirection = 'column'; 

  columna.style.marginTop="15px";
  columna.style.marginRight="50px";
  columna.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.8)';

  var imagen = document.createElement('img');
  imagen.style.width="250px"
  imagen.style.height="115px"
  imagen.src = imagenSrc;

  var contenido = document.createElement('div');
  contenido.style.display = 'flex';
  contenido.style.flexDirection = 'row'; 

  var parrafo = document.createElement('p');
  parrafo.textContent = texto;

  var boton1 = document.createElement('button');
  boton1.style.height="30px";
  boton1.style.marginTop="10px"
  boton1.style.marginLeft="46px";
  boton1.textContent = 'Source Code';

  var boton2 = document.createElement('button');
  boton2.style.height="30px";
  boton2.style.marginTop="10px"
  boton2.style.marginLeft="4px";
  boton2.textContent = 'Preview Demo';

  contenido.appendChild(parrafo);
  contenido.appendChild(boton1);
  contenido.appendChild(boton2);

  columna.appendChild(imagen);
  columna.appendChild(contenido);

  return columna;
}


var fila1 = document.createElement('div');
fila1.className = 'fila'; 
fila1.style.display = 'flex';
fila1.style.width = '100%'; 


fila1.appendChild(crearColumna('Hamburger Food ', '../recursos/imagen1.png'));
fila1.appendChild(crearColumna('Bat Ball', '../recursos/imagen2.png'));
fila1.appendChild(crearColumna('Cuda Portfolio', '../recursos/imagen3.png'));

var fila2 = document.createElement('div');
fila2.className = 'fila'; 
fila2.style.display = 'flex';
fila2.style.width = '100%'; 

fila2.appendChild(crearColumna('Dream Theme', '../recursos/imagen4.png'));
fila2.appendChild(crearColumna('Facebook Login','../recursos/imagen5.png'));
fila2.appendChild(crearColumna('Fashion Ecommerce', '../recursos/imagen6.png'));


contenedorPrincipal.appendChild(fila1);
contenedorPrincipal.appendChild(fila2);


document.body.appendChild(contenedorPrincipal);