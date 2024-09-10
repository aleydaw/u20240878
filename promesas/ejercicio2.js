// edad suficiente
let edad = 12;

function validar(edd) {
    return new Promise((resolve, reject) => {
        if (edd >= 18) {
            resolve("Edad válida para acceder al contenido");
        } else {
            reject("Edad insuficiente para acceder al contenido");
        }
    });
}

validar(edad)
    .then(res => {
        console.log(`Mensaje: ` + res);
    })
    .catch(error => {
        console.log(`Error: ` + error);
    });
