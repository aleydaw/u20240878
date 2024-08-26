let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

function letraMayusculas(cadena){
    const mayuscula = cadena.split(' ').map(palabra => 
        palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toLocaleLowerCase()
    )
    .join(' ');
    return mayuscula
}

rl.question('Ingrese un mensaje: ', (cadena) => {
    let resultado = letraMayusculas(cadena);
    console.log(`El mensaje modificado es: `+ resultado);
    process.exit();
})