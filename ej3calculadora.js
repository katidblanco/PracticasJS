const sumar = (num1,num2) => {
    return parseInt(num1) + parseInt(num2);
}

const restar = (num1,num2) => {
    return parseInt(num1) - parseInt(num2);
}

const multiplicar = (num1,num2) => {
    return parseInt(num1) * parseInt(num2);
}

const dividir = (num1,num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert("¿Qué operación desea realizar?");
let operación = prompt("1:Suma, 2:Resta, 3:Multiplicación, 4:División");

if (operación == 1) {
    let numero1 = prompt("Ingrese el primer numero para sumar");
    let numero2 = prompt("Ingrese el segundo numero para sumar");
    resultado = sumar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}

else if (operación == 2) {
    let numero1 = prompt("Ingrese el primer numero para restar");
    let numero2 = prompt("Ingrese el segundo numero para restar");
    resultado = restar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}

else if (operación == 3) {
    let numero1 = prompt("Ingrese el primer numero para multiplicar");
    let numero2 = prompt("Ingrese el segundo numero para multiplicar");
    resultado = multiplicar(numero1,numero2)
    alert(`El resultado es ${resultado}`);
}

else if (operación == 4) {
    let numero1 = prompt("Ingrese el primer numero para dividir");
    let numero2 = prompt("Ingrese el segundo numero para dividir");
    resultado = dividir(numero1,numero2)
    alert(`El resultado es ${resultado}`);
} else {
    alert("No se ha encontrado esa operación")
}