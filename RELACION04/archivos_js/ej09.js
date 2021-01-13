var array = [];

    for(let i=0; i<10; i++){
        array[i] = Math.floor(Math.random() * 100) + 1;
    }

function ordenar(array) {
    document.write("Array: "+array.toString()+"<br>");
    array.sort(function(a, b){return a - b});
    document.write("Ordenado ascendente: "+ array.toString()+"<br>");
    array.sort(function(a, b){return b-a});
    document.write("Ordenado descendente: "+ array.toString());
}
document.getElementById("pr").innerHTML = ordenar(array);