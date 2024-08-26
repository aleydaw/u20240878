let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

function contarPalabras(cadena){
    const palabras = cadena.trim().split(/\s+/);
    return palabras.length;
}

rl.question('Ingrese una frase: ', (cadena) => {
            let resultado = contarPalabras(cadena);
            console.log('El total de palabras son: ' + resultado);
            rl.close();

});