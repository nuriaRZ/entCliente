function invertir(cadena) {    
    var arrayCadena = cadena.split("").reverse().join("");
    document.write(arrayCadena);
    
}
document.getElementById("pr").innerHTML = invertir('hola que tal');


