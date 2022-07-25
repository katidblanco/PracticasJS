let free = false;
const validarCliente = (time) => {
    let edad = prompt("¿Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert(`son las ${time}:00hs y podes pasar gratis`);
            free = true
        } else {
            alert(`son las ${time}:00hs y podes pasar, pero tienes que pagar`);
        }
    } else {
        alert("no podes pasar, sos menor de edad");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
