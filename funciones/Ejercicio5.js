let readline = require('readline');

let rl = readline.createInterface(
    process.stdin,
    process.stdout
);


function subCadena(cadena, inicio, fin) {
    if (inicio < 0 || fin > cadena.length || inicio >= fin) {
        return 'Posiciones inválidas.';
    }
    return cadena.substring(inicio, fin);
}
rl.question('Ingrese una frase: ', (cadena) => {
    rl.question('Ingrese la posición en la que desea iniciar: ', (inicio2) => {
        rl.question('Ingrese la posición en la que desea terminar: ', (fin2) => {
            const inicio = parseInt(inicio2);
            const fin = parseInt(fin2);

            const resultado = subCadena(cadena, inicio, fin);

            console.log('La nueva frase es: ' + resultado);

            rl.close();
        });
    });
});