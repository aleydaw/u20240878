let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);

function reemplazarPalabra(texto, palabraAnterior, palabraNueva) {
    const nuevoTexto = texto.replace(new RegExp(palabraAnterior, 'g'), palabraNueva);
    return nuevoTexto;
}

rl.question('Ingrese un mensaje: ', (texto) => {
    rl.question('Ingrese la palabra nueva: ', (palabraNueva) => {
        rl.question('Ingrese la palabra que desea reemplazar: ', (palabraAnterior) => {
            let resultado = reemplazarPalabra(texto, palabraAnterior, palabraNueva);
            console.log('La nueva frase es: ' + resultado);
            rl.close();
        });
    });
});