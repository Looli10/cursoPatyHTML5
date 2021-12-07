// eje06js
window.onload() {
var ingredientes = new Array();
ingredientes[0] = 'azucar';
ingredientes[1] = 'café';
ingredientes[2] = 'leche';

//console.log( ingredientes[2]);


//console.log( ingredientes);

//console.log('LONGITUD DEL ARREGLO', ingredientes.length);

var scores =  new Array();

// console.log(scores);

var scores2 = Array(20);

var scores3 = [];

var ingredientes2 =  new Array('elemento1', 'elemento2', true, false, 89);  // inicializar el arreglo 

var ingredientes3 =  ['elemento3', 'elemento4', true, false];  // inicializar el arreglo 

//console.log(ingredientes2[4]);
//console.log(ingredientes2[5]);


for(let i=0; i < ingredientes2.length; i++)
     console.log(ingredientes2[i]);

     for (let i of ingredientes3) {
       console.log(i);

     }

   
 var todos = ingredientes2.concat(ingredientes3);  // concatena  la lista 2 y lista 3
   console.log(todos);
   console.log(typeof todos);

var index = ingredientes2.indexOf('elemento3');  //   indexof devuelve la posicion del elemento 
console.log(index);
 


var index2 = ingredientes2.lastIndexOf(true);
console.log(index2);

var str = ingredientes2.join('|');  // elemento1|elemento2|true|false|89
console.log(str);

var lastelement = ingredientes2.pop();
console.log(lastelement);

var newsize = ingredientes2.push('new element');
console.log(ingredientes2);
console.log(newsize);

console.log(ingredientes2.reverse());

var firstelement = ingredientes2.shift();
console.log(ingredientes2);
console.log(firstelement);


var pedazos = ingredientes2.slice(1,3)  //a partir de la posicion 1
console.log(pedazos)

var numeros = [8, 9, 2, 5, 1, 3, 4];
console.log(numeros.sort);

var cadena = ingredientes2.toString();
console.log(cadena);

let elemento = numeros.unshift(20);
console.log(numeros);
console.log(elemento);

    }

/*
ingredientes[0] = 'azúcar';
ingredientes[1] = 'café';
ingredientes[2] = 'leche';
let scores = new Array();
let scores2 = Array(10);
let scores3 = [];  */