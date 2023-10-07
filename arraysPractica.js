var frutas=["Banana", "Manzana", "Pera"]
var cantidad=[6, 8, 19]

//Método PUSH

frutas.push("Kiwi","Ananas")
document.write(frutas,"<br>")
console.log(cantidad)

//FOR para recorrer imprimir array
for(i=0; i<frutas.length; i++){
    console.log(frutas[i], cantidad[i])
}

//Metodo POP

var eliminarFruta = frutas.pop()
console.log("Fruta eliminada: ", eliminarFruta)
console.log(eliminarFruta)

//Método UNSHIFT

frutas.unshift("azul", "rojo")
console.log(frutas)