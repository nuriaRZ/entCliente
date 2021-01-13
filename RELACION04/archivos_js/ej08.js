var array = [];

    for(let i=0; i<10; i++){
        array[i] = Math.floor(Math.random() * 100) + 1;
    }
    
function imparesYpares(array) {
    document.write(array.toString()+"<br>");
    array.sort(function(a, b){return a - b});
    document.write(array.toString());
    var pares = [];
    var impares = [];
    for (let i=0; i<array.length; i++) {
        if(array[i]%2==0){
            pares.push(array[i]);
        }else impares.push(array[i]);
        
    }

    document.write("<br>Array de pares: "+ pares.toString()+"<br>");
    document.write("Array de impares: "+ impares.toString()+"<br>");
    
}

document.getElementById("pr").innerHTML = imparesYpares(array);