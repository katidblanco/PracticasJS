var frutas=["Banana", "Manzana", "Pera"]
var cantidad=[6, 8, 19]

//Método PUSH
console.log("PUSH")
frutas.push("Kiwi","Ananas")
document.write(frutas,"<br>")
console.log(cantidad)
console.log("**************************")

//FOR para recorrer imprimir array
console.log("FOR PARA IMPRIMIR ARRAYS")
for(i=0; i<frutas.length; i++){
    console.log(frutas[i], cantidad[i])
}
console.log("**************************")

//Metodo POP
console.log("POP")
var eliminarFruta = frutas.pop()
console.log("Fruta eliminada: ", eliminarFruta)
console.log(eliminarFruta)
console.log("**************************")

//Método UNSHIFT
console.log("UNSHIFT")
frutas.unshift("azul", "rojo")
console.log(frutas)
console.log("**************************")

//CONCAT
console.log("CONCATENAR")
var ciudad=["Roma"]
var pais=["Italia"]
var conactenar=ciudad.concat(pais)
console.log(conactenar)

var concatenar1 = ciudad.concat(pais, "Brasil")
console.log(concatenar1)

console.log("**************************")

//indexOf
console.log("indexOf")
var frutas=["Banana", "Ananas", "Pera", "Ananas"]
var posicion=frutas.indexOf("Ananas")
console.log("La primera aparición de Ananas es en la posición: ", posicion)

if(frutas.indexOf("Manzana")==-1){
    console.log("Manzana no aparece")
}
console.log("**************************")

//lastIndexOf
console.log("lastIndexOf")
var frutas=["Banana", "Ananas", "Pera", "Ananas", "amigos", "fruteria"]
console.log(frutas)
var posicion=frutas.lastIndexOf("Ananas")
console.log("La posición del último elemento _Ananas es: ",posicion)
console.log("**************************")

//SLICE
console.log("**SLICE**")
var animales=["caballo", "perro", "elefante", "mariposa", "dinosaurio", "calamar"]
console.log("Animales: ", animales)
console.log( "SLICE() devuelve todos: ", animales.slice())
console.log( "SLICE(3) devuelve desde el 3 en adelante: ", animales.slice(3)) 
console.log( "SLICE(2,4) devuelve desde el 2 hasta el 4, no inclusive: ", animales.slice(2,4))
console.log( "SLICE(-2) devuelve los últimos 2, va de atrás hacia adelante: ", animales.slice(-2)) 
console.log( "SLICE(3,-1) devuelve desde el 1 hasta el último, no inclusive: ", animales.slice(3,-1 )) 