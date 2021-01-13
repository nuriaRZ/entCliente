var repeticiones =(cadena, texto) =>{
    let i=0;
    let contador = 0;
    while(i!=-1){
        i = cadena.indexOf(texto, i);
        if(i != -1 ){
            contador++;
            i++;
        }
    }
    
    return contador;
}
console.log(repeticiones("hola mundo, hola pepe, hola juan", "hola"));
