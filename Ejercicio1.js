let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese sus nombres: ', (nombres) => {
    rl.question('Ingrese sus apellidos: ', (apellidos) => {
        console.log(`Hola,  ${nombres} ${apellidos}.`);
    process.exit()
    })
})