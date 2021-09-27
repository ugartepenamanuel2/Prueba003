import {leerTeclado} from './util/entradateclado'
console.log("Hola Mundo")
//Creamos la variable función main que llamamos main
let main = async () => {
const valor = await leerTeclado ('Dime algo')
console.log(`Me has dicho: ${valor}`)
}
//Invocamos a la función
main();