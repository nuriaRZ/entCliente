var array = [];

    for(let i=0; i<5; i++){
        array[i] = Math.floor(Math.random() * 50) + 1;
    }
    

menorYmayor = (array) => {
    document.write(array.toString()+"<br>");
    array.sort(function(a, b){return a - b});
    document.write(array.toString());
    var menor = array[0];
    var mayor = array[array.length-1];
    document.write("<br>Menor: " + menor +"<br>Mayor: " + mayor);
}

document.getElementById("pr").innerHTML = menorYmayor(array);




