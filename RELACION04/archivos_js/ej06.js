function contarLetras(cadena){
    var contVocal = 0, contCons = 0;
   
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] == 'a' || cadena[i] == 'e' || cadena[i] == 'i' || cadena[i] == 'o' ||cadena[i] == 'u'){
            contVocal ++;
        }else {
            if (cadena[i]!=" ") contCons ++;
        }
        
    }
    

     document.write("Cadena: " + cadena + "<br>"); 
     document.write("Vocales: " + contVocal + "<br>");  
     document.write("Consonantes: " + contCons + "<br>");
     
 
 }
 document.getElementById("pr").innerHTML = contarLetras('hola mundo');