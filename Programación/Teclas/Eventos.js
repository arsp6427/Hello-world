var teclas = {
//Variable especial bloque de codigo: sintaxis se decalar var igual que
// una variable cualquier y se abre con { se cierra con };.
// cada valor se separa con ,/*
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
    switch (evento.keyCode)
    // Hay que tener cuidado porque switch solamente aplica para ciertos casos
    // siempre preguntarse si el usarlo ayuda a leer el codigo si no lo hace
    // mejor evitarlo.
   {
    case teclas.UP:
    // case para definir cada uno de las casos del switch. syntax{"
    //    case expression:
    //
    //    break;   ""}
    // siendo "expression" dispaparia en el switch cada case se cierra con un break;
      console.log("Arriba")
      break;
    case teclas.DOWN:
          console.log("abajo")
      break;
    case teclas.LEFT:
        console.log("izq")
      break;
    case teclas.RIGHT:
      console.log("der")
      break;
    default:
    //default seria la el else de esta instrucción. syntax{"
    //    default:
    //
    //  en este caso no se usa el ya que el "break;" se usa para que el ciclo termine"}
      console.log("Otra tecla")
    break;
  }
}
