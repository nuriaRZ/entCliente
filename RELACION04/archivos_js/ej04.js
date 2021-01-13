function capicua(num){
    var invertido = num.split("").reverse().join("");
    
    if(num == invertido){
        document.write(`El número ${num} es capicúa`);
    }else document.write(`El número ${num} no es capicúa`);

}
document.getElementById("pr").innerHTML = capicua('22');
