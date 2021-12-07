

window.onload = function () { 

     // Numero de enlaces de la pagina

    var info = document.getElementById('info');
    var urls =  document.getElementsByTagName('a');  
    var numURLs = urls.length;
   //  console.log(urls);
   // alert('el numero de enlaces  de la pagina es: ' +  numURLs); 

    info.innerHTML = 'El número de enlaces de la pagina es ' + numURLs;
    
   
    // Direccion del penultimo enlace

    
    //   va del 0 al 6... son 7 elemntos... pedimos el sexto es length - 2
    var ligas =  document.getElementsByTagName('a');  //  a es el elemento da el valor de los elementos

    // console.log(ligas);
    // alert('Las ligas son: ' +  ligas);   // [a, a, a, a, a, a, a]

    var url_ligas =  ligas[ligas.length - 2 ].getAttribute("href");   //  la propiedad  o atributo del elemento (el link en este caso)
    var numligas = ligas.length;
    // console.log(url_ligas);
   // alert('La penultima URL es: ' +  url_ligas);   
    info.innerHTML = info.innerHTML + '<br> La penúltima URL es ' + url_ligas;

    // Numero de enlaces que apuntan a http://prueba

    let total = 0;

   for (let i = 0; i < ligas.length; i++) {
       if (ligas[i].getAttribute("href") === 'http://prueba' ){
          
       total = total + 1;

       }       
   }

   // alert('El numero de enlaces prueba  es: '  + total);
   info.innerHTML = info.innerHTML + '<br> El número de enlaces de prueba es ' + total;

    // Numero de enlaces del tercer parrafo

    var numparr =  document.getElementsByTagName('p');  // arreglo de P

    var anclas = numparr[2].getElementsByTagName("a"); // 
    let numanclas = anclas.length;
    

    info.innerHTML =  info.innerHTML + '<br> El número de enlaces del tercer parrafo es  ' + numanclas;

    //console.log(numparr);
    //console.log(anclas);
    //console.log(anclas.length);
 
   
    };