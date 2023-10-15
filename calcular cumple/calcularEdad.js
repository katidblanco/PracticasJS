

function calcularEdad(){

    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear();

    

    var fechaNac = document.querySelector("#fecha").value;
    var fechaNac = new Date(fechaNac);
    var anioNac = fechaNac.getFullYear();

    var resultado = anioActual - anioNac;

    document.querySelector("#mostrarEdad").innerHTML = String(resultado);

    
    


    }