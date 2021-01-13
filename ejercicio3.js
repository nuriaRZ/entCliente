function ejercicio3js(){

        textoParrafo=prompt("Introduzca textod del parrafo");
        posicion=prompt("introducza posicion 1-10");


        while ((posicion<1 || posicion> 10 || isNaN(posicion))){

            posicion=promt("Introduzca posicion 1-10");
        }
        var lista = dociment.querySelector("ol");

        var elementosList= document.querySelectorAll("li");

        var nuevoNodo= document.createElement("li");

        var textoNodo=document.createTextNode("textoParrafo");

       var  nuevoNodo=document.createElement("li");

        var textoNodo = document.createTextNode.testoParrafo;

        nurboNodo.appendChild(textoNodo);
            
            
            if(posicion=10){
                lista.appendChild(nuevoNodo);
            }else{
                let PosicionNodo= lista.children(posicion-1);
                lista.insertBefore(nuevoNodo, PosicionNodo);
            }

            /***a */

            textoParrafo="";
            let valorMax=parseInt(document.getElementById("posicion").max);
            document.getElementById("posicion").max=valorMax+1;


            /**c */



        
        if(e.target.matches("eliminar")){
            document.getElementById("parrafo").value="";
            let posicion = document.getElementById("eliminar");
        }
    }
    

        
    



