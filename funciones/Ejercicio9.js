let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

function contarVocales(cadena){
    let contador = 0;
    let vocales = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']

    for(let x = 0; x < cadena.length; ++x){
        if (vocales.indexOf(cadena[x]) >= 0){
            ++contador;
        }
    }
    return contador;
}

rl.question(`Ingrese la frase: `, (cadena) => {
    let contador = contarVocales(cadena);
    console.log(`La cantidad de vocales son: `+ contador)
    rl.close();
}) 