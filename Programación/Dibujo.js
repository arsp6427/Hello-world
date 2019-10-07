var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );


var D = document.getElementById("dibujitos");
var ancho = D.width;
var lienzo = D.getContext("2d");


function dibujandolinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var color_lineas = "#FAA";
  var espacio = ancho / lineas;

  for(l=0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio *(l + 1);
      dibujandolinea(color_lineas, 0, yi, xf, 300);
  }

  dibujandolinea(color_lineas, 1, 1, 1, 299);
  dibujandolinea(color_lineas, 1, 299, 299, 299);

}
