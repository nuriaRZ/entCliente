//MOSTRAR ARRAY
//var array=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
//array.forEach(mostrarArray);
function mostrarArray(value){
    document.write(value+" ");
}

//LLENAR ARRAY DE NUMEROS Y SUMAR ELEMENTOS

function sumarArray(){
    var array = [];
    var suma = 0;
    for (let i = 0; i < 10; i++) {
        var num = parseInt(prompt("Introduce un número"));
        array[i]=num;
        document.writeln(array[i]);
        suma += array[i];
    }
    document.write("<br>Suma: "+suma);
}
//document.getElementById("pr").innerHTML = sumarArray();

//PALINDROMO

//var cadena = prompt("Introduce una frase");
//alert(palindromo(cadena));
function palindromo(cadena){
    var cadenaOriginal = cadena.toLowerCase();
    var espacios = cadenaOriginal.split("");
    var cadenaSinEspacios = "";

    for(i in espacios){
        if(espacios[i] != " ") cadenaSinEspacios += espacios[i];
    }
    var letras = cadenaSinEspacios.split("");
    var letrasAlReves = cadenaSinEspacios.split("").reverse();
    var iguales =true;
    for(i in letras){
        if(letras[i]==letrasAlReves[i]){}
        else{
            iguales = false;
        }
    }

    if(iguales){
        return "Esa frase es un palindromo";
    }else return "Esa frase no es un palindromo";
}
//RELLEBAR ARRAY DE FORMA ALEATORIA
var array = [];
function arrayNumAleatorios(array){
    
    for(let i=0; i<5; i++){
        array[i]=Math.floor(Math.random()*100)+1;        
    }  
    return array.toString();
}  
document.write(arrayNumAleatorios(array)+"<br>");

//ORDENAR ARRAY DE MAYOR A MENOR

document.write(array.sort(function(a, b){return a - b}));

/*METODOS DE ARRAYS
 https://www.w3schools.com/js/js_array_methods.asp
 */