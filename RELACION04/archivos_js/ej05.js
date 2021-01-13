function contarAnios(fecha){
    var d = new Date(fecha);
    var anio = d.getFullYear();
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear();
    document.write(`Fecha: ${fecha}<br>`);
    document.write(`Fecha: ${fechaActual}<br>`);
    document.write('Han pasado '+(anioActual-anio)+' años');

}
document.getElementById("pr").innerHTML = contarAnios('2015,10,24');
