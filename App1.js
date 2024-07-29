let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('¿Cual es tu nombre? ', (nombre) => {
    console.log(`Hola,  ${nombre}.`);
    process.exit()
})