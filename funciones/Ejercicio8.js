let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

function palindromo(cadena){
    return cadena.split("").reverse().join("") == cadena;
}

rl.question(`Ingrese el texto que desea saber si es palíndromo: `, (cadena) => {
    let espalindromo = palindromo(cadena);
    console.log(`El resultado es: ` + espalindromo);
    rl.close();
}) 