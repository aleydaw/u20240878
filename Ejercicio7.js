let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

function invertirCadena(cadena) {
    return cadena.split("").reverse().join("");
}

rl.question(`Ingrese la cadena de texto: `, (cadena) => {
    let invertir = invertirCadena(cadena);
    console.log(`La cadena de texto invertida es: ` + invertir);
    process.exit();
}) 
