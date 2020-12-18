/**Crear una función expresada que al recibir un numero como parametro imprimima por consola
 “El número es par” si lo es o “El número es impar” si no lo es. En el caso que el numero fuese 0
 mostrar un mensaje de error. Se debe incluir un if ternario en script */

function parOimpar (numero){
    if (numero%2 === 0) {
        console.log('El numero es par!');
    }else{
        console.log('El numero es impar!');
    }
}
console.log(parOimpar(4));