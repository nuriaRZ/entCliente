
  document.write("<h3>A)</h3>")      
  var enlaces = document.getElementsByTagName("a");   
   document.write("Numero de enlaces : "+ enlaces.length);
    
   document.write("<h3>B)</h3>")  
    var enlaces = document.getElementsByTagName("a");    
    document.write("Dirección del último enlace: "+enlaces[enlaces.length-1].href); 

    document.write("<h3>C)</h3>")  
    var contador = 0;
   for(var i=0; i<enlaces.length; i++) {    
    if(enlaces[i].href == "http://www.marca.es/" ) {
      contador++;
    }
  }
  document.write("Enlaces del marca: "+contador);

  document.write("<h3>D)</h3>")  
  var parrafos = document.getElementsByTagName("p");   
  var enlaces = parrafos[2].getElementsByTagName("a");   
   document.write("Numero de enlaces del tercer párrafo : "+ enlaces.length);
          