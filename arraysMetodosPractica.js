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
console.log("La posición de Ananas es: ", posicion)

if(frutas.indexOf("Manzana")==-1){
    console.log("Manzana no aparece")
}
console.log("**************************")