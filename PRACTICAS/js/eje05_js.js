let f = () => { return 'funcion flecha sin parametros'}
let f1 = (x) => x*x;

console.log( f() );

console.log( f1(4) );

alert('esta es una alerta informativa');

let valor = prompt('deme la cantidad:', '');


console.log(typeof valor);

let  confirmar = confirm('seguro de borrar?');

console.log(confirmar);

if (confirmar == true )
console.log('se elimino')
else  
console.log('el usuario cancelo')

window.onload = getColor;

function getEdad() 
{
var edad = prompt('Introduce tu edad', '');
if (isNaN(edad)) {
alert('Introduce un número válido');
} else {
     if (Number(edad) > 0 && Number(edad) < 18) {
         alert('Menor de edad!');
        }
     else {
         if (Number(edad) >= 18 && Number(edad) < 60) {
            alert('Persona Adulta');
        } else
         {  alert('Adulto mayor'); }
        }
      }
  }


  function getColor() {
    var color = prompt('¿Cuál es tu color favorito?', '');
    switch (color) {
      case 'rojo':
       alert('El color rojo es una buena opción!');
      break;
      case 'negro':
       alert('El color negro combina con todo!');
      break;
      case 'blanco':
       alert('Es genial este color');
      break;
      default:
       alert('El color:' + color + ' no está en la lista');
      break;
      }
    }
    