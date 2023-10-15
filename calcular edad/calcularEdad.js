

function calcularEdad(){  //Creamos una función que se ejecuta al hacer cic sobre el botón Calcular Edad

    var fechaActual = new Date();  //new Date() es un método para la fecha--- https://www.w3schools.com/js/js_date_methods.asp
    var anioActual = fechaActual.getFullYear();  //getFullYear es un método que obtiene el valor del año en una fecha

    

    var fechaNac = document.querySelector("#fecha").value; // Accedemos al DOM, al elemento input que contiene la fecha actual
    var fechaNac = new Date(fechaNac); //Convertimos la fecha actual a tipo fecha con el método new Date()
    var anioNac = fechaNac.getFullYear(); //getFullYear es un método que obtiene el valor del año en una fecha


    var resultado = anioActual - anioNac;  //Restamos el año actual del año de nacimiento

    document.querySelector("#mostrarEdad").innerHTML = String(resultado); //Accedemos al DOM para mostrar el resultado en 
                                                                            //el elemento h3 id #mostrarEdad
                                                                            //y convertimos la variable resultado en string

    
        }


//Para desarrollar este ejercicio es necesario trabajar 1ro:
//**Variables, condicionales y funciones.
//**Métodos
//**Trabajo con el DOM, acceder a elementos y mostrar contenido.