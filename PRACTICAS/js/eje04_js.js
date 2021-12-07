//eje04_js.js

// const x = 0;
var operacion = function(x,y) { 
    return  x + y;
}

var a = operacion(5,8);
 console.log(a);


  
/* operacion =   function(x,y) {
      return x - y;
 } */
var b = operacion(5,8);
console.log(b);

function init() {
    document.getElementsByTagName('button')[0].onclick = sumar;
}

// funcion myfun
function myFun(fun, arr) {  // fun , arr  son tipos de variables o sea funcion y arreglo 


    let result = []; // Crea un arreglo   result es de tipo arreglo

    let i; // Declara una variable
    for (i = 0; i < arr.length; i++) { //longitud del arreglo
      result[i] = fun(arr[i]); 
    }
    
    return result;
    }


 
const cubo = function (x) {   //  a la variable cubo  se le  asgina una funcion
    return x * x * x;
    };


    let array = [2, 4, 6, 8, 10];
    let valores = myFun(cubo, array)   //  myfun recibe varible cubo que es una funcion, y el array 

    console.log('arreglo valores:', valores);

    var num1 = 23, num2 = 4, name = 'Luis';

// Esta función está definida en el ámbito global
function multiplicar(x,y) {
return x * y ;
}

  console.log( multiplicar(3,4));

// Un ejemplo de función anidada
function adicionar() {
    var num1 = 10, num2 = 20
    function add() {
        return  name + ' anotó ' + (num1 + num2); }

return  add();

}

console.log(adicionar());

console.log(add());